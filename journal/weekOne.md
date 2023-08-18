
- Creating Docker Compose File for tailz + Crater + Cloud DB
- Setting up Postgres Test DB with Docker, Dbdiagram and TablePlus
- Creating Entity Models and Relationships via DBLM @dbdiagram.io
- Installing go-migrate
- Creating migrations
- Create Makefile to automate db migrations with up or down scripts



CLI Commands

 migrate create -ext sql -dir db/migrations -seq test_schema

 migrate -path ./migrations -database "postgresql://root:root@localhost:5432/testdb?sslmode=disable" -verbose up



Note -> Down migration to drop tables in the exact reverse of the order they were created


## Generate SQLC CRUD Code with Docker Image


## FUDocker commands
docker build -t sqlc-generator .

docker run -it --entrypoint /bin/bash sqlc-generator
docker run --rm -v /c/Users/Geller/Desktop/Tailz-Protocol/apps/crater:/crater sqlc-generator

docker system prune -a

## Improve Queries for proper SQLc generation 

Edited cardinality and function names



## Setup main_test.go and custom tests for CRUD code

- define global query object for testing db connections and transactions

- setup lib pq driver for postgres

- setup base test against docker db instance



## Tailz ->

- Setup aws amplify with Next
- Setup multi step form for signup
- need to define global types
- need to fix module trace error with Amplify SDK