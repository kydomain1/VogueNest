// Article Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id')) || 1;
    
    console.log('Article ID:', articleId);
    console.log('Available articles:', Object.keys(articleData));
    console.log('Article data:', articleData);
    
    // Check if article exists
    if (!articleData[articleId]) {
        console.error('Article not found:', articleId);
        // Redirect to home page or show error
        const articleContent = document.getElementById('articleContent');
        if (articleContent) {
            articleContent.innerHTML = `
                <div class="error-message" style="text-align: center; padding: 2rem; background: var(--white); border-radius: var(--radius-lg); box-shadow: 0 4px 20px var(--shadow);">
                    <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Article Not Found</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 2rem;">The article you're looking for doesn't exist.</p>
                    <a href="index.html" class="cta-btn" style="display: inline-block; background: var(--primary-color); color: var(--white); padding: 0.75rem 1.5rem; border-radius: var(--radius-lg); text-decoration: none; font-weight: 600;">Back to Home</a>
                </div>
            `;
        }
        return;
    }
    
    // Initialize article page
    initArticlePage(articleId);
    initArticleActions();
    initComments();
    initRelatedArticles(articleId);
});

// Article data
const articleData = {
    1: {
        title: 'Spring Fashion Trends 2025: Pastel Perfection',
        category: 'Fashion',
        date: '2025-03-15',
        readTime: '5 min read',
        author: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=400&fit=crop',
        content: `
            <p>Spring 2025 brings a refreshing wave of pastel perfection to the fashion world. This season, designers are embracing soft, muted tones that evoke a sense of tranquility and sophistication. From delicate lavender to sage green, these gentle hues are transforming wardrobes into havens of calm elegance.</p>
            
            <h2>The Pastel Palette Revolution</h2>
            <p>This year's pastel trend goes beyond the traditional baby pink and mint green. We're seeing sophisticated combinations of dusty rose, powder blue, and soft peach that create a harmonious and modern aesthetic. These colors work beautifully together, allowing for effortless mix-and-match styling.</p>
            
            <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop" alt="Pastel Fashion Collection" class="article-image">
            
            <h2>Sustainable Materials Take Center Stage</h2>
            <p>What makes this season's pastel trend even more appealing is the focus on sustainable materials. Designers are incorporating organic cotton, bamboo fibers, and recycled polyester into their pastel collections, proving that style and sustainability can coexist beautifully.</p>
            
            <h2>Key Pieces to Invest In</h2>
            <ul>
                <li><strong>Pastel Blazers:</strong> A soft-hued blazer in sage or lavender adds instant sophistication to any outfit</li>
                <li><strong>Midi Dresses:</strong> Flowing midi dresses in pastel tones are perfect for both casual and formal occasions</li>
                <li><strong>Wide-Leg Trousers:</strong> Comfortable and stylish, these are a must-have for the modern wardrobe</li>
                <li><strong>Pastel Accessories:</strong> From handbags to shoes, accessories in soft tones complete the look</li>
            </ul>
            
            <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop" alt="Spring Fashion Investment Pieces" class="article-image">
            
            <h2>Styling Tips for Pastel Perfection</h2>
            <p>To master the pastel trend, consider these styling approaches:</p>
            <ol>
                <li><strong>Monochromatic Magic:</strong> Wear different shades of the same color for a cohesive look</li>
                <li><strong>Complementary Combinations:</strong> Pair pastels with neutral tones like beige or cream</li>
                <li><strong>Texture Play:</strong> Mix different textures to add depth to your pastel outfits</li>
                <li><strong>Accessory Accents:</strong> Use metallic accessories to add a touch of glamour</li>
            </ol>
            
            <p>This spring, embrace the pastel perfection trend and let these gentle hues bring a sense of peace and elegance to your wardrobe. Remember, fashion is about expressing your personality, so don't be afraid to experiment with different combinations until you find what works best for you.</p>
        `,
        related: [2, 3, 6]
    },
    2: {
        title: 'Sustainable Fashion: Building an Eco-Friendly Wardrobe',
        category: 'Fashion',
        date: '2025-02-28',
        readTime: '7 min read',
        author: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=400&fit=crop',
        content: `
            <p>Building an eco-friendly wardrobe doesn't mean sacrificing style. In fact, sustainable fashion opens up a world of creative possibilities while helping you make a positive impact on the environment. Let's explore how to curate a wardrobe that's both stylish and sustainable.</p>
            
            <h2>Understanding Sustainable Fashion</h2>
            <p>Sustainable fashion encompasses clothing, shoes, and accessories that are designed, manufactured, distributed, and used in ways that are environmentally friendly and socially responsible. This includes considering the entire lifecycle of a garment, from production to disposal.</p>
            
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" alt="Sustainable Fashion" class="article-image">
            
            <h2>Key Principles of Eco-Friendly Fashion</h2>
            <ul>
                <li><strong>Quality Over Quantity:</strong> Invest in well-made pieces that last longer</li>
                <li><strong>Natural Materials:</strong> Choose organic cotton, linen, hemp, and bamboo</li>
                <li><strong>Ethical Production:</strong> Support brands that treat workers fairly</li>
                <li><strong>Local Sourcing:</strong> Buy from local designers to reduce carbon footprint</li>
                <li><strong>Second-Hand Shopping:</strong> Give pre-loved items a new life</li>
            </ul>
            
            <h2>Building Your Sustainable Wardrobe</h2>
            <p>Start by auditing your current wardrobe. Identify pieces you love and wear frequently, then build around these core items. Focus on versatile pieces that can be styled in multiple ways and work across different seasons.</p>
            
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop" alt="Minimalist Wardrobe" class="article-image">
            
            <h2>Essential Sustainable Pieces</h2>
            <ol>
                <li><strong>Organic Cotton T-Shirts:</strong> The foundation of any wardrobe</li>
                <li><strong>Linen Blouses:</strong> Perfect for warm weather and breathable</li>
                <li><strong>Wool Sweaters:</strong> Natural fiber that's warm and durable</li>
                <li><strong>Denim Alternatives:</strong> Look for hemp or organic cotton jeans</li>
                <li><strong>Versatile Dresses:</strong> One-piece wonders that work for multiple occasions</li>
            </ol>
            
            <p>Remember, building a sustainable wardrobe is a journey, not a destination. Start small, make conscious choices, and gradually replace fast fashion items with sustainable alternatives. Every small step makes a difference.</p>
        `,
        related: [1, 3, 6]
    },
    4: {
        title: '10-Step Korean Skincare Routine for Glowing Skin',
        category: 'Beauty',
        date: '2025-02-28',
        readTime: '8 min read',
        author: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
        content: `
            <p>The Korean skincare routine has taken the beauty world by storm, and for good reason. This comprehensive approach to skincare focuses on layering products in the correct order to achieve that coveted "glass skin" look. Let's dive into the 10-step routine that will transform your skin.</p>
            
            <h2>Understanding the Korean Skincare Philosophy</h2>
            <p>Korean skincare emphasizes prevention over correction, focusing on maintaining healthy skin rather than fixing problems after they occur. The routine is designed to be gentle, hydrating, and consistent.</p>
            
            <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop" alt="Korean Skincare Products" class="article-image">
            
            <h2>The 10-Step Korean Skincare Routine</h2>
            
            <h3>Step 1: Oil Cleanser</h3>
            <p>Start with an oil-based cleanser to remove makeup, sunscreen, and excess sebum. This step is crucial for thoroughly cleaning your skin without stripping it of natural oils.</p>
            
            <h3>Step 2: Water-Based Cleanser</h3>
            <p>Follow with a gentle water-based cleanser to remove any remaining impurities and prepare your skin for the next steps.</p>
            
            <h3>Step 3: Exfoliator (2-3 times per week)</h3>
            <p>Use a gentle chemical exfoliant to remove dead skin cells and promote cell turnover. Avoid physical scrubs that can be too harsh.</p>
            
            <h3>Step 4: Toner</h3>
            <p>Apply a hydrating toner to balance your skin's pH and prepare it for better absorption of subsequent products.</p>
            
            <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=400&fit=crop" alt="Skincare Routine" class="article-image">
            
            <h3>Step 5: Essence</h3>
            <p>Essences are lightweight, hydrating products that help with skin renewal and provide additional moisture.</p>
            
            <h3>Step 6: Treatment (Serums/Ampoules)</h3>
            <p>Apply targeted treatments for specific concerns like acne, dark spots, or anti-aging. This is where you address your individual skin needs.</p>
            
            <h3>Step 7: Sheet Mask (2-3 times per week)</h3>
            <p>Sheet masks provide intensive hydration and treatment. Choose masks that address your specific skin concerns.</p>
            
            <h3>Step 8: Eye Cream</h3>
            <p>Gently pat eye cream around the orbital bone to hydrate the delicate eye area and prevent premature aging.</p>
            
            <h3>Step 9: Moisturizer</h3>
            <p>Lock in all the previous products with a good moisturizer that suits your skin type.</p>
            
            <h3>Step 10: Sunscreen (Morning only)</h3>
            <p>Protect your skin from harmful UV rays with a broad-spectrum sunscreen. This is the most important step for preventing premature aging.</p>
            
            <h2>Tips for Success</h2>
            <ul>
                <li>Be patient - results take time</li>
                <li>Patch test new products</li>
                <li>Introduce products gradually</li>
                <li>Listen to your skin</li>
                <li>Stay consistent with your routine</li>
            </ul>
            
            <p>Remember, the key to the Korean skincare routine is consistency and patience. Start with the basics and gradually add more steps as your skin adjusts. Your future self will thank you for the investment in healthy, glowing skin.</p>
        `,
        related: [5, 1, 2]
    },
    5: {
        title: 'Natural Beauty: DIY Face Masks for Every Skin Type',
        category: 'Beauty',
        date: '2025-04-10',
        readTime: '6 min read',
        author: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=400&fit=crop',
        content: `
            <p>Creating effective face masks at home using natural ingredients is not only cost-effective but also allows you to customize treatments for your specific skin type. These DIY masks are free from harsh chemicals and can provide amazing results when used consistently.</p>
            
            <h2>Understanding Your Skin Type</h2>
            <p>Before creating your DIY face masks, it's important to understand your skin type. This will help you choose the right ingredients and create the most effective treatments for your specific needs.</p>
            
            <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=400&fit=crop" alt="Natural Beauty Products" class="article-image">
            
            <h2>Best Ingredients for Different Skin Types</h2>
            <ul>
                <li><strong>For Dry Skin:</strong> Avocado, honey, and olive oil provide deep hydration</li>
                <li><strong>For Oily Skin:</strong> Clay, lemon juice, and tea tree oil help control excess oil</li>
                <li><strong>For Sensitive Skin:</strong> Oatmeal, chamomile, and aloe vera soothe and calm</li>
                <li><strong>For Combination Skin:</strong> Yogurt, cucumber, and green tea balance different areas</li>
            </ul>
            
            <h2>Simple DIY Face Mask Recipes</h2>
            <p>Here are some easy-to-make face masks that you can prepare in minutes using ingredients from your kitchen:</p>
            
            <h3>Hydrating Avocado Mask</h3>
            <p>Perfect for dry skin, this mask combines the moisturizing properties of avocado with the antibacterial benefits of honey.</p>
            
            <h3>Purifying Clay Mask</h3>
            <p>Ideal for oily skin, this mask helps draw out impurities and control excess oil production.</p>
            
            <p>Remember to always patch test new ingredients and consult with a dermatologist if you have sensitive skin or allergies.</p>
        `,
        related: [4, 1, 6]
    },
    6: {
        title: 'Minimalist Home Decor Ideas for Modern Living',
        category: 'Home',
        date: '2025-04-10',
        readTime: '6 min read',
        author: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop',
        content: `
            <p>Minimalist home decor is more than just a design trend—it's a lifestyle choice that promotes clarity, peace, and intentional living. By focusing on essential elements and removing clutter, you can create a space that feels both beautiful and functional.</p>
            
            <h2>The Philosophy of Minimalism</h2>
            <p>Minimalism in home decor isn't about having nothing; it's about having only what adds value to your life. This approach helps reduce stress, improve focus, and create a more peaceful living environment.</p>
            
            <img src="images/家具.png" alt="Minimalist Living Room" class="article-image">
            
            <h2>Key Principles of Minimalist Design</h2>
            <ul>
                <li><strong>Less is More:</strong> Choose quality over quantity in every piece</li>
                <li><strong>Clean Lines:</strong> Opt for furniture with simple, geometric shapes</li>
                <li><strong>Neutral Palette:</strong> Use whites, grays, and natural tones as your base</li>
                <li><strong>Functional Beauty:</strong> Every item should serve a purpose</li>
            </ul>
            
            <h2>Room-by-Room Minimalist Tips</h2>
            <p>Transform each space in your home with these minimalist principles:</p>
            
            <h3>Living Room</h3>
            <p>Focus on comfortable seating, good lighting, and a few statement pieces. Remove unnecessary decorations and keep surfaces clear.</p>
            
            <h3>Bedroom</h3>
            <p>Create a serene sleep environment with a comfortable bed, minimal furniture, and soft, neutral bedding.</p>
            
            <h3>Kitchen</h3>
            <p>Keep countertops clear, organize cabinets efficiently, and display only items you use regularly.</p>
            
            <p>Remember, minimalist design is about creating a space that reflects your values and supports your lifestyle. Start small and gradually work toward a more intentional home.</p>
        `,
        related: [7, 1, 2]
    },
    7: {
        title: 'Indoor Plants: The Ultimate Guide to Plant Parenting',
        category: 'Home',
        date: '2025-05-15',
        readTime: '9 min read',
        author: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop',
        content: `
            <p>Indoor plants have become more than just decorative elements—they're essential companions that bring life, color, and fresh air into our homes. Whether you're a complete beginner or looking to expand your plant collection, this guide will help you become a successful plant parent.</p>
            
            <h2>Why Indoor Plants Matter</h2>
            <p>Indoor plants do more than just look beautiful. They improve air quality, reduce stress, boost productivity, and create a calming atmosphere. Studies have shown that being around plants can lower blood pressure and improve mental well-being.</p>
            
            <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop" alt="Indoor Plants Collection" class="article-image">
            
            <h2>Best Plants for Beginners</h2>
            <p>If you're new to plant parenting, start with these forgiving and easy-to-care-for plants:</p>
            
            <ul>
                <li><strong>Snake Plant (Sansevieria):</strong> Almost indestructible, perfect for forgetful waterers</li>
                <li><strong>Pothos:</strong> Fast-growing and adaptable to various light conditions</li>
                <li><strong>ZZ Plant:</strong> Thrives on neglect and low light</li>
                <li><strong>Spider Plant:</strong> Produces baby plants you can share with friends</li>
            </ul>
            
            <h2>Essential Care Tips</h2>
            <p>Success with indoor plants comes down to understanding their basic needs:</p>
            
            <h3>Light Requirements</h3>
            <p>Most houseplants need bright, indirect light. Place them near windows but avoid direct sunlight, which can burn their leaves.</p>
            
            <h3>Watering Schedule</h3>
            <p>Overwatering is the most common cause of plant death. Check the soil moisture before watering and ensure your pots have drainage holes.</p>
            
            <h3>Humidity and Temperature</h3>
            <p>Most houseplants prefer temperatures between 65-75°F and moderate humidity. Group plants together to create a humid microclimate.</p>
            
            <p>Remember, every plant is unique, and it may take time to learn their individual needs. Don't be discouraged by setbacks—they're part of the learning process!</p>
        `,
        related: [6, 1, 4]
    },
    8: {
        title: 'Hidden Gems: 10 Underrated European Destinations',
        category: 'Travel',
        date: '2025-06-20',
        readTime: '10 min read',
        author: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop',
        content: `
            <p>While Paris, Rome, and London are undeniably beautiful, Europe is full of hidden gems that offer authentic experiences away from the crowds. These underrated destinations provide rich history, stunning landscapes, and local charm without the tourist masses.</p>
            
            <h2>Why Choose Underrated Destinations</h2>
            <p>Traveling to lesser-known places offers several advantages: lower costs, authentic local experiences, fewer crowds, and the opportunity to discover hidden treasures that most tourists miss.</p>
            
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop" alt="European Hidden Gems" class="article-image">
            
            <h2>Top 10 Underrated European Destinations</h2>
            
            <h3>1. Český Krumlov, Czech Republic</h3>
            <p>This fairy-tale town with its medieval architecture and winding streets feels like stepping into a storybook.</p>
            
            <h3>2. Hallstatt, Austria</h3>
            <p>Nestled between mountains and a pristine lake, this charming village offers breathtaking alpine scenery.</p>
            
            <h3>3. Sintra, Portugal</h3>
            <p>Known for its colorful palaces and mystical atmosphere, Sintra is a UNESCO World Heritage site.</p>
            
            <h3>4. Bruges, Belgium</h3>
            <p>This well-preserved medieval city with its canals and cobblestone streets is often called the "Venice of the North."</p>
            
            <h3>5. Rovinj, Croatia</h3>
            <p>A picturesque fishing town on the Istrian peninsula with colorful houses and crystal-clear waters.</p>
            
            <h2>Planning Your Trip</h2>
            <p>When visiting these hidden gems, consider staying in local accommodations, trying regional cuisine, and learning a few basic phrases in the local language to enhance your experience.</p>
            
            <p>These destinations offer the perfect blend of history, culture, and natural beauty, providing unforgettable experiences for the curious traveler.</p>
        `,
        related: [9, 1, 6]
    },
    9: {
        title: 'Budget Travel Tips: How to See the World for Less',
        category: 'Travel',
        date: '2025-07-05',
        readTime: '8 min read',
        author: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop',
        content: `
            <p>Traveling the world doesn't have to break the bank. With smart planning and a few insider tips, you can explore amazing destinations on a budget. Here's how to make your travel dreams a reality without emptying your wallet.</p>
            
            <h2>Budget Travel Philosophy</h2>
            <p>Budget travel isn't about missing out—it's about being smart with your money so you can travel more often and for longer periods. It's about prioritizing experiences over luxury accommodations.</p>
            
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop" alt="Budget Travel" class="article-image">
            
            <h2>Money-Saving Strategies</h2>
            
            <h3>Accommodation Hacks</h3>
            <ul>
                <li>Stay in hostels, guesthouses, or Airbnb</li>
                <li>Consider house-sitting or work-exchange programs</li>
                <li>Book accommodations with kitchen facilities to cook your own meals</li>
            </ul>
            
            <h3>Transportation Tips</h3>
            <ul>
                <li>Use budget airlines and comparison sites</li>
                <li>Travel during off-peak seasons</li>
                <li>Consider overnight buses or trains to save on accommodation</li>
                <li>Walk or use public transportation instead of taxis</li>
            </ul>
            
            <h3>Food and Activities</h3>
            <ul>
                <li>Eat where locals eat, not in tourist areas</li>
                <li>Look for free walking tours and museum days</li>
                <li>Take advantage of student discounts if applicable</li>
                <li>Pack snacks and water to avoid expensive convenience store purchases</li>
            </ul>
            
            <h2>Planning Your Budget Trip</h2>
            <p>Start by setting a realistic budget and tracking your expenses. Research destinations where your money goes further, and consider traveling to countries with favorable exchange rates.</p>
            
            <p>Remember, the best travel experiences often come from authentic interactions with locals and discovering hidden gems—both of which are usually free!</p>
        `,
        related: [8, 1, 10]
    },
    10: {
        title: 'Smart Money Moves: Building Your Emergency Fund',
        category: 'Finance',
        date: '2025-01-15',
        readTime: '7 min read',
        author: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
        content: `
            <p>An emergency fund is your financial safety net—a crucial component of any solid financial plan. It provides peace of mind and protects you from unexpected expenses that could otherwise derail your financial goals.</p>
            
            <h2>Why You Need an Emergency Fund</h2>
            <p>Life is unpredictable. Job loss, medical emergencies, car repairs, or home maintenance issues can happen to anyone. Without an emergency fund, you might be forced to rely on credit cards or loans, which can lead to debt and financial stress.</p>
            
            <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop" alt="Emergency Fund Planning" class="article-image">
            
            <h2>How Much Should You Save?</h2>
            <p>Financial experts generally recommend saving 3-6 months' worth of living expenses. However, the exact amount depends on your personal situation:</p>
            
            <ul>
                <li><strong>3 months:</strong> If you have a stable job and low expenses</li>
                <li><strong>6 months:</strong> If you're self-employed or have variable income</li>
                <li><strong>9-12 months:</strong> If you're in a high-risk industry or have dependents</li>
            </ul>
            
            <h2>Building Your Emergency Fund</h2>
            
            <h3>Start Small</h3>
            <p>Begin with a goal of $1,000, then gradually increase to your target amount. Even small contributions add up over time.</p>
            
            <h3>Automate Your Savings</h3>
            <p>Set up automatic transfers from your checking to your savings account. This ensures consistent contributions without requiring willpower.</p>
            
            <h3>Cut Unnecessary Expenses</h3>
            <p>Review your budget and identify areas where you can reduce spending. Redirect these savings to your emergency fund.</p>
            
            <h3>Use Windfalls Wisely</h3>
            <p>Tax refunds, bonuses, and gifts can provide significant boosts to your emergency fund.</p>
            
            <h2>Where to Keep Your Emergency Fund</h2>
            <p>Your emergency fund should be easily accessible but separate from your regular spending money. Consider a high-yield savings account or money market account that offers better interest rates than a traditional checking account.</p>
            
            <p>Remember, building an emergency fund takes time and discipline, but the financial security it provides is invaluable. Start today, even if you can only contribute a small amount.</p>
        `,
        related: [11, 1, 8]
    },
    11: {
        title: 'Investment Basics: Getting Started with Your Portfolio',
        category: 'Finance',
        date: '2025-08-10',
        readTime: '12 min read',
        author: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop',
        content: `
            <p>Investing can seem intimidating, but it's one of the most powerful tools for building long-term wealth. This beginner's guide will help you understand the basics and start your investment journey with confidence.</p>
            
            <h2>Why Invest?</h2>
            <p>Investing allows your money to work for you, potentially earning returns that outpace inflation. While saving money in a bank account preserves your capital, investing offers the opportunity for growth over time.</p>
            
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop" alt="Investment Planning" class="article-image">
            
            <h2>Types of Investments</h2>
            
            <h3>Stocks</h3>
            <p>Stocks represent ownership in a company. When you buy stocks, you become a shareholder and may benefit from the company's growth and dividends.</p>
            
            <h3>Bonds</h3>
            <p>Bonds are loans you make to governments or corporations. They typically offer lower risk and more predictable returns than stocks.</p>
            
            <h3>Mutual Funds and ETFs</h3>
            <p>These investment vehicles pool money from multiple investors to buy a diversified portfolio of stocks, bonds, or other assets.</p>
            
            <h3>Real Estate</h3>
            <p>Real estate investments can provide rental income and potential appreciation in property value.</p>
            
            <h2>Getting Started</h2>
            
            <h3>1. Set Clear Goals</h3>
            <p>Define what you're investing for—retirement, a house, education, or general wealth building.</p>
            
            <h3>2. Start with Index Funds</h3>
            <p>Index funds are a great way for beginners to start investing. They offer diversification and low fees.</p>
            
            <h3>3. Dollar-Cost Averaging</h3>
            <p>Invest a fixed amount regularly, regardless of market conditions. This strategy helps reduce the impact of market volatility.</p>
            
            <h3>4. Stay Diversified</h3>
            <p>Don't put all your eggs in one basket. Spread your investments across different asset classes and sectors.</p>
            
            <h2>Common Mistakes to Avoid</h2>
            <ul>
                <li>Investing money you can't afford to lose</li>
                <li>Trying to time the market</li>
                <li>Letting emotions drive investment decisions</li>
                <li>Not doing your research</li>
                <li>Paying high fees unnecessarily</li>
            </ul>
            
            <p>Remember, investing is a long-term game. Start early, stay consistent, and focus on your goals rather than short-term market fluctuations.</p>
        `,
        related: [10, 1, 12]
    },
    12: {
        title: 'Healthy Breakfast Recipes to Start Your Day Right',
        category: 'Food',
        date: '2025-03-01',
        readTime: '5 min read',
        author: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=400&fit=crop',
        content: `
            <p>Breakfast is often called the most important meal of the day, and for good reason. A nutritious breakfast provides the energy and nutrients needed to start your day right and maintain focus throughout the morning.</p>
            
            <h2>Why Breakfast Matters</h2>
            <p>A healthy breakfast kickstarts your metabolism, improves concentration, and helps maintain stable blood sugar levels. It also sets the tone for making better food choices throughout the day.</p>
            
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop" alt="Healthy Breakfast" class="article-image">
            
            <h2>Essential Breakfast Components</h2>
            <p>A balanced breakfast should include:</p>
            <ul>
                <li><strong>Protein:</strong> Helps keep you full and provides sustained energy</li>
                <li><strong>Complex Carbohydrates:</strong> Provide steady energy release</li>
                <li><strong>Healthy Fats:</strong> Support brain function and nutrient absorption</li>
                <li><strong>Fiber:</strong> Promotes digestive health and satiety</li>
            </ul>
            
            <h2>Quick and Healthy Breakfast Ideas</h2>
            
            <h3>Overnight Oats</h3>
            <p>Combine oats, milk, chia seeds, and your favorite fruits in a jar. Refrigerate overnight for a ready-to-eat breakfast.</p>
            
            <h3>Greek Yogurt Parfait</h3>
            <p>Layer Greek yogurt with berries, nuts, and a drizzle of honey for a protein-rich start to your day.</p>
            
            <h3>Avocado Toast</h3>
            <p>Top whole-grain bread with mashed avocado, a sprinkle of salt, and optional toppings like tomatoes or eggs.</p>
            
            <h3>Smoothie Bowl</h3>
            <p>Blend frozen fruits with yogurt or milk, then top with granola, nuts, and fresh fruit for a colorful, nutritious meal.</p>
            
            <h2>Meal Prep Tips</h2>
            <p>Prepare breakfast components in advance to save time during busy mornings. Pre-cut fruits, make overnight oats, or prepare smoothie ingredients in freezer bags.</p>
            
            <p>Remember, the best breakfast is one you'll actually eat. Choose options that fit your taste preferences and lifestyle while providing the nutrition your body needs.</p>
        `,
        related: [13, 1, 10]
    },
    13: {
        title: 'Plant-Based Cooking: Delicious Vegan Recipes',
        category: 'Food',
        date: '2025-05-25',
        readTime: '8 min read',
        author: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop',
        content: `
            <p>Plant-based cooking has evolved far beyond simple salads and steamed vegetables. Today's vegan cuisine is creative, flavorful, and satisfying, offering endless possibilities for delicious meals that are good for you and the planet.</p>
            
            <h2>The Benefits of Plant-Based Eating</h2>
            <p>Plant-based diets are associated with numerous health benefits, including reduced risk of heart disease, diabetes, and certain cancers. They're also more sustainable for the environment and often more budget-friendly.</p>
            
            <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop" alt="Vegan Cooking" class="article-image">
            
            <h2>Essential Plant-Based Ingredients</h2>
            <p>Stock your pantry with these versatile ingredients:</p>
            <ul>
                <li><strong>Legumes:</strong> Beans, lentils, and chickpeas provide protein and fiber</li>
                <li><strong>Whole Grains:</strong> Quinoa, brown rice, and oats offer complex carbohydrates</li>
                <li><strong>Nuts and Seeds:</strong> Almonds, chia seeds, and hemp hearts add healthy fats</li>
                <li><strong>Plant Proteins:</strong> Tofu, tempeh, and seitan provide meat alternatives</li>
            </ul>
            
            <h2>Delicious Vegan Recipe Ideas</h2>
            
            <h3>Hearty Buddha Bowl</h3>
            <p>Combine roasted vegetables, quinoa, chickpeas, and a tahini dressing for a colorful, nutrient-dense meal.</p>
            
            <h3>Creamy Cashew Pasta</h3>
            <p>Blend soaked cashews with nutritional yeast and herbs to create a rich, dairy-free pasta sauce.</p>
            
            <h3>Lentil Shepherd's Pie</h3>
            <p>Replace traditional meat with seasoned lentils and top with mashed sweet potatoes for a comforting classic.</p>
            
            <h3>Chocolate Avocado Mousse</h3>
            <p>Blend ripe avocados with cocoa powder and maple syrup for a decadent, healthy dessert.</p>
            
            <h2>Cooking Tips for Success</h2>
            <p>Focus on flavor by using herbs, spices, and umami-rich ingredients like mushrooms and miso. Don't be afraid to experiment with new ingredients and techniques.</p>
            
            <p>Remember, plant-based cooking is about abundance, not restriction. Embrace the variety of flavors and textures that plants have to offer!</p>
        `,
        related: [12, 1, 6]
    },
    3: {
        title: 'Accessory Essentials: Must-Have Pieces for Every Season',
        category: 'Fashion',
        date: '2025-01-20',
        readTime: '6 min read',
        author: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=400&fit=crop',
        content: `
            <p>Accessories are the secret weapon of every stylish wardrobe. They have the power to transform a simple outfit into a statement look, add personality to your style, and make you feel confident and put-together. From statement jewelry to versatile bags, these essential pieces will elevate your style throughout the year.</p>
            
            <h2>The Power of Accessories</h2>
            <p>Accessories are more than just decorative elements—they're the finishing touches that complete your look and express your personal style. A well-chosen accessory can take a basic outfit from ordinary to extraordinary, and the right pieces can work across multiple seasons and occasions.</p>
            
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" alt="Fashion Accessories" class="article-image">
            
            <h2>Essential Accessories for Every Wardrobe</h2>
            
            <h3>Statement Jewelry</h3>
            <p>Invest in a few key pieces that can be mixed and matched:</p>
            <ul>
                <li><strong>Classic Pearl Necklace:</strong> Timeless elegance that works for both casual and formal occasions</li>
                <li><strong>Gold Hoop Earrings:</strong> Versatile and flattering for any face shape</li>
                <li><strong>Delicate Chain Bracelet:</strong> Adds subtle sparkle to any outfit</li>
                <li><strong>Statement Ring:</strong> A bold piece that can become your signature accessory</li>
            </ul>
            
            <h3>Versatile Handbags</h3>
            <p>Choose bags that work for multiple occasions:</p>
            <ul>
                <li><strong>Structured Tote:</strong> Perfect for work and weekend errands</li>
                <li><strong>Crossbody Bag:</strong> Hands-free convenience for active days</li>
                <li><strong>Evening Clutch:</strong> Essential for special occasions</li>
                <li><strong>Backpack:</strong> Comfortable option for travel and casual outings</li>
            </ul>
            
            <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop" alt="Handbag Collection" class="article-image">
            
            <h3>Seasonal Staples</h3>
            <p>These accessories work year-round with seasonal adjustments:</p>
            
            <h4>Spring & Summer</h4>
            <ul>
                <li>Lightweight scarves in floral prints</li>
                <li>Straw hats for sun protection</li>
                <li>Colorful sunglasses</li>
                <li>Lightweight cardigans</li>
            </ul>
            
            <h4>Fall & Winter</h4>
            <ul>
                <li>Wool scarves in neutral tones</li>
                <li>Leather gloves</li>
                <li>Warm beanies</li>
                <li>Cozy wraps and shawls</li>
            </ul>
            
            <h2>Building Your Accessory Collection</h2>
            
            <h3>Start with Basics</h3>
            <p>Begin with neutral colors and classic styles that can be mixed and matched. A black leather handbag, gold jewelry, and a neutral scarf will work with almost everything in your wardrobe.</p>
            
            <h3>Add Statement Pieces</h3>
            <p>Once you have the basics, add a few bold pieces that reflect your personality. These can be seasonal or trend-based, but choose items you'll actually wear.</p>
            
            <h3>Quality Over Quantity</h3>
            <p>It's better to have a few high-quality accessories than many cheap ones. Well-made pieces will last longer and look better over time.</p>
            
            <h2>Styling Tips</h2>
            <ul>
                <li><strong>Balance is Key:</strong> If you're wearing a statement necklace, keep earrings simple</li>
                <li><strong>Color Coordination:</strong> Choose accessories that complement your outfit's color palette</li>
                <li><strong>Proportion Matters:</strong> Larger accessories work better with simpler outfits</li>
                <li><strong>Personal Style:</strong> Choose pieces that make you feel confident and authentic</li>
            </ul>
            
            <p>Remember, accessories should enhance your natural beauty and personal style, not overwhelm it. Start with a few key pieces and gradually build your collection as you discover what works best for you.</p>
        `,
        related: [1, 2, 6]
    }
};

