package routes

import (
    "github.com/dgrijalva/jwt-go"
    "net/http"
)


func AuthHandler(res http.ResponseWriter, req *http.Request) {
	// tokenString := req.Header.Get("Authorization")
    // tokenString = strings.Replace(tokenString, "Bearer ", "", 1) // Remove "Bearer " prefix

    // token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
    //     return []byte("YOUR_SECRET_KEY_HERE"), nil // Use your own secret key
    // })

    // if err != nil || !token.Valid {
    //     http.Error(w, "Unauthorized", http.StatusUnauthorized)
    //     return
    // }

    // Token is valid, continue with your logic
}