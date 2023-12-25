package services

import (
	"net/http"
	"strings"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"time"
	"github.com/dgrijalva/jwt-go"
)


type TokenService struct {
	region            string
	userPoolID        string
	userPoolClientID  string
	jwkKeys           []map[string]interface{}
	requestClient     func(string) (*http.Response, error)
	claims            jwt.MapClaims
}


const HTTP_HEADER = "Authorization"

func ExtractAccessToken(requestHeaders http.Header) string {
	access_token := ""
	auth_header := requestHeaders.Get(HTTP_HEADER)

	if auth_header != "" && strings.Contains(auth_header, " ") {
		parts := strings.Split(auth_header, " ")
		if len(parts) == 2 {
			access_token = parts[1]
		}
	}

	return access_token
}



func NewTokenService(userPoolID, userPoolClientID, region string, requestClient func(string) (*http.Response, error)) *TokenService {
	return &TokenService{
		region:           region,
		userPoolID:       userPoolID,
		userPoolClientID: userPoolClientID,
		requestClient:    requestClient,
	}
}

func (ts *TokenService) loadJWKKeys() error {
	keysURL := fmt.Sprintf("https://cognito-idp.%s.amazonaws.com/%s/.well-known/jwks.json", ts.region, ts.userPoolID)
	response, err := ts.requestClient(keysURL)
	if err != nil {
		return err
	}
	defer response.Body.Close()

	body, err := io.ReadAll(response.Body)
	if err != nil {
		return err
	}

	err = json.Unmarshal(body, &ts.jwkKeys)
	if err != nil {
		return err
	}

	return nil
}

func (ts *TokenService) extractHeaders(token string) (map[string]interface{}, error) {
	parts := jwt.SplitToken(token)
	headerJSON, err := base64.RawURLEncoding.DecodeString(parts[0])
	if err != nil {
		return nil, err
	}

	var headers map[string]interface{}
	err = json.Unmarshal(headerJSON, &headers)
	if err != nil {
		return nil, err
	}

	return headers, nil
}

func (ts *TokenService) findPKey(headers map[string]interface{}) (map[string]interface{}, error) {
	kid, ok := headers["kid"].(string)
	if !ok {
		return nil, fmt.Errorf("kid not found in headers")
	}

	for _, key := range ts.jwkKeys {
		if key["kid"].(string) == kid {
			return key, nil
		}
	}

	return nil, fmt.Errorf("public key not found in jwks.json")
}

func (ts *TokenService) verifySignature(token string, pkeyData map[string]interface{}) error {
	publicKey := jwt.Algorithm(pkeyData).PublicKey()
	message, signature := jwt.SplitToken(token)

	if err := jwt.Verify(message, signature, publicKey); err != nil {
		return err
	}

	return nil
}

func (ts *TokenService) extractClaims(token string) (jwt.MapClaims, error) {
	claims := make(jwt.MapClaims)
	_, err := jwt.Decode([]byte(token), jwt.MapClaims(claims))
	if err != nil {
		return nil, err
	}

	return claims, nil
}

func (ts *TokenService) checkExpiration(claims jwt.MapClaims, currentTime time.Time) error {
	exp, ok := claims["exp"].(float64)
	if !ok {
		return fmt.Errorf("exp not found in claims")
	}

	if currentTime.Unix() > int64(exp) {
		return fmt.Errorf("token is expired")
	}

	return nil
}

func (ts *TokenService) checkAudience(claims jwt.MapClaims) error {
	audience, ok := claims["aud"].(string)
	if !ok {
		return fmt.Errorf("aud not found in claims")
	}

	if audience != ts.userPoolClientID {
		return fmt.Errorf("token was not issued for this audience")
	}

	return nil
}

func (ts *TokenService) Verify(token string, currentTime time.Time) (jwt.MapClaims, error) {
	if token == "" {
		return nil, fmt.Errorf("no token provided")
	}

	if err := ts.loadJWKKeys(); err != nil {
		return nil, err
	}

	headers, err := ts.extractHeaders(token)
	if err != nil {
		return nil, err
	}

	pKeyData, err := ts.findPKey(headers)
	if err != nil {
		return nil, err
	}

	if err := ts.verifySignature(token, pKeyData); err != nil {
		return nil, err
	}

	claims, err := ts.extractClaims(token)
	if err != nil {
		return nil, err
	}

	if err := ts.checkExpiration(claims, currentTime); err != nil {
		return nil, err
	}

	if err := ts.checkAudience(claims); err != nil {
		return nil, err
	}

	// You don't need to handle errors again here
	ts.claims = claims

	return claims, nil
}

