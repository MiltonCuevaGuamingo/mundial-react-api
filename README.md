# Mundial React API

## Descripción del proyecto

Este proyecto es una aplicación web desarrollada con React y Vite que consume una API externa para mostrar información del clima de las ciudades sede del Mundial.
La aplicación permite seleccionar una ciudad y consultar su clima actual en tiempo real utilizando la API de OpenWeatherMap.

El proyecto aplica conceptos fundamentales de React como:
- Componentes funcionales
- Manejo de estado con hooks
- Consumo de APIs REST
- Uso de variables de entorno
- Configuración de proxy para evitar problemas de CORS
- Flujo de trabajo con Git y despliegue en Vercel

## Ejecución del proyecto en local

Para ejecutar el proyecto en un entorno local, seguir los siguientes pasos:

1. Clonar el repositorio:
git clone https://github.com/MiltonCuevaGuamingo/mundial-react-api.git

2. Ingresar a la carpeta del proyecto:
cd mundial-react-api

3. Instalar las dependencias:
npm install

4. Crear el archivo .env en la raíz del proyecto y agregar la API Key:
VITE_WEATHER_API_KEY=tu_api_key_aqui

5. Ejecutar el proyecto:
npm run dev

La aplicación se ejecutará en:
http://localhost:5173

## Componentes del proyecto

App.jsx
Descripción:
Es el componente principal de la aplicación. Se encarga de organizar la estructura general del proyecto y renderizar los componentes principales.

Hooks utilizados:
useState

Props:
Ciudad

ListaCiudades.jsx
Descripción:
Muestra una lista de ciudades sede del Mundial. Permite al usuario seleccionar una ciudad y envía dicha información al componente encargado de mostrar el clima.

Hooks utilizados:
useState: almacena la ciudad seleccionada.

Props:
No recibe props.

Funcionalidad:
Maneja eventos onClick
Renderiza dinámicamente la lista de ciudades
Controla qué ciudad está seleccionada

ClimaCiudad.jsx
Descripción:
Consulta la API de OpenWeatherMap para obtener el clima actual de la ciudad seleccionada y muestra la información en pantalla.

Props:
ciudad (string): ciudad seleccionada por el usuario.

Hooks utilizados:
useState: maneja el estado del clima y el estado de carga.
useEffect: ejecuta la petición a la API cada vez que cambia la ciudad.

Funcionalidad:
Consumo de API con fetch
Manejo de estado de carga
Validación de respuesta de la API
Renderizado condicional

## Consumo de API y variables de entorno

La aplicación consume la API de OpenWeatherMap utilizando una API Key que se gestiona mediante variables de entorno.

La clave se almacena en el archivo .env:
VITE_WEATHER_API_KEY=tu_api_key_aqui

Este archivo está incluido en .gitignore para evitar que la clave se publique en GitHub.

## Configuración del proxy (Vercel)

Para evitar problemas de CORS, se configura un archivo vercel.json en la raíz del proyecto con la siguiente configuración:

{
  "rewrites": [
    {
      "source": "/api/weather",
      "destination": "https://api.openweathermap.org/data/2.5/weather"
    }
  ]
}

Gracias a esta configuración, la aplicación realiza las peticiones a través de la ruta relativa /api/weather, lo que permite que funcione correctamente tanto en local como en producción.

## Despliegue

El proyecto se encuentra desplegado en Vercel.
Antes del despliegue se configuró la variable de entorno VITE_WEATHER_API_KEY directamente en el panel de Vercel.

La aplicación funciona correctamente en producción sin exponer la API Key y sin errores de CORS.
