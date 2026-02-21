from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from app.api.v1 import categories
from app.api.v1 import catalog

app = FastAPI(title="Vendor Platform API")

app.mount("/media", StaticFiles(directory="media"), name="media")

app.include_router(categories.router)
app.include_router(catalog.router)