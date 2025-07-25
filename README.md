# Inventario Backend - API REST

Backend del desafío técnico "Panel de Control de Inventario" para un taller mecánico, desarrollado con **Node.js**, **Express**, **MongoDB** y **Mongoose**, con autenticación mediante **JWT** y rutas protegidas.

---

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- JWT (autenticación)
- Bcrypt (hash de contraseñas)
- Dotenv
- CORS
- ES Modules (import/export moderno)

---
## Instalación

1. Clonar el repo:

```bash
git clone https://github.com/tuusuario/inventario-backend.git
cd inventario-backend
```
2. Instalar dependencias:

Configurar .env: (Dejo esto para que sea de prueba, pero no deberia subirlo al README.md e incluirlo en el .gitignore)

```bash
PORT=4000
MONGO_URI=mongodb+srv://belen:123456be@inventory.pj3isz5.mongodb.net/?retryWrites=true&w=majority&appName=inventory
JWT_SECRET=mideseosecreto123
```
--

### Datos mock (opcional) 
Para precargar categorías y productos con imágenes cree un script. Para correrlo:
```bash
npm run mock
```
## Correr el servidor
```bash
npm start
```

## Testing
### Autenticación
### Registrar usuario
```bash
POST /api/auth/register

{
  "email": "belu@example.com",
  "password": "123456"
}
```

### Login

```bash
POST /api/auth/login
{ "token": "..." }
```
Usar ese token en los headers de las rutas protegidas:
```bash
Authorization: Bearer TU_TOKEN
```

## Endpoints principales

### Productos

| Método | Ruta                   | Descripción                          |
|--------|------------------------|--------------------------------------|
| GET    | `/api/productos`       | Listar productos (con filtros y paginación) |
| GET    | `/api/productos/:id`   | Ver detalle de producto              |
| POST   | `/api/productos`       | Crear producto **(protegido)**       |
| PUT    | `/api/productos/:id`   | Editar producto **(protegido)**      |
| DELETE | `/api/productos/:id`   | Eliminar producto **(protegido)**    |

**Filtros disponibles en `GET /api/productos`:**

- `?nombre=` → Búsqueda por nombre parcial (case-insensitive)
- `?stockMenor=` → Productos con stock menor al valor
- `?precioMin=` y `?precioMax=` → Rango de precios
- `?categoria=` → Filtrado por ID de categoría
- `?limit=` y `?offset=` → Paginación

### Categorías

| Método | Ruta                       | Descripción                         |
|--------|----------------------------|-------------------------------------|
| GET    | `/api/categorias`          | Listar todas las categorías         |
| POST   | `/api/categorias`          | Crear categoría **(protegido)**     |
| PUT    | `/api/categorias/:id`      | Editar categoría **(protegido)**    |
| DELETE | `/api/categorias/:id`      | Eliminar categoría **(protegido)**  |

**Filtros disponibles en `GET /api/categorias`:**

- `?nombre=` → Búsqueda por nombre parcial (case-insensitive)
- `?padre=null` → Categorías raíz (sin categoría padre)
- `?padre=ID` → Subcategorías de una categoría específica
- `?limit=` y `?offset=` → Paginación


## Repositorios del proyecto
Este proyecto forma parte de un sistema completo

| Parte     | Repo                                         |
|-----------|----------------------------------------------|
| Frontend  | [inventory-car-frontend](https://github.com/belenamiune/inventory-car-frontend)        |
| Backend   | [inventory-car-backend](https://github.com/belenamiune/inventory-car-frontend)  

## Author

- [@belenamiune](https://github.com/belenamiune)

