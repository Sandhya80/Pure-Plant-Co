// --- Product Data ---
const PRODUCTS = [
  // --- Succulents ---
  {
    id: 1,
    name: "Aloe Vera",
    type: "Succulent",
    price: 12.99, // GBP
    image: "assets/images/aloePlant.png",
    stock: 10,
    featured: true,
    care: "Bright, indirect light. Water every 2-3 weeks."
  },
  {
    id: 2,
    name: "Snake Plant",
    type: "Succulent",
    price: 15,
    image: "assets/images/snakeplant.png",
    stock: 8,
    featured: true,
    care: "Low to bright light. Water every 2-4 weeks."
  },  
  {
    id: 6,
    name: "Echeveria Elegans",
    type: "Succulent",
    price: 11,
    image: "assets/images/EcheveriaElegans.png",
    stock: 12,
    featured: false,
    care: "Bright light. Water when soil is dry."
  },
  {
    id: 7,
    name: "Jade Plant",
    type: "Succulent",
    price: 13,
    image: "assets/images/jadeplant.png",
    stock: 9,
    featured: false,
    care: "Bright, indirect light. Water when dry."
  },
  {
    id: 8,
    name: "Zebra Haworthia",
    type: "Succulent",
    price: 10,
    image: "assets/images/ZebraHaworthia.png",
    stock: 7,
    featured: false,
    care: "Bright, indirect light. Water sparingly."
  },
  {
    id: 16,
    name: "Bromelia",
    type: "Succulent",
    price: 19.99,
    image: "assets/images/featured5.png",
    stock: 8,
    featured: true,
    care: "Bright, indirect light. Water moderately."
  },

  // --- Planters ---
  {
    id: 3,
    name: "Ceramic Planter",
    type: "Planter",
    price: 14.99,
    image: "assets/images/featured4.png",
    stock: 12,
    featured: true,
    care: "Wipe clean with a damp cloth."
  },
  {
    id: 9,
    name: "Hanging Planter",
    type: "Planter",
    price: 16,
    image: "assets/images/hangingplanter.png",
    stock: 8,
    featured: false,
    care: "Hang securely. Wipe clean."
  },
  {
    id: 10,
    name: "Self-Watering Pot",
    type: "Planter",
    price: 22,
    image: "assets/images/selfwateringpot.png",
    stock: 10,
    featured: false,
    care: "Refill reservoir as needed."
  },
  {
    id: 11,
    name: "Terracotta Pot",
    type: "Planter",
    price: 8,
    image: "assets/images/terracottapot.png",
    stock: 15,
    featured: false,
    care: "Porous clay. Wipe clean."
  },
  {
    id: 12,
    name: "Ceramic Planter",
    type: "Planter",
    price: 19.99,
    image: "assets/images/ceramicPlanter.png",
    stock: 8,
    featured: false,
    care: "Wipe clean with a damp cloth."
  },
  {
    id: 13,
    name: "Geometric Concrete Planter",
    type: "Planter",
    price: 14,
    image: "assets/images/geometricPlanter.png",
    stock: 6,
    featured: false,
    care: "Wipe clean. Avoid dropping."
  },

  // --- Soil Kits ---
  {
    id: 4,
    name: "Soil Kit",
    type: "Soil",
    price: 7,
    image: "assets/images/soilkit.png",
    stock: 20,
    featured: false,
    care: "Store in a cool, dry place."
  },
  {
    id: 14,
    name: "Cactus Soil Mix",
    type: "Soil",
    price: 6,
    image: "assets/images/cactussoilmix.png",
    stock: 18,
    featured: false,
    care: "Ideal for cacti and succulents."
  },
  {
    id: 15,
    name: "All Purpose Potting Mix",
    type: "Soil",
    price: 8,
    image: "assets/images/allpurposesoilmix.png",
    stock: 25,
    featured: false,
    care: "Suitable for most houseplants."
  },
  {
    id: 17,
    name: "Orchid Bark Mix",
    type: "Soil",
    price: 9,
    image: "assets/images/orchidbarkmix.png",
    stock: 10,
    featured: false,
    care: "Best for orchids and aroids."
  }, 
  {
    id: 29,
    name: "Mini Tool Set",
    type: "Soil",
    price: 12,
    image: "assets/images/minitoolset.png",
    stock: 10,
    featured: false,
    care: "Wipe clean after use. Store dry."
  },
  {
    id: 30,
    name: "Potting Starter Combo",
    type: "Soil",
    price: 24.99,
    image: "assets/images/pottingcombo.png",
    stock: 8,
    featured: true,
    care: "Includes soil kit, gloves, and mini tool set. See individual care instructions."
  },  
  // --- Bonsai ---
  {
    id: 18,
    name: "Ficus Bonsai",
    type: "Bonsai",
    price: 34.99,
    image: "assets/images/ficusbonsai.png",
    stock: 4,
    featured: true,
    care: "Bright, indirect light. Water when topsoil is dry."
  },
  {
    id: 19,
    name: "Carmona Bonsai",
    type: "Bonsai",
    price: 39.99,
    image: "assets/images/carmonabonsai.png",
    stock: 8,
    featured: false,
    care: "Bright spot, keep soil moist."
  },
  {
    id: 22,
    name: "Juniper Bonsai",
    type: "Bonsai",
    price: 39.99,
    image: "assets/images/juniperbonsai.png",
    stock: 6,
    featured: false,
    care: "Full sun, water when soil is dry to the touch."
  },
  {
    id: 23,
    name: "Chinese Elm Bonsai",
    type: "Bonsai",
    price: 39.99,
    image: "assets/images/chineseelmbonsai.png",
    stock: 10,
    featured: false,
    care: "Bright, indirect light. Keep soil evenly moist."
  },
  {
    id: 24,
    name: "Azalea Bonsai",
    type: "Bonsai",
    price: 49.99,
    image: "assets/images/azaleabonsai.png",
    stock: 5,
    featured: false,
    care: "Bright, indirect light. Keep soil moist but not soggy. Blooms in spring."
  },
  {
    id: 25,
    name: "Bougainvillea Bonsai",
    type: "Bonsai",
    price: 49.99,
    image: "assets/images/bougainvilleabonsai.png",
    stock: 3,
    featured: false,
    care: "Full sun. Allow soil to dry slightly between waterings. Produces vibrant flowers."
  },
  // --- Houseplants ---
  {
    id: 27,
    name: "Pothos",
    type: "Houseplant",
    price: 9.99,
    image: "assets/images/pothosplant.png",
    stock: 15,
    featured: false,
    care: "Low to bright indirect light. Water when top inch of soil is dry."
  },
  {
    id: 28,
    name: "ZZ Plant",
    type: "Houseplant",
    price: 14.99,
    image: "assets/images/zzplant.png",
    stock: 10,
    featured: false,
    care: "Low light, drought tolerant. Water when soil is completely dry."
  },
  {
    id: 5,
    name: "Peace Lily",
    type: "Houseplant",
    price: 9.99,
    image: "assets/images/featured3.png",
    stock: 6,
    featured: true,
    care: "Medium, indirect light. Keep soil moist."
  },
  {
    id: 20,
    name: "Monstera Deliciosa",
    type: "Houseplant",
    price: 19.99,
    image: "assets/images/monsteradeliciosa.png",
    stock: 7,
    featured: false,
    care: "Bright, indirect light. Water when top inch of soil is dry."
  },
  {
    id: 21,
    name: "Spider Plant",
    type: "Houseplant",
    price: 11.99,
    image: "assets/images/spiderplant.png",
    stock: 10,
    featured: false,
    care: "Bright, indirect light. Water moderately."
  },
  {
    id: 26,
    name: "Houseplant Combo",
    type: "Houseplant",
    price: 29.99,
    image: "assets/images/featured6.png",
    stock: 5,
    featured: true,
    care: "Bright, indirect light. Water when top inch of soil is dry. Includes a mix of easy-care houseplants."
  }
];

