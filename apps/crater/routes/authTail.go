package routes

import "net/http"

func AuthHandler(res http.ResponseWriter, req *http.Request) {
	res.Write([]byte("Authentication Handler"))
}