# Imagen base
FROM node:18

# Crear directorio
WORKDIR /app

# Copiar dependencias e instalar
COPY package*.json ./
RUN npm install

# Copiar todo el proyecto y compilar
COPY . .
RUN npm run build

# Servidor de producción
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]
