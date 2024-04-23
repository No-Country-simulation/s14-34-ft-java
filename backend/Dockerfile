# Use an OpenJDK runtime as a base image
FROM openjdk:11

#Puerto
EXPOSE 8080

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from your local machine into the container at /app
COPY target/app.jar /app

# Specify the command to run your application
CMD ["java", "-jar", "app.jar"]