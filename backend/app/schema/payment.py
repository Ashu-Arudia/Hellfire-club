from pydantic import BaseModel

class PaymentCreate(BaseModel):
    order_id: int
    payment_method: str
    payment_status: str
    transaction_id: str

class PaymentResponse(PaymentCreate):
    id: int

    class Config:
        from_attributes = True