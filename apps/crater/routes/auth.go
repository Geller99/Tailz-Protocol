package routes

import (
	"net/http"
	"tailzprotocol/services"
	"time"
)

func AuthEndpoint(w http.ResponseWriter, r *http.Request) {
	// Assuming you've already parsed the request headers
	requestHeaders := r.Header

	// Extract the access token from the request headers
	accessToken := services.ExtractAccessToken(requestHeaders)

	// Create an instance of TokenService
	ts := services.NewTokenService("YOUR_USER_POOL_ID", "YOUR_USER_POOL_CLIENT_ID", "YOUR_AWS_REGION", http.Get)

	// Verify the token
	currentTime := time.Now()
	claims, err := ts.Verify(accessToken, currentTime)

	// Handle the error returned by Verify
	if err != nil {
		switch err {
		case services.ErrorCodeInvalidToken:
			http.Error(w, "Invalid token", http.StatusUnauthorized)
		case services.ErrorCodeExpiredToken:
			http.Error(w, "Token has expired", http.StatusUnauthorized)
		case services.ErrorCodeInvalidAudience:
			http.Error(w, "Invalid audience", http.StatusUnauthorized)
		case services.ErrorCodeInternalError:
			http.Error(w, "Internal server error", http.StatusInternalServerError)
		default:
			http.Error(w, "Unknown error", http.StatusInternalServerError)
		}
		return
	}

	// At this point, the token is valid and you can access the claims
	// For example, you can access user ID like this:
	userID := claims["sub"].(string)

	// Perform further authentication/authorization checks if needed

	// Proceed with handling the authenticated request
	// ...
}
