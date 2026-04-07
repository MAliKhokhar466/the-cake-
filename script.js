// --- Expanded Product Data Array (More Cards added!) ---
const products = [
    // Birthdays
    { code: 'B-01', name: 'Strawberry Dream', price: '$25.00', egg: 'With Egg', event: 'Birthday', img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80' },
    { code: 'B-02', name: 'Vanilla Confetti Surprise', price: '$20.00', egg: 'Egg less', event: 'Birthday', img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80' },
    { code: 'B-03', name: 'Midnight Chocolate Fudge', price: '$28.00', egg: 'With Egg', event: 'Birthday', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80' },
    
    // Anniversaries
    { code: 'A-01', name: 'Red Velvet Romance', price: '$35.00', egg: 'With Egg', event: 'Anniversary', img: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=600&q=80' },
    { code: 'A-02', name: 'Classic Black Forest', price: '$30.00', egg: 'With Egg', event: 'Anniversary', img: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=80' },
    { code: 'A-03', name: 'Lemon Berry Bliss', price: '$32.00', egg: 'Egg less', event: 'Anniversary', img: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=600&q=80' },
    
    // Engagements
    { code: 'E-01', name: 'Golden Engagement Ring', price: '$50.00', egg: 'Egg less', event: 'Engagement', img: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&q=80' },
    { code: 'E-02', name: 'Pearl Drop Fondant', price: '$55.00', egg: 'With Egg', event: 'Engagement', img: 'https://images.unsplash.com/photo-1519869491916-8ca6f615d6bd?w=600&q=80' },
    { code: 'E-03', name: 'Rose Buttercream Swirl', price: '$48.00', egg: 'With Egg', event: 'Engagement', img: 'https://images.unsplash.com/photo-1557925923-33b251d5928f?w=600&q=80' },

    // Marriages
    { code: 'M-01', name: 'Grand Floral Tier', price: '$120.00', egg: 'With Egg', event: 'Marriage', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80' },
    { code: 'M-02', name: 'Rustic Naked Cake', price: '$110.00', egg: 'Egg less', event: 'Marriage', img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80' },
    { code: 'M-03', name: 'Elegant White Fondant', price: '$150.00', egg: 'With Egg', event: 'Marriage', img: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=80' }
];

// --- HTML Generator for Product Cards ---
function getProductCardHTML(product) {
    const textColor = product.egg === 'Egg less' ? 'text-success' : 'text-danger';
    return `
        <div class="col-md-6 col-lg-4">
            <div class="product-card bg-white rounded-4 overflow-hidden h-100 position-relative">
                <span class="egg-badge ${textColor}">${product.egg}</span>
                <div class="product-img-wrap">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="p-4 text-center border-top">
                    <p class="text-muted small mb-1">SKU: <strong>${product.code}</strong></p>
                    <h5 class="fw-bold text-dark mb-2">${product.name}</h5>
                    <h4 class="text-pink fw-bold mb-3">${product.price}</h4>
                    
                    <div class="d-flex justify-content-center gap-2">
                        <button class="btn btn-light border" onclick="openZoomWindow('${product.img}')">
                            <i class="fa-solid fa-magnifying-glass-plus"></i> Get a Closer Look
                        </button>
                        <button class="btn btn-custom-pink" onclick="openOrderWindow('${product.code}', '${product.name}')">
                            <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- Render Functions ---
function renderAllProducts() {
    const grid = document.getElementById('allProductsGrid');
    grid.innerHTML = products.map(p => getProductCardHTML(p)).join('');
}

function filterByEvent(eventCategory, btnElement) {
    // Update Button Styling
    document.querySelectorAll('.btn-custom-outline-pink').forEach(b => b.classList.remove('active-filter'));
    btnElement.classList.add('active-filter');

    // Filter Products
    const grid = document.getElementById('eventProductsGrid');
    const filtered = products.filter(p => p.event === eventCategory);
    
    if(filtered.length === 0) {
        grid.innerHTML = `<p class="text-center w-100 text-muted">Aww, we're fresh out of cakes for this category right now!</p>`;
    } else {
        grid.innerHTML = filtered.map(p => getProductCardHTML(p)).join('');
    }
}

// --- Required: Open Zoom Image in New Window ---
function openZoomWindow(imgSrc) {
    const newWindow = window.open("", "_blank", "width=800,height=600");
    newWindow.document.write(`
        <html>
        <head><title>Looking Tasty - The Cake</title></head>
        <body style="margin:0; background:#111; display:flex; justify-content:center; align-items:center;">
            <img src="${imgSrc}" style="max-width:100%; max-height:100vh; box-shadow: 0 0 20px rgba(0,0,0,0.5);">
        </body>
        </html>
    `);
}

// --- Required: Open Purchase Form in New Window ---
function openOrderWindow(code, name) {
    const newWindow = window.open("", "_blank", "width=500,height=700");
    newWindow.document.write(`
        <html>
        <head>
            <title>Ready for Checkout? - The Cake</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
            <style>
                body { background-color: #ffe6f0; padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                .card { border: none; border-radius: 15px; box-shadow: 0 10px 30px rgba(232, 62, 140, 0.1); }
                .btn-pink { background-color: #e83e8c; color: white; border: none; border-radius: 30px; }
                .btn-pink:hover { background-color: #c61a61; color: white; }
            </style>
        </head>
        <body>
            <div class="card p-4">
                <h3 class="text-center text-dark fw-bold mb-1">Let's Get This Baking</h3>
                <p class="text-center text-muted mb-4">You're ordering the <strong style="color: #e83e8c;">${name}</strong></p>
                <form onsubmit="alert('Woohoo! Your dummy order has been safely sent to our kitchen.'); window.close(); return false;">
                    <div class="mb-3">
                        <label class="form-label fw-bold">SKU Reference</label>
                        <input type="text" class="form-control bg-light" value="${code}" readonly>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold">Who is this for?</label>
                        <input type="text" class="form-control" placeholder="Full Name" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold">Billing Address</label>
                        <textarea class="form-control" rows="2" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold">Best Number to Call</label>
                        <input type="tel" class="form-control" required>
                    </div>
                    <div class="row mb-3">
                        <div class="col-6">
                            <label class="form-label fw-bold">How many?</label>
                            <input type="number" class="form-control" min="1" value="1" required>
                        </div>
                        <div class="col-6">
                            <label class="form-label fw-bold">When do you need it?</label>
                            <input type="date" class="form-control" required>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="form-label fw-bold">Where should we drop it off?</label>
                        <textarea class="form-control" rows="2" placeholder="Delivery Address" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-pink w-100 py-2 fw-bold">Lock in My Order!</button>
                </form>
            </div>
        </body>
        </html>
    `);
}

// --- Geolocation API Logic ---
function initGeoLocation() {
    const statusText = document.getElementById('geo-status');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                statusText.innerHTML = `<i class="fa-solid fa-check-circle me-2"></i> Sweet! We found you at Lat: ${position.coords.latitude.toFixed(2)}, Lng: ${position.coords.longitude.toFixed(2)}`;
                statusText.className = "alert alert-success border-0 fw-bold";
            },
            (error) => {
                statusText.innerHTML = `<i class="fa-solid fa-map-pin me-2"></i> Couldn't grab your exact spot, so here's our main kitchen.`;
                statusText.className = "alert alert-secondary border-0 fw-bold";
            }
        );
    } else {
        statusText.innerHTML = "Ah, looks like your browser doesn't support maps.";
    }
}

// --- Create Dummy Account Logic ---
function createAccount(e) {
    e.preventDefault();
    alert("Yay! You're officially a member. We promise not to spam you, just sweet deals!");
    e.target.reset();
}

// --- Initialize Page ---
window.onload = () => {
    renderAllProducts();
    // Default select first button for sub-navigation
    const defaultFilterBtn = document.querySelector('.btn-custom-outline-pink');
    filterByEvent('Birthday', defaultFilterBtn); 
    initGeoLocation();
};