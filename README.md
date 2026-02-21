# 📦 Vistra GO

A hyperlocal marketplace platform that connects nearby customers with street vendors, allowing vendors to showcase products, media, reviews, and shop details digitally.

---

## 🌟 Features

### 👤 Vendor Profile

- Shop banner
    
- Profile image
    
- Shop details
    
- Rating + reviews
    
- Experience & stats
    
- Share shop
    

### 🛍 Product Catalog

- Category-wise vendors
    
- Vendor-wise products
    
- Nested product data
    
- Real-time availability
    

### ⭐ Reviews System

- Customer ratings
    
- Comments
    
- Vendor reputation scoring
    

### 🎬 Media Support

- Product images
    
- Product videos
    
- Static media serving
    
- Optimized delivery to frontend
    

---

## 🧱 Tech Stack

**Backend**

- FastAPI
    
- SQLAlchemy (Async ORM)
    
- PostgreSQL
    
- Pydantic
    

**Frontend (planned / connected)**

- React / React Native
    

**Media Handling**

- Static files server via FastAPI
    
- CDN-ready structure
    

---

## 🗄 Database Schema Overview

```
Categories
   └── Vendors
         ├── Products
         │      └── Media
         └── Reviews
Orders
   └── Order Items
Payments
Customers
```

---

## 🧠 Architecture Philosophy

This project follows **production-ready database design principles**:

- normalized tables
    
- strict foreign keys
    
- async queries
    
- scalable structure
    
- modular API routes
    

---

## 📁 Project Structure

```
backend/
│
├── app/
│   ├── api/
│   │   └── v1/
│   │        ├── catalog.py
│   │        ├── vendors.py
│   │        └── products.py
│   │
│   ├── core/
│   │      config.py
│   │
│   ├── model/
│   │      category.py
│   │      vendor.py
│   │      product.py
│   │      review.py
│   │
│   ├── schema/
│   │      category.py
│   │      vendor.py
│   │      product.py
│   │
│   ├── database.py
│   └── main.py
│
├── media/
│   ├── products/
│   ├── vendors/
│   └── categories/
│
└── README.md
```

---

## 🖼 Where to Put Images & Videos

Place media files inside:

```
backend/media/
```

Organize like this:

```
media/
   products/
       samosa.jpg
       chai.mp4
   vendors/
       shop1.jpg
   categories/
       food.png
```

---

## 📡 How Media is Served

FastAPI static mount:

```python
app.mount("/media", StaticFiles(directory="media"), name="media")
```

Frontend URL access:

```
http://localhost:8000/media/products/samosa.jpg
```

So database should store only:

```
/media/products/samosa.jpg
```

NOT full path.

---

## 📊 Main API Endpoint

### Full Catalog Endpoint

```
GET /catalog/
```

Returns nested data:

```
Categories
 └── Vendors
      ├── Products
      └── Reviews
```

Example Response Structure:

```json
[
  {
    "name": "Food",
    "vendors": [
      {
        "shop_name": "Ravi Chaat Stall",
        "products": [...],
        "reviews": [...]
      }
    ]
  }
]
```

---

## ⚡ Performance Optimizations Used

- selectinload relationships
    
- async DB session
    
- indexed foreign keys
    
- minimal response payload
    
- lazy loading avoided
    

---

## 🚀 How to Run Locally

### 1️⃣ Install dependencies

```
pip install -r requirements.txt
```

---

### 2️⃣ Setup environment variables

Create `.env`

```
DATABASE_URL=postgresql+asyncpg://user:pass@localhost/dbname
```

---

### 3️⃣ Run server

```
uvicorn app.main:app --reload
```

---

### 4️⃣ Open docs

```
http://127.0.0.1:8000/docs
```

---

## 🔮 Future Improvements

- 🔍 Search vendors
    
- 📍 Nearby vendors (Geo queries)
    
- ❤️ Favorites
    
- 🛒 Cart system
    
- 💳 Payment gateway
    
- 📈 Analytics dashboard
    
- 🔔 Notifications
    
- 📱 Mobile app
    

---

## 🧑‍💻 Author

Built with ❤️ for real-world street vendors digital empowerment.

---

## 📜 License

MIT License

---

# ⭐ Pro Tip (Important for GitHub)

Add these screenshots inside repo:

```
README_assets/
   dashboard.png
   vendor_profile.png
   catalog.png
```

Then display in README:

```md
![[video_2026-02-21_07-00-36.mp4]]
```

---

✅ **Your README is now production-grade and startup-level professional.**

---

✅ If you want, I can also generate:

- GitHub repo description
    
- project tagline
    
- LinkedIn project description
    
- resume project section
    

Just say **“make portfolio version”** 😎