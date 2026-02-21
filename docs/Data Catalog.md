Perfect — let’s make this **clean developer documentation** for your project so you can:

✔ understand schema fast  
✔ onboard teammates  
✔ generate diagrams anytime  
✔ feed it to AI tools

---

# 📘 Database Catalog (Data Dictionary)

---

## 🧩 1. `categories`

| Column      | Type        | Description          | Example               |
| ----------- | ----------- | -------------------- | --------------------- |
| id          | SERIAL PK   | unique category id   | 1                     |
| name        | VARCHAR(50) | category name        | "Food"                |
| description | TEXT        | category description | "Street food vendors" |
| created_at  | TIMESTAMP   | created time         | auto                  |
|             |             |                      |                       |

---

## 🧑‍🍳 2. `vendors`

|Column|Type|Description|Example|
|---|---|---|---|
|id|SERIAL PK|vendor id|4|
|category_id|INT FK|link to categories|1|
|name|VARCHAR(50)|vendor name|"Raju"|
|phone|VARCHAR(10)|phone|9876543210|
|shop_name|VARCHAR(50)|shop name|"Raju Chaat"|
|latitude|FLOAT|location lat|28.61|
|longitude|FLOAT|location long|77.20|
|address|TEXT|address|"Sector 12"|

---

## 🛍 3. `products`

|Column|Type|Description|Example|
|---|---|---|---|
|id|SERIAL PK|product id|1|
|vendor_id|INT FK|vendor owner|4|
|name|VARCHAR(100)|product name|"Samosa"|
|description|TEXT|description|"Hot crispy"|
|price|NUMERIC|price|20|
|stock|INT|quantity|50|
|created_at|TIMESTAMP|created time|auto|

---

## 🖼 4. `product_media`

| Column     | Type        | Description     | Example       |
| ---------- | ----------- | --------------- | ------------- |
| id         | SERIAL PK   | media id        | 1             |
| product_id | INT FK      | linked product  | 2             |
| media_url  | TEXT        | image/video URL | "https://..." |
| media_type | VARCHAR(10) | image/video     | "image"       |
| created_at | TIMESTAMP   | upload time     | auto          |

---

## ⭐ 5. `reviews`

|Column|Type|Description|Example|
|---|---|---|---|
|id|SERIAL PK|review id|1|
|product_id|INT FK|product|2|
|rating|INT|rating 1-5|5|
|comment|TEXT|review|"Very tasty"|
|created_at|TIMESTAMP|time|auto|

---

## 📦 6. `orders`

|Column|Type|Description|Example|
|---|---|---|---|
|id|SERIAL PK|order id|1|
|product_id|INT FK|ordered item|2|
|quantity|INT|qty|3|
|total_price|NUMERIC|total|60|
|status|VARCHAR(20)|order status|"pending"|
|created_at|TIMESTAMP|time|auto|

---

## 🧾 7. `category_attributes`

| Column      | Type        | Description    | Example       |
| ----------- | ----------- | -------------- | ------------- |
| id          | SERIAL PK   | attribute id   | 1             |
| category_id | INT FK      | category       | 1             |
| name        | VARCHAR(50) | attribute name | "Spice Level" |
|             |             |                |               |

---

## 🧬 8. `product_attribute_values`

|Column|Type|Description|Example|
|---|---|---|---|
|id|SERIAL PK|id|1|
|product_id|INT FK|product|2|
|attribute_id|INT FK|attribute|1|
|value|TEXT|value|"Medium"|

---

# 🧠 Relationship Summary

```
categories
   ↓
vendors
   ↓
products
   ├── media
   ├── reviews
   ├── orders
   └── attribute_values → attributes → categories
```

---
