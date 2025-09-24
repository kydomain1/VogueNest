// Category Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('cat') || 'fashion';
    
    // Initialize category page
    initCategoryPage(category);
    initFilters();
    initPagination();
    initViewToggle();
});

// Category data
const categoryData = {
    fashion: {
        title: 'Fashion & Accessories',
        description: 'Discover the latest fashion trends, style tips, and must-have accessories',
        icon: 'fas fa-tshirt',
        color: '#A8B5A0',
        posts: [
            {
                id: 1,
                title: 'Spring Fashion Trends 2025: Pastel Perfection',
                excerpt: 'Discover the latest spring fashion trends featuring soft pastels and sustainable materials that will define your wardrobe this season.',
                image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
                date: '2025-03-15',
                readTime: '5 min read',
                featured: true,
                trending: true
            },
            {
                id: 2,
                title: 'Sustainable Fashion: Building an Eco-Friendly Wardrobe',
                excerpt: 'Learn how to create a sustainable wardrobe with ethical fashion choices and eco-friendly brands.',
                image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop',
                date: '2025-02-28',
                readTime: '7 min read',
                featured: false,
                trending: true
            },
            {
                id: 3,
                title: 'Accessory Essentials: Must-Have Pieces for Every Season',
                excerpt: 'From statement jewelry to versatile bags, discover the accessories that will elevate your style.',
                image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop',
                date: '2025-01-20',
                readTime: '6 min read',
                featured: true,
                trending: false
            }
        ]
    },
    beauty: {
        title: 'Health & Beauty',
        description: 'Beauty routines, skincare tips, and wellness advice for a radiant you',
        icon: 'fas fa-spa',
        color: '#D4C4B0',
        posts: [
            {
                id: 4,
                title: '10-Step Korean Skincare Routine for Glowing Skin',
                excerpt: 'Learn the secrets of Korean beauty with this comprehensive skincare guide that will transform your skin.',
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
                date: '2025-02-28',
                readTime: '8 min read',
                featured: true,
                trending: true
            },
            {
                id: 5,
                title: 'Natural Beauty: DIY Face Masks for Every Skin Type',
                excerpt: 'Create effective face masks at home using natural ingredients for healthy, glowing skin.',
                image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
                date: '2025-04-10',
                readTime: '6 min read',
                featured: false,
                trending: false
            }
        ]
    },
    home: {
        title: 'Home & Garden',
        description: 'Interior design ideas, gardening tips, and home improvement inspiration',
        icon: 'fas fa-home',
        color: '#E8D5C4',
        posts: [
            {
                id: 6,
                title: 'Minimalist Home Decor Ideas for Modern Living',
                excerpt: 'Transform your space with these simple yet elegant minimalist design concepts that create a peaceful home.',
                image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
                date: '2025-04-10',
                readTime: '6 min read',
                featured: true,
                trending: true
            },
            {
                id: 7,
                title: 'Indoor Plants: The Ultimate Guide to Plant Parenting',
                excerpt: 'Discover the best indoor plants for beginners and learn how to keep them thriving in your home.',
                image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
                date: '2025-05-15',
                readTime: '9 min read',
                featured: false,
                trending: false
            }
        ]
    },
    travel: {
        title: 'Travel & Stay',
        description: 'Travel guides, accommodation tips, and wanderlust inspiration',
        icon: 'fas fa-plane',
        color: '#A8B5A0',
        posts: [
            {
                id: 8,
                title: 'Hidden Gems: 10 Underrated European Destinations',
                excerpt: 'Explore these lesser-known European destinations that offer authentic experiences away from the crowds.',
                image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
                date: '2025-06-20',
                readTime: '10 min read',
                featured: true,
                trending: true
            },
            {
                id: 9,
                title: 'Budget Travel Tips: How to See the World for Less',
                excerpt: 'Learn how to travel the world on a budget with these practical money-saving tips and tricks.',
                image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
                date: '2025-07-05',
                readTime: '8 min read',
                featured: false,
                trending: false
            }
        ]
    },
    finance: {
        title: 'Finance & Insurance',
        description: 'Financial planning, investment advice, and money management tips',
        icon: 'fas fa-chart-line',
        color: '#D4C4B0',
        posts: [
            {
                id: 10,
                title: 'Smart Money Moves: Building Your Emergency Fund',
                excerpt: 'Learn how to build a solid emergency fund that will protect you during unexpected financial challenges.',
                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
                date: '2025-01-15',
                readTime: '7 min read',
                featured: true,
                trending: true
            },
            {
                id: 11,
                title: 'Investment Basics: Getting Started with Your Portfolio',
                excerpt: 'A beginner\'s guide to investing and building a diversified portfolio for long-term wealth.',
                image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
                date: '2025-08-10',
                readTime: '12 min read',
                featured: false,
                trending: false
            }
        ]
    },
    food: {
        title: 'Food & Beverage',
        description: 'Recipes, dining experiences, and culinary adventures',
        icon: 'fas fa-utensils',
        color: '#E8D5C4',
        posts: [
            {
                id: 12,
                title: 'Healthy Breakfast Recipes to Start Your Day Right',
                excerpt: 'Discover nutritious and delicious breakfast recipes that will fuel your day with energy and flavor.',
                image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop',
                date: '2025-03-01',
                readTime: '5 min read',
                featured: true,
                trending: true
            },
            {
                id: 13,
                title: 'Plant-Based Cooking: Delicious Vegan Recipes',
                excerpt: 'Explore the world of plant-based cooking with these flavorful and nutritious vegan recipes.',
                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
                date: '2025-05-25',
                readTime: '8 min read',
                featured: false,
                trending: false
            }
        ]
    }
};

