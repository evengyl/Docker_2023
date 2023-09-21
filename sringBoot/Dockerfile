FROM openjdk:20-jdk-slim

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

COPY ./target/Template-Wiki-0.0.1-SNAPSHOT.jar /app

# Exposer le port sur lequel l'application Spring Boot fonctionnera (par défaut 8080)
EXPOSE 8080

# Commande pour lancer l'application Spring Boot lorsque le conteneur démarre
CMD ["java", "-jar", "Template-Wiki-0.0.1-SNAPSHOT.jar"]