// --- Cart Page Rendering Logic ---
document.addEventListener('DOMContentLoaded', function() {
  const cartDiv = document.getElementById('cart-container');
  const summaryDiv = document.getElementById('cart-summary');
  if (!cartDiv || !summaryDiv) return;

  function renderCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
      cartDiv.innerHTML = '<div class="alert alert-info">Your cart is empty.</div>';
      summaryDiv.innerHTML = '';
      updateCartCount();
      return;
    }
    let subtotal = 0;
    cartDiv.innerHTML = `
      <table class="table align-middle">
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          ${cart.map(item => {
            const p = PRODUCTS.find(prod => prod.id === item.id);
            if (!p) return '';
            const lineTotal = p.price * item.qty;
            subtotal += lineTotal;
            return `
              <tr>
                <td>
                  <img src="${p.image}" alt="${p.name}" style="width:48px;height:48px;object-fit:contain;border-radius:0.5em;margin-right:0.5em;">
                  ${p.name}
                </td>
                <td>
                  <input type="number" min="1" max="${p.stock}" value="${item.qty}" data-id="${item.id}" class="form-control form-control-sm cart-qty-input" style="width:60px;">
                </td>
                <td>£${lineTotal.toFixed(2)}</td>
                <td>
                  <button class="btn btn-danger btn-sm remove-cart-item" data-id="${item.id}">&times;</button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;    

    // Shipping calculation
    let discount = appliedDiscount ? subtotal * appliedDiscount : 0;
    let subtotalAfterDiscount = subtotal - discount;
    let shipping = subtotalAfterDiscount < 50 && subtotalAfterDiscount > 0 ? 7 : 0;
    let total = subtotalAfterDiscount + shipping;

    summaryDiv.innerHTML = `
      <div class="mb-2"><strong>Subtotal:</strong> £${subtotal.toFixed(2)}</div>
      ${discount > 0 ? `<div class="mb-2 text-success"><strong>Discount:</strong> -£${discount.toFixed(2)}</div>` : ""}
      <div class="mb-2"><strong>Shipping:</strong> £${shipping.toFixed(2)} ${shipping === 0 ? '(Free over £50)' : ''}</div>
      <div class="mb-2"><strong>Total:</strong> £${total.toFixed(2)}</div>
      <div class="small text-muted">VAT included in product prices.</div>
    `;

    // Quantity change handler
    cartDiv.querySelectorAll('.cart-qty-input').forEach(input => {
      input.addEventListener('change', function() {
        let val = parseInt(this.value);
        if (isNaN(val) || val < 1) val = 1;
        const prod = PRODUCTS.find(p => p.id === parseInt(this.dataset.id));
        if (val > prod.stock) val = prod.stock;
        this.value = val;
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const item = cart.find(i => i.id === prod.id);
        if (item) item.qty = val;
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCount();
      });
    });

    // Remove item handler
    cartDiv.querySelectorAll('.remove-cart-item').forEach(btn => {
      btn.addEventListener('click', function() {
        const id = parseInt(this.dataset.id);
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCount();
      });
    });

    updateCartCount();
  }

  renderCart();
});

