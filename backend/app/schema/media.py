from pydantic import BaseModel


class MediaOut(BaseModel):
    id: int
    url: str
    type: str

    class Config:
        from_attributes = True