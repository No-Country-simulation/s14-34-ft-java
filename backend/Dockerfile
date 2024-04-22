FROM amazoncorretto:17-alpine-jdk
LABEL authors="no-country-s14-34-ft-java"
EXPOSE 8080
MAINTAINER MATIAS

# Copy the source code
COPY target/HappyPaws-0.0.1-SNAPSHOT.jar app.jar

# Run the application
ENTRYPOINT ["java", "-jar", "/app.jar"]