// Initialize article page
function initArticlePage(articleId) {
    const articleContent = document.getElementById('articleContent');
    const article = articleData[articleId];
    
    if (article) {
        articleContent.innerHTML = `
            <article class="article">
                <div class="article-header">
                    <div class="article-meta">
                        <span class="article-category">${article.category}</span>
                        <span class="article-date">${formatDate(article.date)}</span>
                        <span class="article-read-time">${article.readTime}</span>
                    </div>
                    <h1 class="article-title">${article.title}</h1>
                    <div class="article-image">
                        <img src="${article.image}" alt="${article.title}" loading="lazy">
                    </div>
                </div>
                <div class="article-body">
                    ${article.content}
                </div>
            </article>
        `;
        
        // Update page title
        document.title = `${article.title} - VogueNest`;
    } else {
        articleContent.innerHTML = `
            <div class="error-message" style="text-align: center; padding: 2rem; background: var(--white); border-radius: var(--radius-lg); box-shadow: 0 4px 20px var(--shadow);">
                <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Article Not Found</h2>
                <p style="color: var(--text-secondary); margin-bottom: 2rem;">The article you're looking for doesn't exist.</p>
                <a href="index.html" class="cta-btn" style="display: inline-block; background: var(--primary-color); color: var(--white); padding: 0.75rem 1.5rem; border-radius: var(--radius-lg); text-decoration: none; font-weight: 600;">Back to Home</a>
            </div>
        `;
    }
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

// Initialize article actions
function initArticleActions() {
    const likeBtn = document.getElementById('likeBtn');
    const shareBtn = document.getElementById('shareBtn');
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    
    // Like functionality
    likeBtn.addEventListener('click', function() {
        this.classList.toggle('liked');
        const icon = this.querySelector('i');
        const count = this.querySelector('span');
        
        if (this.classList.contains('liked')) {
            icon.className = 'fas fa-heart';
            count.textContent = parseInt(count.textContent) + 1;
            showNotification('Added to favorites!', 'success');
        } else {
            icon.className = 'far fa-heart';
            count.textContent = parseInt(count.textContent) - 1;
            showNotification('Removed from favorites', 'info');
        }
    });
    
    // Share functionality
    shareBtn.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            showNotification('Link copied to clipboard!', 'success');
        }
    });
    
    // Bookmark functionality
    bookmarkBtn.addEventListener('click', function() {
        this.classList.toggle('bookmarked');
        const icon = this.querySelector('i');
        
        if (this.classList.contains('bookmarked')) {
            icon.className = 'fas fa-bookmark';
            showNotification('Article saved!', 'success');
        } else {
            icon.className = 'far fa-bookmark';
            showNotification('Article unsaved', 'info');
        }
    });
}

