package main

import (
	"log"
	"net/http"
	"tailzprotocol/routes"
)

func home(res http.ResponseWriter, req *http.Request) {
	res.Write([]byte("Wagging....Tailz"))
}

func main() {
	mux := http.NewServeMux()

	// routes
	mux.HandleFunc("/", home)
	mux.HandleFunc("/api/auth", routes.AuthHandler)

	log.Println("Starting server on :4000")
	err := http.ListenAndServe(":4000", mux)
	log.Fatal(err)
}