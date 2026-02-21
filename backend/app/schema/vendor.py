from pydantic import BaseModel
from .product import ProductOut
from .review import ReviewOut


class VendorOut(BaseModel):
    id: int
    name: str
    shop_name: str
    products: list[ProductOut]
    reviews: list[ReviewOut]

    class Config:
        from_attributes = True