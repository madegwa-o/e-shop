# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven build output (JAR file) to the working directory
COPY target/e-shop-0.0.1-SNAPSHOT.jar app.jar

# Expose the application port (adjust according to your app settings)
EXPOSE 8080

# Command to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