// --- Discount Code Logic ---
const discounts = {
  "PLANT10": 0.10,
  "GREEN15": 0.15
};
let appliedDiscount = 0;

const discountInput = document.getElementById('discountCode');
const applyDiscountBtn = document.getElementById('applyDiscount');
const discountMsg = document.getElementById('discountMsg');

if (applyDiscountBtn && discountInput) {
  applyDiscountBtn.onclick = function() {
    const code = discountInput.value.trim().toUpperCase();
    if (discounts[code]) {
      appliedDiscount = discounts[code];
      discountMsg.textContent = `Discount code applied!`;
      discountMsg.className = "text-success ms-2";
    } else {
      appliedDiscount = 0;
      discountMsg.textContent = `Invalid code.`;
      discountMsg.className = "text-danger ms-2";
    }
    renderCart(); // Re-render to update totals
  };
}

// --- Grouped Products ---
function generateGroupedProducts(productsArray) {
  const allowedGroups = {
    "Succulent": "Succulents",
    "Bonsai": "Bonsai",
    "Houseplant": "Houseplants",
    "Planter": "Planters",
    "Soil": "Soil Kits"
  };
  const groups = {};
  productsArray.forEach(p => {
    if (!allowedGroups[p.type]) return;
    const group = allowedGroups[p.type];
    if (!groups[group]) groups[group] = [];
    groups[group].push({
      id: p.id,
      name: p.name,
      price: p.price,
      img: p.image,
      care: p.care,
      stock: p.stock
    });
  });
  return Object.keys(groups).map(groupName => ({
    group: groupName,
    products: groups[groupName]
  }));
}
const groupedProducts = generateGroupedProducts(PRODUCTS);


// --- Home Page: Featured Products ---
if (document.getElementById('featured-products')) {
  const featuredDiv = document.getElementById('featured-products');
  featuredDiv.innerHTML = PRODUCTS.filter(p => p.featured).map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <div class="price">£${p.price.toFixed(2)}</div>
      <button class="btn" onclick="window.location.href='shop.html#product-${p.id}'">View Details</button>
      <button class="btn primary" onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join('');
}

