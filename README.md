# Aplicación del Servidor Angular

Esta es una aplicación de servidor Angular que sirve como plantilla para una aplicación web básica. La aplicación está escrita en TypeScript y utiliza Angular como su principal marco de trabajo.

## Características

- La aplicación muestra un título y un contador, que se puede incrementar haciendo clic en un botón.
- La aplicación incluye un botón de navegación que redirige a la página de inicio.
- La aplicación incluye enlaces a las redes sociales de Github, Twitter y Youtube.
- La aplicación utiliza un CSS personalizado para el estilo.

## Cómo funciona

La aplicación utiliza la arquitectura basada en componentes de Angular. El componente principal es `app.component.html`, que sirve como el componente raíz de la aplicación.

El `app.component.html` incluye un logotipo SVG de Angular, un título, un contador y un botón para incrementar el contador. También incluye una lista de enlaces e iconos de redes sociales.

El contador se incrementa mediante una función `incrementCounter()` que se activa al hacer clic en el botón.



La función `incrementCounter()` es un método que se llama cuando se hace clic en el botón "Incrementar". Esta función es responsable de aumentar el valor de la variable `contador` en 1 cada vez que se hace clic.

El botón Inicio es un botón de navegación que utiliza la directiva RouterLink de Angular. Cuando se hace clic, redirige al usuario a la página de inicio de la aplicación. La directiva `routerLink` está vinculada a una matriz `['/home']`, que representa la ruta de navegación deseada.

La aplicación utiliza el Router de Angular para navegar entre diferentes componentes. La directiva `<router-outlet />` se utiliza como un marcador de posición que Angular llena dinámicamente en función del estado actual del router.

## Estilo

La aplicación utiliza CSS para el estilo. Las reglas de CSS se incluyen en el archivo `app.component.html` en sí. La regla `font-weight: 500;`, por ejemplo, establece el peso de la fuente del texto.

## Ejecución de la Aplicación

Para ejecutar la aplicación, necesitas tener instalado Node.js y npm. También necesitas instalar el CLI de Angular. Una vez instalados, puedes ejecutar `npm install` para instalar las dependencias necesarias, y luego `ng serve` para iniciar la aplicación.

Por favor, ten en cuenta que esta es una plantilla básica y se puede extender según tus necesidades.
