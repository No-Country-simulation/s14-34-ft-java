# Use an OpenJDK runtime as a base image
FROM openjdk:17

#Puerto
EXPOSE 8080

# Copy the JAR file from your local machine into the container at /app
COPY  target/app.jar app.jar

# Specify the command to run your application
ENTRYPOINT ["java", "-jar", "/app.jar"]