// --- Shop Page: Product Listing ---
if (document.getElementById('product-list')) {
  let filterType = 'all';
  function renderProducts(view = "grid") {
    const list = document.getElementById('product-list');
    list.innerHTML = "";
    let groupsToShow = groupedProducts;
    if (filterType !== 'all') {
      groupsToShow = groupedProducts.filter(g => g.group.toLowerCase().includes(filterType.toLowerCase()));
    }
    groupsToShow.forEach(group => {
      const groupHeader = document.createElement("h3");
      groupHeader.textContent = group.group;
      groupHeader.id = group.group.toLowerCase().replace(/\s+/g, '');
      list.appendChild(groupHeader);

      const row = document.createElement("div");
      row.className = "row product-row" + (view === "list" ? " list-view" : "");
      group.products.forEach(product => {
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-4 mb-4";
        col.id = `product-${product.id}`;
        col.innerHTML = `
          <div class="product-card h-100 d-flex flex-column">
            <img src="${product.img}" alt="${product.name}" class="img-fluid mb-2" style="object-fit:contain;max-height:180px;">
            <div class="product-name fw-bold">${product.name}</div>
            <div class="product-id text-muted small">ID: ${product.id}</div>
            <div class="product-price text-success mb-1">£${product.price.toFixed(2)}</div>
            <div class="mb-2">Stock: ${product.stock}</div>
            <div class="mt-auto">
              <button class="btn btn-success btn-sm add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
              <button class="btn btn-info btn-sm details-btn" data-id="${product.id}">Details</button>
            </div>
            <div class="care-info" style="display:none; margin-top:0.5em; background:#e8f5e9; border-radius:0.5em; padding:0.5em; font-size:0.95em;"></div>
          </div>
        `;
        row.appendChild(col);
      });
      list.appendChild(row);
    });

    if (window.location.hash.startsWith("#product-")) {
      const prodElem = document.querySelector(window.location.hash);
      if (prodElem) {
        prodElem.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }

  renderProducts("grid");

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      filterType = this.dataset.type;
      renderProducts(document.getElementById('gridViewBtn').classList.contains('active') ? "grid" : "list");
    };
  });

  const gridBtn = document.getElementById("gridViewBtn");
  const listBtn = document.getElementById("listViewBtn");
  gridBtn.addEventListener("click", function() {
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
    renderProducts("grid");
  });
  listBtn.addEventListener("click", function() {
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
    renderProducts("list");
  });

  document.getElementById("product-list").addEventListener("click", function(e) {
    if (e.target.classList.contains("add-to-cart-btn")) {
      const prodId = parseInt(e.target.getAttribute("data-id"));
      let product = PRODUCTS.find(p => p.id === prodId);
      if (product) {
        addToCart(product.id);
      } else {
        alert("Product not found in main product list.");
      }
    }
    if (e.target.classList.contains("details-btn")) {
      const prodId = parseInt(e.target.getAttribute("data-id"));
      let product = PRODUCTS.find(p => p.id === prodId);
      if (product) {
        const card = e.target.closest('.product-card');
        const careDiv = card.querySelector('.care-info');
        if (careDiv.style.display === "none" || careDiv.style.display === "") {
          careDiv.textContent = "Care: " + product.care;
          careDiv.style.display = "block";
          e.target.textContent = "Hide Details";
        } else {
          careDiv.style.display = "none";
          e.target.textContent = "Details";
        }
      }
    }
  });
}

// --- Product Modal ---
window.showProductModal = function(id) {
  const p = PRODUCTS.find(prod => prod.id === id);
  const modal = document.getElementById('productModal');
  if (!modal) return;
  document.getElementById('productModalContent').innerHTML = `
  <span class="close" onclick="closeModal('productModal')">&times;</span>
  <img src="${p.image}" alt="${p.name}" style="width:100%;border-radius:0.7em;">
  <h2>${p.name}</h2>
  <div class="price">£${p.price.toFixed(2)}</div>
  <p>Type: ${p.type}</p>
  <button class="btn" onclick="showCareModal('${p.care}')">Light/Water Care</button>
  <button class="btn primary" onclick="addToCart(${p.id})">Add to Cart</button>
`;
  modal.classList.add('active');
};
window.closeModal = function(id) {
  document.getElementById(id).classList.remove('active');
};

