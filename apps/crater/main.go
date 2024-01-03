package main

import (
	"log"
	"github.com/joho/godotenv"
	"net/http"
	"os"
	
)

func home(res http.ResponseWriter, req *http.Request) {
	res.Write([]byte("Wagging....Tailz"))
}

func loadEnv () {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func main() {

	loadEnv()

	mux := http.NewServeMux()

	// routes
	mux.HandleFunc("/", home)
	// mux.HandleFunc("/api/auth", routes.AuthHandler)
	
	PORT, exists := os.LookupEnv("PORT")
	if exists {
		log.Printf("Starting server on port %s \n", PORT)
		err := http.ListenAndServe(":"+PORT, mux)
		log.Fatal(err)
	} else {
		log.Fatal("PORT environment variable not set")
	}

}
