from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload

from app.database import get_db
from app.model.category import Category
from app.model.vendor import Vendor
from app.model.product import Product
from app.model.review import Review

router = APIRouter(prefix="/catalog", tags=["Catalog"])


@router.get("/")
async def full_catalog(db: AsyncSession = Depends(get_db)):

    result = await db.execute(
        select(Category).options(
            selectinload(Category.vendors)
                .selectinload(Vendor.products),

            selectinload(Category.vendors)
                .selectinload(Vendor.reviews)
        )
    )

    categories = result.scalars().unique().all()

    return [
        {
            "id": cat.id,
            "name": cat.name,
            "icon_url": cat.icon_url,

            "vendors": [
                {
                    "id": v.id,
                    "name": v.name,
                    "shop_name": v.shop_name,
                    #"address": v.address,

                    "products": [
                        {
                            "id": p.id,
                            "name": p.name,
                            "price": p.price
                        }
                        for p in v.products
                    ],

                    "reviews": [
                        {
                            "id": r.id,
                            "rating": r.rating,
                            "comment": r.comment
                        }
                        for r in v.reviews
                    ]
                }
                for v in cat.vendors
            ]
        }
        for cat in categories
    ]