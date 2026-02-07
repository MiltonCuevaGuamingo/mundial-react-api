import { useEffect } from "react";
import { useState } from "react";

function ClimaCiudad({ ciudad }) {
  const [clima, setClima] = useState(null);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (!ciudad) return;

    async function obtenerClima() {
      setCargando(true);

    const respuesta = await fetch(
      `/api/weather?q=${ciudad}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric&lang=es` 
    );
      const datos = await respuesta.json();
      setClima(datos);
      setCargando(false);
    }
    obtenerClima();
  }, [ciudad]);

  if (cargando) return <p>Cargando clima....</p>;
  
  if (!clima || clima.cod !== 200) {
    return <p>No se pudo obtener el clima para {ciudad}.</p>;
  }

  return (
    <div>
      <h3>Clima en {ciudad}</h3>
      <p>Temperatura: {clima.main.temp} °C </p>
      <p>Condicion: {clima.weather[0].description}</p>
    </div>
  );
}

export default ClimaCiudad;
