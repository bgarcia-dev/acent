# Proyecto de tesina: Análisis, diseño e implementación de un prototipo tecnológico para el aprendizaje de la acentuación en el idioma español
---

**Autor:** José Enrique Sevilla Larrea

**Asesora:** Dra. Erika Annabel Martinéz Mirón

**Correo de contacto:** jose.sevillal@alumno.buap.mx

---

## Indice
- [Version de tecnologías usadas](#version-de-tecnologías-usadas)
- [Variables de entorno](#variables-de-entorno)
- [Inicializar proyecto (Base de datos,Migraciones y Semillas)](#inicializar-proyecto-crear-bdmigraciones-y-semillas)
- [Modelos](#modelos)
- [Iniciar el proyecto con configuración por defecto](#iniciar-el-proyecto-con-configuración-por-defecto)
---
## Version de tecnologías usadas

### Backend: Node.Js
> **Nota:** En caso de usar docker o docker-compose estas son las versiones con las que se ha desarrollado el proyecto

La version de entorno de desarrollo es `node v17.4.0`

Se recomienda el uso de la de herramienta [NVM](https://github.com/nvm-sh/nvm), esta herramienta permite seleccionar la versión de node permitiendo tener mas de una versión coexistiendo sin tener que remover e instalar la version correspondiente

## Frontend: Quasar
[Quasar Framework](https://quasar.dev/start/quick-start) es un framework que utiliza vue para generar sus elementos HTML, para el desarrollo de este proyecto se ha usado [Quasar Framework](https://quasar.dev/start/quick-start) en su version 3.7.1, utilizando [Vue 3 orientado a composition api](https://vuejs.org/guide/extras/composition-api-faq.html)

### Base de datos: MySQL
Para la base de datos se opta por utilizar MySQL, la version mas reciente, pues internamente se ocupa el ORM de [Sequelize](https://sequelize.org/docs/v6/) 6.29 con su cliente sequelize-cli 6.6, lo cual significa que usted puede optar por el gestor de base de datos de su elección, mientras sea compatible con [Sequelize](https://sequelize.org/docs/v6/)

Para administrar la base de datos se ocupa phpmyadmin, este cuenta con una configuración que permite la conexión al servidor que usted le especifique en este caso las siguientes son las claves de conexión al configurado en el ambiente de desarrollo con docker
| Puerto | Servidor             | Username | Password   | URL de acceso          |
| ------ | -------------------- | -------- | ---------- | -------------------    |
| 9090   | m4-db                | root     | root       | http://localhost:9090/ |

---
## Variables de entorno
**Backend**
Las variables del entorno de desarrollo pueden son las establecidas en el fichero .env.example, para poder hacer uso de estas variables de entorno preestablecidas para el ambiente de desarrollo bastaría con crear un fichero .env en el directorio raíz, es decir al mismo nivel de este .README con los mismos valores preestablecidos

**Frontend**
Para las variables de entorno quasar framework ocupa un archivo de configuración inicial **quasar.config.js**, este archivo es fundamental pues aparte de definir las variables de entorno permite configurar los plugins, servicios, compilaciones del proyecto y demás, es recomendable consultar la [documentación](https://quasar.dev/quasar-cli-vite/quasar-config-file#introduction) acerca de este archivo.

Las variables de entorno esta ubicas en `env: ctx.dev`, esta ternaria actúa de tal forma que mientras se ejecute el comando `quasar dev` definido en script del package.json como `npm run dev` se tomaran en cuenta los valores de la primera parte de la ternaria, si se compila el proyecto tomara la segunda parte de la ternaria para los valores del ambiente de producción

```bash
env: ctx.dev
    ? {
        // Se definen las variables de entorno
        TEST: 'Variable de entorno de prueba',
        // IMPORTANTE la url de conexión en localhost debe tener especificado el protocolo de conexión http'
        API_URL: 'http://localhost:3000/v1'
    }
    : {
        // Definir el valor del servidor del backend que lo esta alimentando para ambiente de production
        // API_URL:  https.example.com/api/v1
    }
```
---

## Inicializar proyecto (Crear BD,Migraciones y Semillas)

**Nota:** Ya debe haber creado o configurado su .env para el proyecto, para más información consulte las sección [Variables de entorno](#variables-de-entorno)

Gracias a `Sequelize-cli` tenemos definido en nuestro `package.json` scripts para facilitar el proceso de inicializarían del proyecto, asumiendo que usted esta utilizando docker tiene que estar dentro del contenedor del backend (m4-backend) para ejecutar los comandos relacionados a docker.

```bash
Entrar a contenedor del backend m4-backend
$ docker exec -it m4-backend bash
```

### Inicializar por defecto

Un comando de rápido acceso para inicializar toda la parte de base de datos del proyecto por defecto es:

> npm run db:drop && npm run db:create && npm run migrate && npm run db:seed

Borrara la base de datos en caso de existir, si llega a ocurrir algún tipo de error debe remover la primera concatenación de ejecución: `npm run db:drop &&`.
La ultima parte de la concatenación de ejecución crea la base de datos, sus tablas y por ultimo los datos iniciales del sistema.

A continuación se describe el significado de las secuencia de comandos y su función de cada uno de ellos

### Crear la base de datos

Para este punto se asume que ya se ha configurado la base de datos y su conexión a ella, ya se teniendo un servicio de su preferencia o utilizando el servicio de docker-compose.

Este comando crea la base datos **vacía**, el nombre de la base de datos como el resto de su información se encuentra definida en el .env

> npm run db:create

### Borrar la base de datos

Una de las razones por las que querría eliminar la base de datos seria para poder limpiar toda la información pertinente y volver a restaurar el proyecto desde su punto inicial, por querer reflejar una cambio desde su inicio o alguna razón adversa

> npm run db:drop

### Migraciones - Crear tablas

Las migraciones son una forma de **crear las tablas** de la base de datos, estas migraciones están definidas en ficheros en `app/migrations`.
El comando crea las tablas vacías, es decir sin datos

> npm run migrate

### Semillas - Precargar datos

Las semillas(Seeders) son datos de precargados para el uso del proyecto, algunas semillas son importantes para el correcto funcionamiento del proyecto ya que definen algunos datos importantes para las tablas catalogo(Las tablas catalogo son tablas que tiene datos estáticos o datos que no se van a modificar como información de status,tipos de colecciones o items)

El directorio que contiene las semillas es `app/seeders`.

---

### Modelos
Los modelos son una representación de las tablas de nuestra base de datos que nos otorga nuestro ORM sequelize

La ubicación de los modelos que definimos es app/models, utilizamos paranoid para tener un softDelete de la información, así como freezeTableName para especificar el nombre de la tabla a la que hace referencia.

Las propiedades de los modelos siempre se definen en snake-case, habilitamos la propiedad underscored: true para esto.

Siempre que se cree un nuevo modelo que tenga relación con los modelos anteriormente creados definimos su relación dentro de la clase del modelo con static associate(models)

Los hooks, getters y setters así como funciones del modelo se definen dentro del mismo fichero del modelo

---
## Iniciar el proyecto con configuración por defecto

Para empezar el proyecto corre el siguiente comando:

Esto creara todo el ambiente de desarrollo, con toda la configuración por defecto, usted ya solo tendrá que inicializar la base de datos como se indica en [Inicializar proyecto (Base de datos,Migraciones y Semillas)](#inicializar-proyecto-crear-bdmigraciones-y-semillas)

```bash
    docker-compose -f docker-compose-dev.yaml up -d
```

Listar servicios activos:
```bash
    docker ps
```

Para iniciar todos los contenedores del entorno de desarrollo:
```bash
    docker-compose -f docker-compose-dev.yaml start
```

Para parar todos los contenedores del entorno de desarrollo:
```bash
    docker-compose -f docker-compose-dev.yaml stop
```

Destruir todos los contenedores del entorno de desarrollo:
```bash
    docker-compose -f docker-compose-dev.yaml down
```

Construir y ejecutar todos los contenedores del entorno de desarrollo:
```bash
    docker-compose -f docker-compose-dev.yaml up
```
