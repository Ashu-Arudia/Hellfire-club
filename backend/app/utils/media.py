import os

BASE = "media/products"

def get_product_media(product_name: str):
    folder = os.path.join(BASE, product_name.lower().replace(" ", "_"))

    if not os.path.exists(folder):
        return []

    return [
        f"/media/products/{product_name.lower().replace(' ','_')}/{f}"
        for f in os.listdir(folder)
    ]