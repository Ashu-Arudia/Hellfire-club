from pydantic import BaseModel
from typing import List

class OrderItemCreate(BaseModel):
    product_id: int
    quantity: int
    price: float


class OrderCreate(BaseModel):
    vendor_id: int
    customer_id: int
    items: List[OrderItemCreate]


class OrderResponse(BaseModel):
    id: int
    status: str
    total_price: float

    class Config:
        from_attributes = True