// --- Care Instructions Modal ---
window.showCareModal = function(care) {
  const modal = document.getElementById('productModal');
  document.getElementById('productModalContent').innerHTML += `
    <div class="modal-content" style="margin-top:1em;background:#e2e8f0;">
      <strong>Care Instructions:</strong>
      <p>${care}</p>
      <button class="btn" onclick="closeModal('productModal')">Close</button>
    </div>
  `;
};

// --- Login/Register Modal Logic ---
document.addEventListener('DOMContentLoaded', function() {
  const loginModal = document.getElementById('loginModal');
  const loginFormSection = document.getElementById('loginFormSection');
  const registerFormSection = document.getElementById('registerFormSection');
  const showRegister = document.getElementById('showRegister');
  const showLogin = document.getElementById('showLogin');
  const loginBtn = document.getElementById('loginBtn');
  const closeLogin = document.getElementById('closeLogin');

  if (loginBtn && loginModal) {
    loginBtn.onclick = function() {
      loginModal.classList.add('active');
      loginFormSection.style.display = '';
      registerFormSection.style.display = 'none';
    };
  }
  if (closeLogin && loginModal) {
    closeLogin.onclick = function() {
      loginModal.classList.remove('active');
    };
  }
  if (showRegister) {
    showRegister.onclick = function(e) {
      e.preventDefault();
      loginFormSection.style.display = 'none';
      registerFormSection.style.display = '';
    };
  }
  if (showLogin) {
    showLogin.onclick = function(e) {
      e.preventDefault();
      loginFormSection.style.display = '';
      registerFormSection.style.display = 'none';
    };
  }

  // Footer Login/Register links
  const footerLoginLink = document.getElementById('footerLoginLink');
  const footerRegisterLink = document.getElementById('footerRegisterLink');

  if (footerLoginLink) {
    footerLoginLink.onclick = function(e) {
      e.preventDefault();
      if (loginModal && loginFormSection && registerFormSection) {
        loginModal.classList.add('active');
        loginFormSection.style.display = '';
        registerFormSection.style.display = 'none';
      }
    };
  }
  if (footerRegisterLink) {
    footerRegisterLink.onclick = function(e) {
      e.preventDefault();
      if (loginModal && loginFormSection && registerFormSection) {
        loginModal.classList.add('active');
        loginFormSection.style.display = 'none';
        registerFormSection.style.display = '';
      }
    };
  }
});

// --- Cart Count on All Pages ---
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = cart.reduce((sum, item) => sum + item.qty, 0));
}
updateCartCount();

// --- Featured Products Carousel (3 at a time, center projected) ---
(function() {
  const featuredDiv = document.getElementById('featured-carousel-inner');
  if (!featuredDiv || typeof PRODUCTS === "undefined") return;

  // Get all featured products
  const featuredProducts = PRODUCTS.filter(p => p.featured);

  // Group into slides of 3
  const slides = [];
  for (let i = 0; i < featuredProducts.length; i += 3) {
    slides.push(featuredProducts.slice(i, i + 3));
  }

  // Render slides
  featuredDiv.innerHTML = slides.map((group, idx) => `
    <div class="carousel-item${idx === 0 ? ' active' : ''}">
      ${group.map((p, i) => `
        <div class="featured-product-card${i === 1 ? ' center' : ''}">
          <img src="${p.image}" alt="${p.name}">
          <h5>${p.name}</h5>
          <div class="price">£${p.price.toFixed(2)}</div>
          <button class="btn btn-sm btn-success" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      `).join('')}
    </div>
  `).join('');

  // Center the middle card on each slide after slide event
  const carousel = document.getElementById('featuredCarousel');
  if (carousel) {
    carousel.addEventListener('slid.bs.carousel', function () {
      document.querySelectorAll('.carousel-item').forEach(item => {
        const cards = item.querySelectorAll('.featured-product-card');
        cards.forEach((card, idx) => card.classList.toggle('center', idx === 1));
      });
    });
  }
})();

