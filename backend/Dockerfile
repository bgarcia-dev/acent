# Usar la imagen base de Node.js versión 17.4.0
FROM node:latest

# Establecer el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copiar el package.json y el package-lock.json a la imagen
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install
RUN npm install -g nodemon

# Copiar el resto de los archivos del proyecto a la imagen
COPY . .

# Exponer el puerto en el que el servidor de desarrollo escuchará (si es necesario)
EXPOSE 3000

# Comando para iniciar el servidor de desarrollo
ENTRYPOINT ["nodemon", "/usr/src/app/app/index.js"]

# Comando para production
#CMD [ "npm", "start" ]
