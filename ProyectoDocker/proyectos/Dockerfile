FROM amazoncorretto:17.0.14-alpine3.21

LABEL authors="rvrtdta"
WORKDIR /app
COPY ./target/proyectos-0.0.1-SNAPSHOT.jar ./app.jar
EXPOSE 8080


ENTRYPOINT ["java", "-jar", "app.jar"]