// --- Search Bar Logic ---
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('navbarSearch');
  const resultsDiv = document.getElementById('searchResults');

  if (searchInput && resultsDiv) {
    searchInput.addEventListener('input', function() {
      const query = searchInput.value.trim().toLowerCase();
      resultsDiv.innerHTML = '';
      if (query.length === 0) {
        resultsDiv.style.display = 'none';
        return;
      }
      // Search PRODUCTS array for matches
      const matches = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(query) ||
        (p.type && p.type.toLowerCase().includes(query))
      );
      if (matches.length === 0) {
        resultsDiv.innerHTML = '<div class="search-result-item">No results found</div>';
      } else {
        matches.slice(0, 6).forEach(product => {
          const item = document.createElement('div');
          item.className = 'search-result-item';
          item.textContent = product.name + ' (£' + product.price.toFixed(2) + ')';
          item.onclick = function() {
            window.location.href = 'shop.html#product-' + product.id;
          };
          resultsDiv.appendChild(item);
        });
      }
      resultsDiv.style.display = 'block';
    });

    // Hide results when clicking outside
    document.addEventListener('click', function(e) {
      if (!searchInput.contains(e.target) && !resultsDiv.contains(e.target)) {
        resultsDiv.style.display = 'none';
      }
    });

    // Show results on focus if input is not empty
    searchInput.addEventListener('focus', function() {
      if (searchInput.value.trim().length > 0) {
        resultsDiv.style.display = 'block';
      }
    });
  }
});

// --- Optional: Smooth caption animation on slide ---
const heroCarousel = document.getElementById('heroCarousel');
if (heroCarousel) {
  heroCarousel.addEventListener('slide.bs.carousel', function (e) {
    const captions = heroCarousel.querySelectorAll('.animate-caption');
    captions.forEach(caption => caption.style.opacity = 0);
  });
  heroCarousel.addEventListener('slid.bs.carousel', function (e) {
    const activeCaption = heroCarousel.querySelector('.carousel-item.active .animate-caption');
    if (activeCaption) activeCaption.style.opacity = 1;
  });
}

// --- Contact Us Modal Logic ---
document.addEventListener('DOMContentLoaded', function() {
  var contactLink = document.getElementById('contactUsFooterLink');
  var contactModal = document.getElementById('contactUsModal');
  var closeBtn = document.getElementById('closeContactUsModal');
  var contactForm = document.getElementById('contactUsForm');
  var modalDialog = document.querySelector('#contactUsModal .custom-modal-dialog');

  if (contactLink && contactModal && closeBtn && contactForm && modalDialog) {
    contactLink.onclick = function(e) {
      e.preventDefault();
      contactModal.classList.add('active');
    };
    closeBtn.onclick = function() {
      contactModal.classList.remove('active');
    };
    contactModal.onclick = function(e) {
      if (e.target === contactModal) contactModal.classList.remove('active');
    };
    modalDialog.onclick = function(e) {
      e.stopPropagation();
    };
    contactForm.onsubmit = function(e) {
      e.preventDefault();
      alert("Your message has been sent! We'll respond soon.");
      contactModal.classList.remove('active');
      contactForm.reset();
    };
  }
});

// --- FAQ Modal Logic ---
document.addEventListener('DOMContentLoaded', function() {
  var faqLink = document.getElementById('faqFooterLink');
  var faqModal = document.getElementById('faqModal');
  var closeFaqBtn = document.getElementById('closeFaqModal');
  var faqDialog = document.querySelector('#faqModal .custom-modal-dialog');

  if (faqLink && faqModal && closeFaqBtn && faqDialog) {
    faqLink.onclick = function(e) {
      e.preventDefault();
      faqModal.classList.add('active');
    };
    closeFaqBtn.onclick = function() {
      faqModal.classList.remove('active');
    };
    faqModal.onclick = function(e) {
      if (e.target === faqModal) faqModal.classList.remove('active');
    };
    faqDialog.onclick = function(e) {
      e.stopPropagation();
    };
  }
});

// --- Shipping Info Modal Logic ---
document.addEventListener('DOMContentLoaded', function() {
  var shippingLink = document.getElementById('shippingInfoFooterLink');
  var shippingModal = document.getElementById('shippingInfoModal');
  var closeShippingBtn = document.getElementById('closeShippingInfoModal');
  var shippingDialog = document.querySelector('#shippingInfoModal .custom-modal-dialog');

  if (shippingLink && shippingModal && closeShippingBtn && shippingDialog) {
    shippingLink.onclick = function(e) {
      e.preventDefault();
      shippingModal.classList.add('active');
    };
    closeShippingBtn.onclick = function() {
      shippingModal.classList.remove('active');
    };
    shippingModal.onclick = function(e) {
      if (e.target === shippingModal) shippingModal.classList.remove('active');
    };
    shippingDialog.onclick = function(e) {
      e.stopPropagation();
    };
  }
});

