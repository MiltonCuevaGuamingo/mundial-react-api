import { useState } from "react";

function ListaCiudades(){
    const[ ciudadSeleccionada, setCiudadSeleccionada ] = useState(null);

    const ciudades = [
        "Ciudad de México",
        "Guadalajara",
        "Monterrey",
        "Nueva York",
        "Los Ángeles",
        "Miami",
        "Toronto",
        "Vancouver"
    ];

    function seleccionarCiudad(ciudad){
        setCiudadSeleccionada(ciudad);
    }

    return (
        <div>
            <h2>Ciudades Sedes Mundial 2026</h2>
            <ul>
                {ciudades.map( ciudad => (
                    <li key={ciudad} onClick={() => seleccionarCiudad(ciudad)}
                    style={{ cursor: "pointer", fontWeight: ciudad === ciudadSeleccionada ? "bold" : "normal" }}>
                        {ciudad}
                    </li>
                ))}
            </ul>
            {ciudadSeleccionada && (
                    <p>Ciudad Seleccionada: {ciudadSeleccionada}</p>
            )}
        </div>
    );
}

export default ListaCiudades;