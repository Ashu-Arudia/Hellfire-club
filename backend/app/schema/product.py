from pydantic import BaseModel
from .media import MediaOut


class ProductOut(BaseModel):
    id: int
    name: str
    price: float
    media: list[MediaOut]

    class Config:
        from_attributes = True