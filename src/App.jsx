function App(){
  const ciudades =[
    "Ciudad de México",
    "Guadalajara",
    "Monterrey",
    "Nueva York",
    "Los Ángeles",
    "Miami",
    "Dallas",
    "Atlanta",
    "Toronto",
    "Vancouver"
  ];

  return (
    <>
      <h1>Mundial 2026-Clima de Sedes</h1>
      <ul>
        {ciudades.map( ciudades => (
          <li key={ciudades}>{ciudades}</li>
        ))}
      </ul>
    </>
  );
}

export default App;