
- Creating Docker Compose File for tailz + Crater + Cloud DB
- Setting up Postgres Test DB with Docker, Dbdiagram and TablePlus
- Creating Entity Models and Relationships via DBLM @dbdiagram.io
- Installing go-migrate
- Creating migrations
- Create Makefile to automate db migrations with up or down scripts



CLI Commands

 migrate create -ext sql -dir db/migrations -seq test_schema

 migrate -path ./migrations -database "postgresql://root:root@localhost:5432/testdb?sslmode=disable" -verbose up

 ![Alt text](image.png)


Note -> Down migration to drop tables in the exact reverse of the order they were created