import { useState } from "react";
import ClimaCiudad from "./ClimaCiudad";

function ListaCiudades(){
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState(null);

  const ciudades = [
    "Mexico City",
    "Guadalajara",
    "Monterrey",
    "New York",
    "Los Angeles",
    "Miami",
    "Toronto",
    "Vancouver"
  ];

  function seleccionarCiudad(ciudad){
    setCiudadSeleccionada(ciudad);
  }

  return (
    <section className="ciudades">
      <h2 className="title">Ciudades Sedes Mundial 2026</h2>

      <ul className="grid-ciudades">
        {ciudades.map((ciudad, index) => (
          <li
            key={ciudad}
            className={`city ${ciudad === ciudadSeleccionada ? "active" : ""}`}
            onClick={() => seleccionarCiudad(ciudad)}
            data-color={index % 6}
          >
            {ciudad}
          </li>
        ))}
      </ul>

      <div className="clima-box">
        {!ciudadSeleccionada ? (
          <p className="hint">Seleccione una ciudad para ver el clima </p>
        ) : (
          <ClimaCiudad ciudad={ciudadSeleccionada} />
        )}
      </div>
    </section>
  );
}

export default ListaCiudades;
