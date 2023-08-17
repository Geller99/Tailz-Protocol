createDb: 
	docker exec -it craterdb createdb --username=root --owner=root testdb


dropDb: 
	docker exec -it craterdb dropdb testdb


migrateup: 
	migrate -path ./migrations -database "postgresql://root:root@localhost:5432/testdb?sslmode=disable" -verbose up

migratedown: 
	migrate -path ./migrations -database "postgresql://root:root@localhost:5432/testdb?sslmode=disable" -verbose down

sqlc:
	sqlc generate

.TEST: 
	createdb

