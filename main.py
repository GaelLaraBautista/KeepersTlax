from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return{"message":"¡Bienvenido a esta aplicacion en fastapi!"}
