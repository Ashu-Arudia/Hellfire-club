from pydantic_settings import BaseSettings
class Settings(BaseSettings):
    database_url:str = "postgresql+asyncpg://postgres:root123@localhost:5432/postgres"
    # DATABASE_URL=postgresql+asyncpg://postgres:root123@localhost:5432/hellfire_db
    

settings = Settings()