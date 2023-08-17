
package crater

import (
	"context"
	"testing"
	"database/sql"
	"github.com/stretchr/testify/require"
)


func TestUser(t *testing.T) {
	
	arg:= CreateUserParams{
		Username: "Kohl",
		Email: "root@root.com",
		PasswordHash: "secret",
		FollowerCount:  sql.NullInt32{Int32: 5000, Valid: true},
		FollowCount:    sql.NullInt32{Int32: 150, Valid: true},
		ProfilePicture: sql.NullString{String: "profile.png", Valid: true},
		Bio:            sql.NullString{String: "Imagine...", Valid: true},
	}

	user, err := testQueries.CreateUser(context.Background(), arg)

	require.NoError(t, err)
	require.NotEmpty(t, user)


	// TODO: test user Id creation


}