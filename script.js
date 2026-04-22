const products = [

    { id: 1, name: "iPhone 15 Pro", price: 99999, category: "electronics", emoji: "📱", image: "https://images.unsplash.com/photo-1592899678534-2e3c7e5c9e42?w=200&h=200&fit=crop" },
    { id: 2, name: "Samsung Galaxy S24", price: 79999, category: "electronics", emoji: "📱", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop" },
    { id: 3, name: "Sony WH-1000XM5", price: 29999, category: "electronics", emoji: "🎧", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop" },
    { id: 4, name: "Apple Watch Ultra", price: 79999, category: "electronics", emoji: "⌚", image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=200&h=200&fit=crop" },
    { id: 5, name: "MacBook Air M2", price: 99999, category: "electronics", emoji: "💻", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=200&h=200&fit=crop" },
    { id: 6, name: "iPad Pro 12.9", price: 89999, category: "electronics", emoji: "📱", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=200&fit=crop" },

    // Fashion (6)
    { id: 7, name: "Nike Air Max 90", price: 12999, category: "fashion", emoji: "👟", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop" },
    { id: 8, name: "Levi's 501 Jeans", price: 4999, category: "fashion", emoji: "👖", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=200&fit=crop" },
    { id: 9, name: "Gucci T-Shirt", price: 8999, category: "fashion", emoji: "👕", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop" },
    { id: 10, name: "Ray-Ban Sunglasses", price: 12999, category: "fashion", emoji: "🕶️", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop" },
    { id: 11, name: "Adidas Hoodie", price: 5999, category: "fashion", emoji: "👘", image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=200&h=200&fit=crop" },
    { id: 12, name: "Rolex Submariner", price: 899999, category: "fashion", emoji: "⌚", image: "https://images.unsplash.com/photo-1524592094714-0f0652e544ff?w=200&h=200&fit=crop" },

    // Home & Living (6)
    { id: 13, name: "IKEA Coffee Table", price: 12999, category: "home", emoji: "☕", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=200&fit=crop" },
    { id: 14, name: "Dyson Vacuum", price: 39999, category: "home", emoji: "🧹", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=200&h=200&fit=crop" },
    { id: 15, name: "Philips Smart Bulb", price: 1999, category: "home", emoji: "💡", image: "https://images.unsplash.com/photo-1533689211459-3c6c94ef9e1c?w=200&h=200&fit=crop" },
    { id: 16, name: "Sofa Set 3-Seater", price: 49999, category: "home", emoji: "🛋️", image: "https://images.unsplash.com/photo-1558618047-3c8c76bbb17e?w=200&h=200&fit=crop" },
    { id: 17, name: "Kitchen Mixer", price: 8999, category: "home", emoji: "🥣", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3133?w=200&h=200&fit=crop" },
    { id: 18, name: "Bed Sheet Set", price: 2999, category: "home", emoji: "🛏️", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop" },

    // Sports (3)
    { id: 19, name: "Yonex Badminton", price: 4999, category: "sports", emoji: "🏸", image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c3e?w=200&h=200&fit=crop" },
    { id: 20, name: "Nike Football", price: 2999, category: "sports", emoji: "⚽", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop" },
    { id: 21, name: "Decathlon Cricket Bat", price: 3999, category: "sports", emoji: "🏏", image: "https://images.unsplash.com/photo-1600439510288-3bf2f9e07411?w=200&h=200&fit=crop" },

    // Books (3)
    { id: 22, name: "Atomic Habits", price: 399, category: "books", emoji: "📖", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=200&fit=crop" },
    { id: 23, name: "Rich Dad Poor Dad", price: 299, category: "books", emoji: "📚", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=200&fit=crop" },
    { id: 24, name: "Sapiens", price: 499, category: "books", emoji: "📘", image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&h=200&fit=crop" }
];

let cart = [];
let currentFilter = 'all';

const productsGrid = document.getElementById('productsGrid');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const totalItems = document.getElementById('totalItems');
const filterText = document.getElementById('filterText');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


document.addEventListener('DOMContentLoaded', function() {
    loadProducts('all');
    updateCartDisplay();
});

function loadProducts(filter = 'all') {
    currentFilter = filter;
    const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);
    
    productsGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    filterText.textContent = filter === 'all' ? 'All Products' : filter.charAt(0).toUpperCase() + filter.slice(1);
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <span class="emoji-overlay">${product.emoji}</span>
        </div>
        <div class="product-info">
            <div class="product-category">${product.category.toUpperCase()}</div>
            <h3>${product.name}</h3>
            <div class="product-rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <span>4.5 (120)</span>
            </div>
            <div class="product-price">₹${product.price.toLocaleString()}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;
    return card;
}

function filterProducts(category) {
    loadProducts(category);

    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartCount();
    updateCartDisplay();
    showNotification(`${product.name} added to cart! 🛒`);
}

function updateCartCount() {
    const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItemsCount;
}

function openCart() {
    cartModal.style.display = 'block';
    updateCartDisplay();
}

function closeCart() {
    cartModal.style.display = 'none';
}

window.addEventListener('click', function(e) {
    if (e.target === cartModal) closeCart();
});

function updateCartDisplay() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #7f8c8d;">
                <i class="fas fa-shopping-cart" style="font-size: 4rem; margin-bottom: 1rem;"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
            </div>
        `;
        cartTotal.textContent = '0';
        totalItems.textContent = '0';
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-emoji">${item.emoji}</div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="price">₹${item.price.toLocaleString()}</div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
                <div class="item-total">₹${itemTotal.toLocaleString()}</div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = total.toLocaleString();
    totalItems.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function changeQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            updateCartDisplay();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDisplay();
    showNotification('Item removed from cart! ❌');
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderSummary = cart.map(item => `${item.name} x${item.quantity}`).join('\n');
    
    alert(`🎉 Order Placed Successfully!\n\n${orderSummary}\n\nTotal: ₹${total.toLocaleString()}\n\nThank you for shopping with ShopZone!`);
    cart = [];
    updateCartCount();
    updateCartDisplay();
    closeCart();
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function scrollToCategories() {
    document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
}

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

function showNotification(message) {
    
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        font-family: Poppins, sans-serif;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

const salesData = {
    totalOrders: 156,
    totalSales: 1250000,
    monthlySales: {
        'Jan': { sales: 180000, cost: 120000, profit: 60000 },
        'Feb': { sales: 220000, cost: 150000, profit: 70000 },
        'Mar': { sales: 280000, cost: 190000, profit: 90000 },
        'Apr': { sales: 320000, cost: 220000, profit: 100000 },
        'May': { sales: 450000, cost: 300000, profit: 150000 },
        'Jun': { sales: 380000, cost: 260000, profit: 120000 }
    }
};

// Initialize Dashboard
function initDashboard() {
    updateStats();
    createSalesChart();
    generateProfitTable();
}

// Update Stats Cards
function updateStats() {
    document.getElementById('totalOrders').textContent = salesData.totalOrders;
    document.getElementById('totalSales').textContent = salesData.totalSales.toLocaleString();
    
    const currentMonth = new Date().toLocaleString('default', { month: 'short' });
    const monthly = salesData.monthlySales[currentMonth] || salesData.monthlySales['Jun'];
    document.getElementById('monthlySales').textContent = monthly.sales.toLocaleString();
    
    const totalProfit = Object.values(salesData.monthlySales).reduce((sum, month) => sum + month.profit, 0);
    const profitElement = document.getElementById('profitLoss');
    profitElement.textContent = totalProfit.toLocaleString();
    
    if (totalProfit > 0) {
        profitElement.classList.add('profit-positive');
        profitElement.parentElement.parentElement.classList.add('profit');
    } else {
        profitElement.classList.add('profit-loss', 'negative');
    }
}

// Simple Canvas Chart
function createSalesChart() {
    const canvas = document.getElementById('salesChart');
    const ctx = canvas.getContext('2d');
    
    // Chart Data
    const months = Object.keys(salesData.monthlySales);
    const sales = months.map(m => salesData.monthlySales[m].sales);
    const maxSales = Math.max(...sales);
    
    // Clear Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw Chart
    const barWidth = 45;
    const gap = 10;
    const startX = 50;
    
    months.forEach((month, index) => {
        const barHeight = (sales[index] / maxSales) * 150;
        const x = startX + (index * (barWidth + gap));
        const y = canvas.height - 50 - barHeight;
        
        // Bar
        ctx.fillStyle = '#3498db';
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Bar Border
        ctx.strokeStyle = '#2980b9';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, barWidth, barHeight);
        
        // Month Label
        ctx.fillStyle = '#2c3e50';
        ctx.font = 'bold 12px Poppins';
        ctx.textAlign = 'center';
        ctx.fillText(month, x + barWidth/2, canvas.height - 10);
        
        // Sales Value
        ctx.fillStyle = '#27ae60';
        ctx.font = '11px Poppins';
        ctx.fillText('₹' + (sales[index]/1000) + 'K', x + barWidth/2, y - 5);
    });
    
    // Title
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 18px Poppins';
    ctx.textAlign = 'center';
    ctx.fillText('Monthly Sales Trend', canvas.width/2, 25);
    
    // Axes
    ctx.strokeStyle = '#bdc3c7';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(40, 40);
    ctx.lineTo(40, canvas.height - 40);
    ctx.lineTo(canvas.width - 20, canvas.height - 40);
    ctx.stroke();
}

function generateProfitTable() {
    const tbody = document.getElementById('profitTable');
    tbody.innerHTML = '';
    
    Object.entries(salesData.monthlySales).forEach(([month, data]) => {
        const profitPercent = ((data.profit / data.cost) * 100).toFixed(1);
        const row = `
            <tr>
                <td>${month}</td>
                <td>₹${data.sales.toLocaleString()}</td>
                <td>₹${data.cost.toLocaleString()}</td>
                <td class="${data.profit >= 0 ? 'profit-positive' : 'profit-negative'}">
                    ₹${data.profit.toLocaleString()}
                </td>
                <td>${profitPercent}%</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

const originalCheckout = checkout;
checkout = function() {
    originalCheckout();
    
    salesData.totalOrders += 1;
    salesData.totalSales += 5000;
    
    initDashboard(); // Refresh stats
};

document.addEventListener('DOMContentLoaded', function() {
    loadProducts('all');
    updateCartDisplay();
    initDashboard();
});
