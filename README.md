Realice un Sistema de Autenticacion con JWT en Express. 
JWT lo utilice para generar tokens que verifique la identidad del usuario de manera segura y eficiente. 

Estructura del Código
El código está organizado en un servidor Express básico con tres endpoints principales:

1) GET '/' - Endpoint de Prueba

Este endpoint devuelve un mensaje de prueba para verificar que el servidor está en funcionamiento.

2) POST '/login' - Endpoint de Autenticación

Este endpoint autentica al usuario y genera un token JWT válido por 30 minutos.

3) GET '/verify' - Endpoint de Verificación de Token

Este endpoint protegido verifica la validez del token JWT proporcionado en el encabezado Authorization.


IMPLEMENTACION DE SEGURIDAD 

'secretkey' una cadena segura y compleja para producción.

El token JWT expira después de 30 minutos ({ expiresIn: '30m' }), 



EJEMPLO DE FUNCIONAMIENTO

Para obtener el Token: 
Utilice ThunderClient: 

POST http://localhost:3000/login

en JSON:
{
    "id": 1,
    "name": "Messi",
    "email": "Lionel24@gmail.com"
}

COMO RESPUESTA: 

{
    "token": "<Codigo_generado>"
}

AHORA PARA VERIFICAR EL TOKEN: 

GET http://localhost:3000/verify

Authorization: Bearer "<Codigo_generado>"

RESPUESTA: 

{
  "mensaje": "verify fue creado",
  "authData": {
    "user": {
      "id": 1,
      "name": "Messi",
      "email": "Lionel24@gmail.com"
    },
    "iat": 1718737995,
    "exp": 1718739795
  }
}