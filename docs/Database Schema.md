## Digital Enablement Platform for Street Vendors

---

## 1. Overview

This database is designed for a hyperlocal vendor marketplace platform where vendors can register, list products, and receive orders from nearby customers.

The schema follows:

- relational integrity
    
- scalable architecture
    
- optimized search performance
    
- production‑ready constraints
    

---

# 2. Entity Relationship Diagram (Graphical View)

```
Customers ─────< Orders >───── Vendors ─────< Products
                    │
                    │
               Order_Items >──── Products

Orders ─────< Payments
Vendors ─────< Reviews >──── Customers
```

Legend:

```
A ───< B   → one-to-many
A >───< B  → many-to-many
```

---

# 3. Tables Documentation

---

## Vendors Table

Stores vendor profiles and shop information.

Fields:

- id → primary key
    
- name → vendor name
    
- phone → unique contact number
    
- shop_name → store name
    
- category → type of business
    
- description → optional details
    
- latitude, longitude → geo-location
    
- address → physical address
    
- is_verified → admin verification flag
    
- created_at → timestamp
    

Purpose:  
Used for vendor discovery, location search, and profile display.

---

## Products Table

Stores items listed by vendors.

Fields:

- id → primary key
    
- vendor_id → FK → vendors.id
    
- name → product name
    
- price → product price
    
- description → details
    
- image_url → image link
    
- is_available → stock status
    
- created_at → timestamp
    

Relationship:  
One vendor → many products

---

## Customers Table

Stores customer identities.

Fields:

- id → primary key
    
- name → optional name
    
- phone → unique identifier
    
- created_at → timestamp
    

Purpose:  
Tracks orders and enables personalization.

---

## Orders Table

Stores order metadata.

Fields:

- id → primary key
    
- vendor_id → FK
    
- customer_id → FK
    
- status → order state
    
- total_price → total amount
    
- created_at → timestamp
    

Status values:

- pending
    
- accepted
    
- rejected
    
- completed
    

---

## Order_Items Table

Stores individual items in each order.

Fields:

- id → primary key
    
- order_id → FK
    
- product_id → FK
    
- quantity → item count
    
- price → price at purchase time
    

Relationship:  
One order → many items

---

## Reviews Table

Stores vendor ratings.

Fields:

- id → primary key
    
- vendor_id → FK
    
- customer_id → FK
    
- rating → 1–5
    
- comment → text feedback
    
- created_at → timestamp
    

Purpose:  
Builds trust and ranking system.

---

## Payments Table

Stores payment transactions.

Fields:

- id → primary key
    
- order_id → FK
    
- payment_method → UPI/card/cash
    
- payment_status → success/pending/failed
    
- transaction_id → gateway reference
    
- created_at → timestamp
    

Purpose:  
Tracks financial transactions.

---

# 4. Index Strategy

Indexes added for performance:

- vendor location index → fast nearby search
    
- vendor_id index → fast product lookup
    
- order indexes → fast dashboard queries
    

Why important:  
Indexes reduce query time from O(n) scans to O(log n).

---

# 5. Scalability Considerations

This schema supports scaling because:

- normalized tables reduce duplication
    
- foreign keys maintain integrity
    
- cascading deletes maintain consistency
    
- numeric price type prevents rounding errors
    

Future scaling additions:

- caching layer (Redis)
    
- read replicas
    
- sharding by region
    

---

# 6. Data Flow Example

Customer places order:

1. customer selected vendor
    
2. selected products
    
3. order created
    
4. order items inserted
    
5. payment recorded
    
6. vendor notified
    

---

# 7. Production-Level Improvements (Optional)

Recommended upgrades:

- add full‑text search for products
    
- geo-distance queries using PostGIS
    
- audit logs table
    
- soft delete columns
    
- rate limiting table
    

---

# 8. Final Architecture Summary

This schema ensures:

- strong relational design
    
- high performance
    
- easy feature expansion
    
- clean API integration
    

It is structured like a real startup production database rather than a beginner project schema.

---

END OF DOCUMENT