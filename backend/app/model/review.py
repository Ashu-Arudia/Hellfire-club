from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey
from app.database import Base


class Review(Base):
    __tablename__ = "reviews"

    id: Mapped[int] = mapped_column(primary_key=True)
    rating: Mapped[int]
    comment: Mapped[str]

    vendor_id: Mapped[int] = mapped_column(ForeignKey("vendors.id"))

    vendor: Mapped["Vendor"] = relationship(back_populates="reviews")