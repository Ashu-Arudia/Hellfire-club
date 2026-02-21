from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, ForeignKey
from app.database import Base


class Vendor(Base):
    __tablename__ = "vendors"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    shop_name: Mapped[str]
    #address: Mapped[str] = mapped_column(String(255))
    category_id: Mapped[int] = mapped_column(ForeignKey("categories.id"))

    category: Mapped["Category"] = relationship(back_populates="vendors")
    products: Mapped[list["Product"]] = relationship(back_populates="vendor")
    reviews: Mapped[list["Review"]] = relationship(back_populates="vendor")