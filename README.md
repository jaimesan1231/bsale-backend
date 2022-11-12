# BSale Test - backend

API de Bsale Test para enviar datos filtrados al frontend. Esta API fue creada con NodeJs, Express y MySQL con el objetivo de poner a prueba conocimientos básicos de envío de datos

## Estructura JSON

Al realizar un peticion HTTP, el servidor retornara un JSON con la siguiente estructura:
![Estructura JSON](/images/screen1.jfif)

- id: Id del producto (int)
- name: Nombre del producto (varchar)
- url_image: Url de la imagen del producto (varchar)
- price: Nombre del producto (float)
- discount: Porcentaje de descuento del producto (int)
- category: Id de la categoria del producto (int)

## GET Productos

`GET /products` te retorna todos los productos

## GET Productos por categoría

`GET /products/category/id` Retorna los productos filtrados por un id perteneciente a una categoría

### Ejemplo

`GET /products/category/6`

### Respuesta

![GET productos por categoria](/images/screen2.jfif)

## GET Productos por nombre

`GET /products/search/name` Retorna los productos filtrados por el nombre del producto

### Ejemplo

`GET /products/search/bull`

### Respuesta

![GET productos por nombre](/images/screen3.jfif)

## GET Categorías

`GET /categories` Retorna todas las categorias

### Respuesta

![Get categorías](/images/screen4.jfif)

## Link de despliegue

API desplegueda con [Railway](https://bsale-backend-production-8571.up.railway.app)
