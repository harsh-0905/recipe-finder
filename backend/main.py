from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Backend working"}

@app.get("/recipes/{item}")
def get_recipe(item: str):
    url = f"https://www.themealdb.com/api/json/v1/1/search.php?s={item}"
    response = requests.get(url)
    return response.json()