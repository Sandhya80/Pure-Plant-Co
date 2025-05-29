# Pure Plant Co

A modern, user-friendly indoor plant nursery web application for browsing, shopping, and managing your plant orders online.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Customization](#customization)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

**Pure Plant Co** is a responsive web application for an indoor plant nursery, built with HTML, CSS, JavaScript, and Bootstrap. It provides a seamless shopping experience, including cart management, checkout, discount codes, and user authentication modals.

---

## Features

- **Product Catalog:** Browse a variety of indoor plants, planters, and soil kits.
- **Search Bar:** Instantly search products from the navbar.
- **Add to Cart:** Add products to your cart from the shop page.
- **Cart Page:**
  - View, update, and remove items.
  - Quantity controls with stock validation.
  - Live subtotal calculation.
  - Shipping: £7 for orders under £50, free for £50+.
  - VAT included in all prices.
  - Discount code support (`PLANT10`, `GREEN15`).
  - Cart count updates in the navbar across all pages.
- **Checkout Modal:**
  - Order summary with discount, shipping, and VAT.
  - Payment method selection: Card, PayPal, or 0% APR (12 months).
  - 0% APR monthly breakdown.
- **Payment Modal:**
  - Secure form for cardholder name, card number, expiry, and CVC.
  - Demo payment flow.
- **Login/Register Modal:** User authentication modal with registration and login forms.
- **Responsive Design:** Works on desktop, tablet, and mobile.
- **Accessibility:** Keyboard navigation and accessible modals.
- **Bootstrap Integration:** Modern UI with Bootstrap 5 and Bootstrap Icons.
- **Persistent Cart:** Cart data is stored in browser localStorage.

---

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/pure-plant-co.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd pure-plant-co
   ```
3. **Open `index.html` in your browser to view the app.**

---

## Folder Structure

```
pure-plant-co/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   └── payment.js
├── images/
│   ├── plants/
│   ├── planters/
│   └── soil-kits/
└── README.md
```

- **`index.html`:** The main HTML file for the application.
- **`css/`:** Folder for custom CSS styles.
- **`js/`:** Folder for JavaScript files.
- **`images/`:** Folder for product images, organized by category.
- **`README.md`:** This README file.

---

## Usage

- Open `index.html` in a web browser.
- Browse the product catalog or use the search bar to find specific items.
- Add items to your cart and proceed to checkout when ready.
- Fill in your details and choose a payment method in the checkout modal.
- Review your order in the payment modal and complete your purchase.

---

## Customization

To customize the app:

- **Update content:** Edit `index.html` for text and structure changes.
- **Change styles:** Modify `css/styles.css` for style changes.
- **Add scripts:** Include custom scripts in the `js/` folder as needed.
- **Replace images:** Add or replace images in the `images/` folder.

---

## Screenshots

![Homepage](images/screenshots/homepage.png)
*Homepage - Browse our collection of indoor plants.*

![Product Page](images/screenshots/product-page.png)
*Product Page - Learn more about each plant, including care tips and pot options.*

![Cart Page](images/screenshots/cart-page.png)
*Cart Page - Review your selected plants, adjust quantities, and enter discount codes.*

![Checkout Modal](images/screenshots/checkout-modal.png)
*Checkout Modal - Choose your payment method and review your order summary.*

![Login/Register Modal](images/screenshots/login-register-modal.png)
*Login/Register Modal - Access your account or create a new one.*

---

## Contributing

We welcome contributions to **Pure Plant Co**! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Push to your forked repository.
5. Submit a pull request describing your changes.

Please ensure your code follows the existing style and includes appropriate tests.

---

## License

**Pure Plant Co** is open-source software licensed under the [MIT License](LICENSE).

---

## Contact

For questions or feedback, please contact:

- Sandhya H - [sandhyaharsh@gmail.com](sandhyaharsh@gmail.com)
- GitHub: [yourusername](https://github.com/yourusername)

---