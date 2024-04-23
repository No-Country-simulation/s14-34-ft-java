# Utiliza una imagen base con el JDK de Amazon Corretto 17 en Alpine Linux
FROM amazoncorretto:17-alpine-jdk

# Metadatos del autor
LABEL authors="no-country-s14-34-ft-java"

# Expone el puerto 8080 para que Render pueda acceder a la aplicación
EXPOSE 8080

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos necesarios para construir la aplicación
COPY backend/noCountry/.mvnw ./.mvnw
COPY backend/noCountry/pom.xml ./

# Copia el directorio src desde el contexto de construcción al directorio de trabajo en el contenedor
COPY backend/noCountry/src ./src

# Concede permisos de ejecución al script mvnw
RUN chmod +x .mvnw

# Construye la aplicación con Maven, omitiendo los tests
RUN ./mvnw clean package -DskipTests

# Ejecuta la aplicación al iniciar el contenedor
CMD ["java", "-jar", "target/edtech-0.0.1-SNAPSHOT.jar"]
