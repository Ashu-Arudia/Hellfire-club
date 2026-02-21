from pydantic import BaseModel
from .vendor import VendorOut


class CategoryOut(BaseModel):
    id: int
    name: str
    icon_url: str | None
    vendors: list[VendorOut]

    class Config:
        from_attributes = True