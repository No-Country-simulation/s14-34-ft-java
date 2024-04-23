# Use an OpenJDK runtime as a base image
FROM openjdk:11

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from your local machine into the container at /app
COPY target/HappyPaws-0.0.1-SNAPSHOT.jar /app

# Specify the command to run your application
CMD ["java", "-jar", "your-application.jar"]
