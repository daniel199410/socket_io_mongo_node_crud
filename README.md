La base de datos se encuentra contenerizada, es necesario tener instalas docker y docker-compose para su ejecución.

Además se debe crear un archivo .env en la raíz del proyecto, el cual debe contener las siguientes variables:

```
MONGO_USER="nombre de usuario"
MONGO_PASSWORD="contraseña"
MONGODB_URI=mongodb://localhost/websocketsdb
```

Los valores del nombre de usuario y la contraseña se deben crear desde cero. Con esos valores se podrá ingresar a 
administrar las BD.