// --- Returns Policy Modal Logic ---
document.addEventListener('DOMContentLoaded', function() {
  var returnsLink = document.getElementById('returnsFooterLink');
  var returnsModal = document.getElementById('returnsModal');
  var closeReturnsBtn = document.getElementById('closeReturnsModal');
  var returnsDialog = document.querySelector('#returnsModal .custom-modal-dialog');

  if (returnsLink && returnsModal && closeReturnsBtn && returnsDialog) {
    returnsLink.onclick = function(e) {
      e.preventDefault();
      returnsModal.classList.add('active');
    };
    closeReturnsBtn.onclick = function() {
      returnsModal.classList.remove('active');
    };
    returnsModal.onclick = function(e) {
      if (e.target === returnsModal) returnsModal.classList.remove('active');
    };
    returnsDialog.onclick = function(e) {
      e.stopPropagation();
    };
  }
});

// --- Our Story Modal Logic ---
document.addEventListener('DOMContentLoaded', function() {
  var ourStoryLink = document.getElementById('ourStoryFooterLink');
  var ourStoryModal = document.getElementById('ourStoryModal');
  var closeOurStoryBtn = document.getElementById('closeOurStoryModal');
  var ourStoryDialog = document.querySelector('#ourStoryModal .custom-modal-dialog');

  if (ourStoryLink && ourStoryModal && closeOurStoryBtn && ourStoryDialog) {
    ourStoryLink.onclick = function(e) {
      e.preventDefault();
      ourStoryModal.classList.add('active');
    };
    closeOurStoryBtn.onclick = function() {
      ourStoryModal.classList.remove('active');
    };
    ourStoryModal.onclick = function(e) {
      if (e.target === ourStoryModal) ourStoryModal.classList.remove('active');
    };
    ourStoryDialog.onclick = function(e) {
      e.stopPropagation();
    };
  }
});

// --- Sustainability Modal Logic ---
document.addEventListener('DOMContentLoaded', function() {
  var sustainabilityLink = document.getElementById('sustainabilityFooterLink');
  var sustainabilityModal = document.getElementById('sustainabilityModal');
  var closeSustainabilityBtn = document.getElementById('closeSustainabilityModal');
  var sustainabilityDialog = document.querySelector('#sustainabilityModal .custom-modal-dialog');

  if (sustainabilityLink && sustainabilityModal && closeSustainabilityBtn && sustainabilityDialog) {
    sustainabilityLink.onclick = function(e) {
      e.preventDefault();
      sustainabilityModal.classList.add('active');
    };
    closeSustainabilityBtn.onclick = function() {
      sustainabilityModal.classList.remove('active');
    };
    sustainabilityModal.onclick = function(e) {
      if (e.target === sustainabilityModal) sustainabilityModal.classList.remove('active');
    };
    sustainabilityDialog.onclick = function(e) {
      e.stopPropagation();
    };
  }
});

// --- Careers Modal Logic ---
document.addEventListener('DOMContentLoaded', function() {
  var careersLink = document.getElementById('careersFooterLink');
  var careersModal = document.getElementById('careersModal');
  var closeCareersBtn = document.getElementById('closeCareersModal');
  var careersDialog = document.querySelector('#careersModal .custom-modal-dialog');

  if (careersLink && careersModal && closeCareersBtn && careersDialog) {
    careersLink.onclick = function(e) {
      e.preventDefault();
      careersModal.classList.add('active');
    };
    closeCareersBtn.onclick = function() {
      careersModal.classList.remove('active');
    };
    careersModal.onclick = function(e) {
      if (e.target === careersModal) careersModal.classList.remove('active');
    };
    careersDialog.onclick = function(e) {
      e.stopPropagation();
    };
  }
});

// --- Blog Modal Logic ---
document.addEventListener('DOMContentLoaded', function() {
  var blogLink = document.getElementById('blogFooterLink');
  var blogModal = document.getElementById('blogModal');
  var closeBlogBtn = document.getElementById('closeBlogModal');
  var blogDialog = document.querySelector('#blogModal .custom-modal-dialog');

  if (blogLink && blogModal && closeBlogBtn && blogDialog) {
    blogLink.onclick = function(e) {
      e.preventDefault();
      blogModal.classList.add('active');
    };
    closeBlogBtn.onclick = function() {
      blogModal.classList.remove('active');
    };
    blogModal.onclick = function(e) {
      if (e.target === blogModal) blogModal.classList.remove('active');
    };
    blogDialog.onclick = function(e) {
      e.stopPropagation();
    };
  }
});

