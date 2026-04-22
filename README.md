!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShopZone - Premium Shopping</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    
    <header>
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <h2><i class="fas fa-store"></i> Shop<span>Zone</span></h2>
                </div>
                <ul class="nav-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#categories">Categories</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="cart-icon" onclick="openCart()">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="cart-count" id="cartCount">0</span>
                </div>
                <div class="hamburger">
                    <span></span><span></span><span></span>
                </div>
            </div>
        </nav>
    </header>

    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Premium Shopping <span>Experience</span></h1>
            <p>Discover 50+ products across 6 categories at unbeatable prices!</p>
            <div class="hero-buttons">
                <button class="cta-btn primary" onclick="scrollToProducts()">Shop Now</button>
                <button class="cta-btn secondary" onclick="scrollToCategories()">View Categories</button>
            </div>
        </div>
    </section>

    <section id="categories" class="categories">
        <div class="container">
            <h2 class="section-title">Shop by Category</h2>
            <div class="categories-grid">
                <div class="category-card" onclick="filterProducts('electronics')">
                    <div class="category-icon">📱</div>
                    <h3>Electronics</h3>
                </div>
                <div class="category-card" onclick="filterProducts('fashion')">
                    <div class="category-icon">👕</div>
                    <h3>Fashion</h3>
                </div>
                <div class="category-card" onclick="filterProducts('home')">
                    <div class="category-icon">🏠</div>
                    <h3>Home & Living</h3>
                </div>
                <div class="category-card" onclick="filterProducts('sports')">
                    <div class="category-icon">⚽</div>
                    <h3>Sports</h3>
                </div>
                <div class="category-card" onclick="filterProducts('books')">
                    <div class="category-icon">📚</div>
                    <h3>Books</h3>
                </div>
                <div class="category-card" onclick="filterProducts('all')">
                    <div class="category-icon">🛒</div>
                    <h3>All Products</h3>
                </div>
            </div>
        </div>
    </section>

    <section id="products" class="products">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Featured Products</h2>
                <div class="filter-active" id="filterText">All Products</div>
            </div>
            <div class="products-grid" id="productsGrid">
                <!-- 24 Products Loading Here -->
            </div>
        </div>
    </section>

    <!-- Cart Modal -->
    <div class="modal" id="cartModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-shopping-cart"></i> My Cart</h3>
                <span class="close" onclick="closeCart()">&times;</span>
            </div>
            <div class="cart-items" id="cartItems"></div>
            <div class="cart-total">
                <div class="total-row">
                    <span>Total Items:</span>
                    <span id="totalItems">0</span>
                </div>
                <div class="total-row grand">
                    <span>Grand Total:</span>
                    <span>₹<span id="cartTotal">0</span></span>
                </div>
                <button class="checkout-btn" onclick="checkout()">
                    <i class="fas fa-credit-card"></i> Proceed to Checkout
                </button>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer id="contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>ShopZone</h3>
                    <p>Premium shopping experience with best prices!</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <p>Home | Products | Categories | Contact</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 ShopZone. College Project 🚀</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
<section id="dashboard" class="dashboard">
    <div class="container">
        <h2 class="section-title">📊 Sales Dashboard</h2>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon">🛒</div>
                <h3>Total Orders</h3>
                <div class="stat-number" id="totalOrders">0</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">💰</div>
                <h3>Total Sales</h3>
                <div class="stat-number" id="totalSales">₹0</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">📈</div>
                <h3>Monthly Sales</h3>
                <div class="stat-number" id="monthlySales">₹0</div>
            </div>
            <div class="stat-card profit">
                <div class="stat-icon">💹</div>
                <h3>Profit/Loss</h3>
                <div class="stat-number" id="profitLoss">₹0</div>
            </div>
        </div>
        
        <div class="sales-chart">
            <canvas id="salesChart" width="400" height="200"></canvas>
        </div>
        
        <div class="cost-profit-table">
            <h3>Cost vs Profit Analysis</h3>
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Sales</th>
                        <th>Cost</th>
                        <th>Profit/Loss</th>
                        <th>Profit %</th>
                    </tr>
                </thead>
                <tbody id="profitTable">
                    <!-- Dynamic Data -->
                </tbody>
            </table>
        </div>
    </div>
</section># shopping-website
