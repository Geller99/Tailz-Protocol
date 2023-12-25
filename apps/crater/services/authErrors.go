
package services

import "fmt"

type InvalidTokenError string
type ExpiredTokenError string
type InvalidAudienceError string
type InternalError string

func (e InvalidTokenError) Error() string {
    return fmt.Sprintf("Invalid token: %s", string(e))
}

func (e ExpiredTokenError) Error() string {
    return fmt.Sprintf("Token has expired: %s", string(e))
}

func (e InvalidAudienceError) Error() string {
    return fmt.Sprintf("Invalid audience: %s", string(e))
}

func (e InternalError) Error() string {
    return fmt.Sprintf("Internal server error: %s", string(e))
}
