from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.sql import func
from app.database import Base

class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True)
    order_id = Column(Integer, ForeignKey("orders.id"))

    payment_method = Column(String)
    payment_status = Column(String)
    transaction_id = Column(String)

    created_at = Column(DateTime, default=func.now())