// Initialize category page
function initCategoryPage(category) {
    const categoryInfo = document.getElementById('categoryInfo');
    const categoryInfo_data = categoryData[category];
    
    if (categoryInfo_data) {
        categoryInfo.innerHTML = `
            <div class="category-header-content">
                <div class="category-icon-large">
                    <i class="${categoryInfo_data.icon}"></i>
                </div>
                <div class="category-details">
                    <h1>${categoryInfo_data.title}</h1>
                    <p>${categoryInfo_data.description}</p>
                    <div class="category-stats">
                        <span><i class="fas fa-article"></i> ${categoryInfo_data.posts.length} Articles</span>
                        <span><i class="fas fa-eye"></i> 2.5K Views</span>
                    </div>
                </div>
            </div>
        `;
        
        // Update page title
        document.title = `${categoryInfo_data.title} - VogueNest`;
        
        // Load posts
        loadPosts(categoryInfo_data.posts);
    }
}

// Load posts
function loadPosts(posts, currentPage = 1, postsPerPage = 6) {
    const postsGrid = document.getElementById('postsGrid');
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);
    
    postsGrid.innerHTML = currentPosts.map(post => `
        <article class="post-card ${post.featured ? 'featured' : ''}" data-id="${post.id}">
            <div class="post-image">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
                <div class="post-category">${getCategoryFromId(post.id)}</div>
                ${post.trending ? '<div class="trending-badge">Trending</div>' : ''}
            </div>
            <div class="post-content">
                <h3><a href="article.html?id=${post.id}">${post.title}</a></h3>
                <p>${post.excerpt}</p>
                <div class="post-meta">
                    <span class="post-date">${formatDate(post.date)}</span>
                    <span class="read-time">${post.readTime}</span>
                </div>
                <div class="post-actions">
                    <button class="like-btn" data-id="${post.id}">
                        <i class="far fa-heart"></i>
                        <span>24</span>
                    </button>
                    <button class="share-btn" data-id="${post.id}">
                        <i class="fas fa-share"></i>
                    </button>
                </div>
            </div>
        </article>
    `).join('');
    
    // Add click handlers
    addPostClickHandlers();
    
    // Update pagination
    updatePagination(posts.length, currentPage, postsPerPage);
}