// Initialize comments
function initComments() {
    const commentForm = document.querySelector('.comment-form');
    const commentLikes = document.querySelectorAll('.comment-like');
    
    // Comment form submission
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const textarea = this.querySelector('textarea');
            const comment = textarea.value.trim();
            
            if (comment) {
                addComment(comment);
                textarea.value = '';
                showNotification('Comment posted!', 'success');
            }
        });
    }
    
    // Comment likes
    commentLikes.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('liked');
            const icon = this.querySelector('i');
            const count = this.textContent;
            
            if (this.classList.contains('liked')) {
                icon.className = 'fas fa-heart';
                this.innerHTML = `<i class="fas fa-heart"></i> ${parseInt(count) + 1}`;
            } else {
                icon.className = 'far fa-heart';
                this.innerHTML = `<i class="far fa-heart"></i> ${parseInt(count) - 1}`;
            }
        });
    });
}

// Add new comment
function addComment(comment) {
    const commentsList = document.querySelector('.comments-list');
    const newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.innerHTML = `
        <div class="comment-avatar">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="User">
        </div>
        <div class="comment-content">
            <div class="comment-header">
                <h4>You</h4>
                <span class="comment-date">Just now</span>
            </div>
            <p>${comment}</p>
            <div class="comment-actions">
                <button class="comment-like"><i class="far fa-heart"></i> 0</button>
                <button class="comment-reply">Reply</button>
            </div>
        </div>
    `;
    
    commentsList.appendChild(newComment);
    
    // Add event listeners to new comment
    const likeBtn = newComment.querySelector('.comment-like');
    likeBtn.addEventListener('click', function() {
        this.classList.toggle('liked');
        const icon = this.querySelector('i');
        const count = this.textContent;
        
        if (this.classList.contains('liked')) {
            icon.className = 'fas fa-heart';
            this.innerHTML = `<i class="fas fa-heart"></i> ${parseInt(count) + 1}`;
        } else {
            icon.className = 'far fa-heart';
            this.innerHTML = `<i class="far fa-heart"></i> ${parseInt(count) - 1}`;
        }
    });
}

