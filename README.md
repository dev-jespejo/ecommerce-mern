# MERN Stack E-Commerce App with Admin Panel

Este proyecto es una aplicación de comercio electrónico completamente funcional desarrollada con la pila MERN (MongoDB, Express.js, React, Node.js). El objetivo del proyecto es aprender a construir una aplicación compleja con características avanzadas, como panel de administración, autenticación, y manejo de pedidos, utilizando tecnologías modernas.

## Características

- **Frontend**: React, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Base de datos**: MongoDB
- Autenticación de usuarios con JWT
- Vista de administración para gestionar productos
- Página de listado y detalles de productos
- Funcionalidades de carrito de compras
- Proceso de compra y pago
- Función de búsqueda avanzada
- Gestión de reseñas de productos

## Tecnologías utilizadas

- **Frontend**:
  - React
  - Redux Toolkit
  - Tailwind CSS
- **Backend**:
  - Node.js
  - Express.js
- **Base de datos**:
  - MongoDB (con Mongoose)

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

## Instalación

1. Clona el repositorio:
   ```bash
    git clone https://github.com/tu-usuario/mern-ecommerce-app.git
    cd mern-ecommerce-app
    cd client
    npm install
    cd ../server
    npm install
    ```
2. Instala las dependencias del cliente y servidor:
``` bash
    cd client
    npm install
    cd ../server
    npm install
```

3. Configura las variables de entorno:
Crea un archivo .env en el directorio server con el siguiente contenido:
```
MONGO_URI=tu_conexion_mongo
JWT_SECRET=tu_secreto_jwt
```

4. Inicia la base de datos MongoDB:
```
mongod
```

5. Ejecuta el servidor y el cliente:

```
# En el directorio server
npm run dev

# En el directorio client
npm start
```

6. Accede a la aplicación en http://localhost:3000.

### Estructura del proyecto
- Client: Contiene el código del frontend construido con React, Redux Toolkit y Tailwind CSS.
- Server: Contiene el código del backend desarrollado con Node.js, Express.js y Mongoose.

Recursos adicionales

https://ui.shadcn.com/docs/installation/vite


