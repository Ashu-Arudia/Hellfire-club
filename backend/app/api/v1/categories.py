from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.orm import selectinload

from app.database import get_db
from app.model.category import Category
from app.schema.category import CategoryOut

router = APIRouter(prefix="/categories", tags=["Categories"])


@router.get("/", response_model=list[CategoryOut])
async def get_all_categories(db: AsyncSession = Depends(get_db)):

    query = (
        select(Category)
        .options(
            selectinload(Category.vendors)
            .selectinload("products")
            .selectinload("media"),

            selectinload(Category.vendors)
            .selectinload("reviews")
        )
    )

    result = await db.execute(query)
    categories = result.scalars().unique().all()

    return categories