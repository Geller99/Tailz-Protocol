package main

import (
	"log"
	"net/http"
	"os"
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


	PORT, exists := os.LookupEnv("PORT")
	
	if exists {
		log.Printf("Starting server on port %s \n", PORT)
		err := http.ListenAndServe(":"+PORT, mux)
		log.Fatal(err)
	} else {
		log.Fatal("PORT environment variable not set")
	}

}