// Get category from post ID
function getCategoryFromId(id) {
    const categoryMap = {
        1: 'Fashion', 2: 'Fashion', 3: 'Fashion',
        4: 'Beauty', 5: 'Beauty',
        6: 'Home', 7: 'Home',
        8: 'Travel', 9: 'Travel',
        10: 'Finance', 11: 'Finance',
        12: 'Food', 13: 'Food'
    };
    return categoryMap[id] || 'General';
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Add post click handlers
function addPostClickHandlers() {
    const postCards = document.querySelectorAll('.post-card');
    const likeBtns = document.querySelectorAll('.like-btn');
    const shareBtns = document.querySelectorAll('.share-btn');
    
    postCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.like-btn') && !e.target.closest('.share-btn')) {
                const postId = this.dataset.id;
                window.location.href = `article.html?id=${postId}`;
            }
        });
    });
    
    likeBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('liked');
            const icon = this.querySelector('i');
            const count = this.querySelector('span');
            
            if (this.classList.contains('liked')) {
                icon.className = 'fas fa-heart';
                count.textContent = parseInt(count.textContent) + 1;
            } else {
                icon.className = 'far fa-heart';
                count.textContent = parseInt(count.textContent) - 1;
            }
        });
    });
    
    shareBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (navigator.share) {
                navigator.share({
                    title: 'Check out this article on VogueNest',
                    url: window.location.href
                });
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(window.location.href);
                showNotification('Link copied to clipboard!', 'success');
            }
        });
    });
}

// Initialize filters
function initFilters() {
    const sortSelect = document.getElementById('sortSelect');
    const filterSelect = document.getElementById('filterSelect');
    
    sortSelect.addEventListener('change', function() {
        const currentCategory = getCurrentCategory();
        const posts = categoryData[currentCategory].posts;
        const sortedPosts = sortPosts(posts, this.value);
        loadPosts(sortedPosts);
    });
    
    filterSelect.addEventListener('change', function() {
        const currentCategory = getCurrentCategory();
        let posts = categoryData[currentCategory].posts;
        
        if (this.value === 'featured') {
            posts = posts.filter(post => post.featured);
        } else if (this.value === 'trending') {
            posts = posts.filter(post => post.trending);
        }
        
        loadPosts(posts);
    });
}

// Get current category from URL
function getCurrentCategory() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('cat') || 'fashion';
}

// Sort posts
function sortPosts(posts, sortBy) {
    const sortedPosts = [...posts];
    
    switch (sortBy) {
        case 'newest':
            return sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'oldest':
            return sortedPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
        case 'popular':
            return sortedPosts.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
        case 'title':
            return sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
        default:
            return sortedPosts;
    }
}

// Initialize pagination
function initPagination() {
    // Pagination is handled in loadPosts function
}

// Update pagination
function updatePagination(totalPosts, currentPage, postsPerPage) {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '<div class="pagination-container">';
    
    // Previous button
    if (currentPage > 1) {
        paginationHTML += `<button class="pagination-btn" data-page="${currentPage - 1}">
            <i class="fas fa-chevron-left"></i> Previous
        </button>`;
    }
    
    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `<button class="pagination-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    
    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `<button class="pagination-btn" data-page="${currentPage + 1}">
            Next <i class="fas fa-chevron-right"></i>
        </button>`;
    }
    
    paginationHTML += '</div>';
    pagination.innerHTML = paginationHTML;
    
    // Add click handlers
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    paginationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const page = parseInt(this.dataset.page);
            const currentCategory = getCurrentCategory();
            const posts = categoryData[currentCategory].posts;
            loadPosts(posts, page, postsPerPage);
        });
    });
}

// Initialize view toggle
function initViewToggle() {
    const viewBtns = document.querySelectorAll('.view-btn');
    const postsGrid = document.getElementById('postsGrid');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            viewBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Toggle view
            const view = this.dataset.view;
            if (view === 'list') {
                postsGrid.classList.add('list-view');
            } else {
                postsGrid.classList.remove('list-view');
            }
        });
    });
}

// Show notification
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}
