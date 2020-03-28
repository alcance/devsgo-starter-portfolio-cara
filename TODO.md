Todo

- Auth0 integration
  √ Auth0 Service.
- Database Modeling
- Investigate Gatsby Backend integration

## 03/27/2020

- Proteger rutas
- Formulario (Formik)
- Servicio backend FeathersJS
	- Profile

## 03/25/2020

- Agregar validacion en rutas protegidas de perfil
- Formulario de Auth0 con social login
- Capa de persistencia

# Notes

https://auth0.com/blog/securing-gatsby-with-auth0/
https://www.gatsbyjs.org/blog/2019-03-21-add-auth0-to-gatsby-livestream/#authentication-in-gatsby
https://github.com/jlengstorf/gatsby-auth0-app/blob/master/.env.EXAMPLE

## Pasos

1.Configurar Callback URL

2. Logout URL
3. Allowed Web Origins
4. JWT Signature

5. Instalar Auth0-Spa-JS
6. Add reach router with navigate method
7. Auth0 react wrapper (`src/react-auth0-spa.js`)

- Classic Universal Login
  Experiencia de login sobre librerias de Auth0
  (Lock.js, auth0.js, MFA Widget, Password reset)
  _ Customization option
  _ Templates

4. Activar New Universal Login
   - No JS
   - Nuevas funcionalidades
   - Social login reauth sin config adicional
5. Crear un componente de Navbar (src/component/Navbar/)
   Hara render de dos botones (in/out)

6. Integrar SDK (scr/index.js)

   - Wrap Auth0Provider en app
   - Especificar `redirect_url`
   - Crear history.js
   - Mantienen la config en un mismo lugar
   - `onRedirectCallback` recuerdo la ruta al hacer login cuadno fue redireccionado por no estar autenticado.

7. `src/auth_config.json` (.env.develop)

8. Actualizar App.js o el Compomnent principal con useAuth

---

II. Seguridad Perfil

1. - Crear componente PrivateRoute.js `componentes/PrivateRoute.js`
2. Proteger las rutas en la applicacion
