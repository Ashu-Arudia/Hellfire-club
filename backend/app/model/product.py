from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey, String, Float
from app.database import Base


class Product(Base):
    __tablename__ = "products"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100))
    price: Mapped[float] = mapped_column(Float)

    vendor_id: Mapped[int] = mapped_column(ForeignKey("vendors.id"))

    vendor: Mapped["Vendor"] = relationship(back_populates="products")