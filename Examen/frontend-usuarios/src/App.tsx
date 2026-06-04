import { useEffect, useState } from "react";

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
}

function App() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/usuarios")
      .then(res => res.json())
      .then(data => setUsuarios(data));
  }, []);

  const crearUsuario = async () => {
    const nuevo = { id: Date.now(), nombre, correo };
    const res = await fetch("http://localhost:3001/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevo)
    });
    const data = await res.json();
    setUsuarios([...usuarios, data]);
    setNombre("");
    setCorreo("");
  };

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {usuarios.map(u => (
          <li key={u.id}>{u.nombre} - {u.correo}</li>
        ))}
      </ul>
      <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
      <input value={correo} onChange={e => setCorreo(e.target.value)} placeholder="Correo" />
      <button onClick={crearUsuario}>Agregar</button>
    </div>
  );
}

export default App;
