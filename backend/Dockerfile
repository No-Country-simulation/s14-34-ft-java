FROM amazoncorretto:17-alpine-jdk
LABEL authors="no-country-s14-34-ft-java"
EXPOSE 8080
MAINTAINER MATIAS
WORKDIR /app

# Copy the source code
COPY src ./src
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Build the application
RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

# Run the application
CMD ["java", "-jar", "target/edtech-0.0.1-SNAPSHOT.jar"]