// Initialize related articles
function initRelatedArticles(articleId) {
    const relatedGrid = document.getElementById('relatedGrid');
    const article = articleData[articleId];
    
    if (article && article.related) {
        const relatedArticles = article.related.map(id => {
            const relatedArticle = articleData[id];
            if (relatedArticle) {
                return `
                    <article class="related-card">
                        <div class="related-image">
                            <img src="${relatedArticle.image}" alt="${relatedArticle.title}" loading="lazy">
                        </div>
                        <div class="related-content">
                            <h3><a href="article.html?id=${id}">${relatedArticle.title}</a></h3>
                            <div class="related-meta">
                                <span class="related-date">${formatDate(relatedArticle.date)}</span>
                                <span class="related-read-time">${relatedArticle.readTime}</span>
                            </div>
                        </div>
                    </article>
                `;
            }
            return '';
        }).filter(Boolean).join('');
        
        relatedGrid.innerHTML = relatedArticles;
        
        // Add click handlers for related articles
        const relatedCards = document.querySelectorAll('.related-card');
        relatedCards.forEach(card => {
            card.addEventListener('click', function() {
                const link = this.querySelector('a');
                if (link) {
                    window.location.href = link.href;
                }
            });
        });
    }
}

// Show notification
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    const colors = {
        success: '#4CAF50',
        error: '#f44336',
        info: '#2196F3',
        warning: '#FF9800'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
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
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}
