package services

import "log"

// Inside the Verify function, after each error check, add logging:

if err != nil {
	log.Printf("Error: %s", err.Error())
	return nil, ErrorCodeInternalError
}


if err := ts.verifySignature(token, pKeyData); err != nil {
	log.Printf("Error verifying signature: %s", err.Error())
	return nil, ErrorCodeInvalidToken
}