# Use the official Golang image as the base image
FROM golang:latest

# Set the working directory inside the container
WORKDIR /crater

# Copy your Go project files into the container
COPY . .

# Install sqlc and PostgreSQL client
RUN go install github.com/sqlc-dev/sqlc
RUN apt-get update && apt-get install -y postgresql-client

# Run sqlc generate command
CMD ["sqlc", "generate"]


# List contents of /crater directory during image build
RUN ls /crater