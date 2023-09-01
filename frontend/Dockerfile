FROM node:latest

# Establecer el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copiar el package.json y el package-lock.json a la imagen
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install
RUN npm install -g @quasar/cli

# Copiar el resto de los archivos del proyecto a la imagen
COPY . .

# Exponer el puerto en el que el servidor de desarrollo escuchará (si es necesario)
EXPOSE 8080

# Comando para iniciar el servidor de desarrollo
ENTRYPOINT ["quasar","dev"]

# Comando para iniciar el servidor de producción o staging
# Recordar que corre por el puerto 5000
#CMD [ "npm", "start" ]
