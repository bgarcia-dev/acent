# Algunos apuntes básicos

## Crear nueva migración

Para crear una nueva migración sequelize-cli nos proporciona el siguiente comando, recordemos que tenemos que estar ubicados dentro de la carpeta `app`

> npx sequelize-cli migration:create --name nombre-de-la-nueva-migración

Para un cambio en una migración es importante crear una nueva migración y que los campos de esta nueva migración permitan que sean nulos para no romper la compatibilidad con versiones anteriores de la api, la convención es que la migración para un cambio lleve el prefijo `change`

> npx sequelize-cli migration:create --name change-nombre-de-la-nueva-migración

Para remover una migración basta con eliminar el fichero de la migración en cuestión, tome en cuenta que esto puede causar conflictos al momento de la integración continua (CI) si se elimina una migración que ya fue considerada en una integración continua (CI) anterior

---

## Crear nueva semilla

Par crear una nueva semilla sequelize-cli nos proporciona el siguiente comando, recordemos que tenemos que estar ubicados dentro de la carpeta `app`

El comando creara una nueva semilla en la carpeta raíz de los seeder, posteriormente mueva su seeder en su carpeta correspondiente, ya sea si es de production, develop o permission

Para los permisos renombramos el fichero seeder poniendo un postfijo `.permission` después del nombre del permiso y lo ubicamos dentro de su respectiva carpeta, un
ejemplo seria `seed-category.permission.js`

> npx sequelize-cli seed:generate --name nombre-de-la-nueva-semilla
