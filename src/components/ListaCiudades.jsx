import { useState } from "react";
import ClimaCiudad from "./ClimaCiudad";

function ListaCiudades(){
    const[ ciudadSeleccionada, setCiudadSeleccionada ] = useState(null);

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
        <div>
            <h2>Ciudades Sedes Mundial 2026</h2>
            <ul>
                {ciudades.map( ciudad => (
                    <li key={ciudad} onClick={() => seleccionarCiudad(ciudad)}
                    selected = {ciudad === ciudadSeleccionada ? true : undefined }>
                        {ciudad}
                    </li>
                ))}
            </ul>
            {ciudadSeleccionada && (
                    <ClimaCiudad ciudad={ciudadSeleccionada} />
            )}
        </div>
    );
}

export default ListaCiudades;