// --- Add to Cart Logic ---
window.addToCart = function(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItem = cart.find(item => item.id === id);
  if (cartItem && cartItem.qty >= product.stock) {
    alert('Inventory limit reached!');
    return;
  }
  if (cartItem) {
    cartItem.qty++;
  } else {
    cart.push({ id: id, qty: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert('Added to cart!');
};

// --- Checkout Modal Logic ---
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const closeOrderBtn = document.getElementById('closeOrderBtn');
const paymentForm = document.getElementById('paymentForm');

function renderOrderSummary() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let subtotal = 0;
  cart.forEach(item => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    if (p) subtotal += p.price * item.qty;
  });
  let discount = appliedDiscount ? subtotal * appliedDiscount : 0;
  let subtotalAfterDiscount = subtotal - discount;
  let shipping = subtotalAfterDiscount < 50 && subtotalAfterDiscount > 0 ? 7 : 0;
  let total = subtotalAfterDiscount + shipping;
  const orderSummary = document.getElementById('orderSummary');
  if (orderSummary) {
    orderSummary.innerHTML = `
      <div class="d-flex justify-content-between"><span>Subtotal (inc. VAT):</span><span>£${subtotal.toFixed(2)}</span></div>
      ${discount > 0 ? `<div class="d-flex justify-content-between text-success"><span>Discount:</span><span>-£${discount.toFixed(2)}</span></div>` : ""}
      <div class="d-flex justify-content-between"><span>Shipping:</span><span>£${shipping.toFixed(2)}${shipping === 0 ? ' (Free over £50)' : ''}</span></div>
      <hr>
      <div class="d-flex justify-content-between fw-bold"><span>Total:</span><span>£${total.toFixed(2)}</span></div>
    `;
    // Show monthly if APR selected
    const aprRadio = document.getElementById('payAPR');
    const aprInfo = document.getElementById('aprInfo');
    const aprMonthly = document.getElementById('aprMonthly');
    if (aprRadio && aprRadio.checked && aprInfo && aprMonthly) {
      aprMonthly.textContent = `£${(total/12).toFixed(2)}`;
      aprInfo.style.display = '';
    } else if (aprInfo) {
      aprInfo.style.display = 'none';
    }
  }
}

if (checkoutBtn && checkoutModal) {
  checkoutBtn.onclick = function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    renderOrderSummary();
    checkoutModal.classList.add('active');
  };
}
if (closeCheckout) closeCheckout.onclick = () => checkoutModal.classList.remove('active');
if (closeOrderBtn) closeOrderBtn.onclick = () => checkoutModal.classList.remove('active');
if (checkoutModal) {
  checkoutModal.onclick = function(e) {
    if (e.target === checkoutModal) checkoutModal.classList.remove('active');
  };
  const modalDialog = checkoutModal.querySelector('.custom-modal-dialog');
  if (modalDialog) modalDialog.onclick = e => e.stopPropagation();
}

// --- Payment Modal Logic ---
const paymentModal = document.getElementById('paymentModal');
const closePaymentModal = document.getElementById('closePaymentModal');
const paymentDetailsForm = document.getElementById('paymentDetailsForm');

if (closePaymentModal) closePaymentModal.onclick = () => paymentModal.classList.remove('active');
if (paymentModal) {
  paymentModal.onclick = function(e) {
    if (e.target === paymentModal) paymentModal.classList.remove('active');
  };
  const modalDialog = paymentModal.querySelector('.custom-modal-dialog');
  if (modalDialog) modalDialog.onclick = e => e.stopPropagation();
}

if (paymentDetailsForm) {
  paymentDetailsForm.onsubmit = function(e) {
    e.preventDefault();
    // Here you would process payment details securely
    alert("Payment successful! (Demo)");
    paymentModal.classList.remove('active');
    checkoutModal.classList.remove('active');
    // Optionally clear cart here
    // localStorage.removeItem('cart');
    // renderCart();
    // updateCartCount();
  };
}

// --- Show Payment Modal on Pay Now ---
if (paymentForm) {
  paymentForm.onsubmit = function(e) {
    e.preventDefault();
    checkoutModal.classList.remove('active');
    paymentModal.classList.add('active');
  };
}
