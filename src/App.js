import React, { useEffect, useState } from "react"; // Importamos React y algunos hooks para manejar el estado y los efectos.

function App() {
  // Estado para guardar los productos obtenidos del backend.
  const [products, setProducts] = useState([]);

  // useEffect se ejecuta después de que el componente se monta.
  useEffect(() => {
    // Hacemos una petición al backend para obtener los productos.
    fetch("http://127.0.0.1:8000/products") // Dirección del endpoint que configuraste en FastAPI.
      .then((response) => response.json()) // Convertimos la respuesta a JSON.
      .then((data) => setProducts(data)) // Guardamos los productos en el estado.
      .catch((error) => console.error("Error fetching products:", error)); // Si ocurre un error, lo mostramos en la consola.
  }, []); // El arreglo vacío [] significa que este efecto solo se ejecutará una vez.

  return (
    <div className="App">
      <h1>Keppers Tlax</h1>
      {/* Mostramos los productos como una lista */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} {/* Nombre y precio del producto */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App; // Exportamos el componente para que pueda usarse en otros archivos.
