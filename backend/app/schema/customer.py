from pydantic import BaseModel
from typing import Optional

class CustomerCreate(BaseModel):
    name: Optional[str]
    phone: str

class CustomerResponse(CustomerCreate):
    id: int

    class Config:
        from_attributes = True