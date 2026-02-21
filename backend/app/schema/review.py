from pydantic import BaseModel


class ReviewOut(BaseModel):
    id: int
    rating: int
    comment: str

    class Config:
        from_attributes = True