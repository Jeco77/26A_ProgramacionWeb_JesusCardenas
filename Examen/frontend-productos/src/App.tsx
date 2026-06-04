import { useEffect, useState } from "react";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

function App() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  useEffect(() => {
    fetch("http://localhost:3002/productos")
      .then(res => res.json())
      .then(data => setProductos(data));
  }, []);

  const crearProducto = async () => {
    const nuevo = { id: Date.now(), nombre, precio: parseFloat(precio) };
    const res = await fetch("http://localhost:3002/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevo)
    });
    const data = await res.json();
    setProductos([...productos, data]);
    setNombre("");
    setPrecio("");
  };

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {productos.map(p => (
          <li key={p.id}>{p.nombre} - ${p.precio}</li>
        ))}
      </ul>
      <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
      <input value={precio} onChange={e => setPrecio(e.target.value)} placeholder="Precio" />
      <button onClick={crearProducto}>Agregar</button>
    </div>
  );
}

export default App;
