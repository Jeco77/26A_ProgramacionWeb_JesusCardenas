import { useEffect, useState } from "react";

interface Pedido {
  id: number;
  usuarioId: number;
  productoId: number;
  cantidad: number;
}

function App() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [usuarioId, setUsuarioId] = useState("");
  const [productoId, setProductoId] = useState("");
  const [cantidad, setCantidad] = useState("");

  useEffect(() => {
    fetch("http://localhost:3003/pedidos")
      .then(res => res.json())
      .then(data => setPedidos(data));
  }, []);

  const crearPedido = async () => {
    const nuevo = {
      id: Date.now(),
      usuarioId: parseInt(usuarioId),
      productoId: parseInt(productoId),
      cantidad: parseInt(cantidad)
    };
    const res = await fetch("http://localhost:3003/pedidos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevo)
    });
    const data = await res.json();
    setPedidos([...pedidos, data]);
    setUsuarioId("");
    setProductoId("");
    setCantidad("");
  };

  return (
    <div>
      <h1>Pedidos</h1>
      <ul>
        {pedidos.map(p => (
          <li key={p.id}>
            Usuario {p.usuarioId} pidió {p.cantidad} de producto {p.productoId}
          </li>
        ))}
      </ul>
      <input value={usuarioId} onChange={e => setUsuarioId(e.target.value)} placeholder="Usuario ID" />
      <input value={productoId} onChange={e => setProductoId(e.target.value)} placeholder="Producto ID" />
      <input value={cantidad} onChange={e => setCantidad(e.target.value)} placeholder="Cantidad" />
      <button onClick={crearPedido}>Agregar</button>
    </div>
  );
}

export default App;
