from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.ext.asyncio import async_sessionmaker,create_async_engine
from app.config import settings


Base = declarative_base()
database_url = settings.database_url
# def create_database():
engine = create_async_engine(database_url,echo=True)
    # print("Database Created")
SessionMaker = async_sessionmaker(bind = engine)

async def get_db():
    async with SessionMaker() as session:
        yield session