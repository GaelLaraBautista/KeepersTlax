from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Permitir el acceso desde el frontend (React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # URL del frontend
    allow_methods=["*"],  # Métodos permitidos (GET, POST, etc.)
    allow_headers=["*"],  # Headers permitidos
)

# Simulando productos
fake_products = [
    {"id": 1, "name": "Producto A", "price": 10.99},
    {"id": 2, "name": "Producto B", "price": 20.99},
    {"id": 3, "name": "Producto C", "price": 30.99},
]

@app.get("/products")
def get_products():
    return fake_products
