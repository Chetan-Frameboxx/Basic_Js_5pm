#  JavaScript Nested Conditional Task — E-Commerce Brand & Color Selection

## Scenario

You are building a small e-commerce script for a shoe store that sells these brands:

| Brand     | Price | Discount |
|------------|--------|----------|
| Nike       | 2800   | 10%      |
| Puma       | 2900   | 15%      |
| Red Tape   | 1800   | 21%      |
| Adidas     | 6500   | 5%       |

Each brand has limited **color availability**:

| Brand     | Available Colors |
|------------|------------------|
| Nike       | Black, White |
| Puma       | Green, Red |
| Red Tape   | Brown |
| Adidas     | White, Blue |

---

## Your Task

Write a JavaScript program using **nested `if–else` conditions** that:

1. Asks the user to **enter a brand name**.  
2. Asks the user to **choose a color**.  
3. Checks if the brand exists.  
   - If not, display `"Brand not available."`
4. If the brand exists, check whether the chosen color is available for that brand.  
   - If color is available, show:
     - Brand name  
     - Original price  
     - Discount %  
     - Final price (after discount)  
     - Category (Luxury / Mid Range / Budget)  
     - Offer type (Hot Deal / Standard Offer / Low Offer)  
   - If color is not available, display `"Selected color not available for this brand."`

---

## Category Rules

| Condition | Category |
|------------|-----------|
| Final Price > ₹5000 | Luxury Category |
| ₹2500 ≤ Final Price ≤ ₹5000 | Mid Range Category |
| Final Price < ₹2500 | Budget Category |

## Offer Rules

| Condition | Offer Type |
|------------|-------------|
| Discount ≥ 20% | Hot Deal |
| 10%–19% | Standard Offer |
| <10% | Low Offer |

---

### Example Output (if user enters Red Tape & Brown):
- Brand: Red Tape
- Color: Brown
- Base Price: ₹1800
- Discount: 21%
- Final Price: ₹1422
- Category: Budget Category
- Offer: Hot Deal


### Example Output (if user enters Adidas & Red):

- Brand: Adidas  
- Color: Red  
- Selected color not available for this brand.