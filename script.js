// Sample data for blog posts (you can replace this with your content)
const blogData = [
    {
        title: "Exploring the Enchanting Forests",
        image: "a.jpg",
        content: "Dive into the enchanting world of forests, where sunlight dances through the lush canopy, creating a magical play of light and shadow. Ancient trees, draped in moss, stand as guardians of nature's secrets. As you wander along the mossy paths, the air is filled with the sweet fragrance of wildflowers, and the symphony of rustling leaves serenades you. These enchanted realms are not just landscapes; they are captivating tales waiting to unfold, inviting you to immerse yourself in the timeless allure of the forest's charm."        
    },
    {
        title: "Sunset Views from the Mountain Tops",
        image: "a.jpg",
        content: "Discover the spellbinding charm of sunset views from mountain tops, where the sun's descent paints the sky in a breathtaking symphony of warm hues. As the rugged peaks are bathed in the soft glow of twilight, witness a captivating transition from day to night. Standing at the summit, you'll be captivated by the awe-inspiring beauty that unfolds on the horizon, leaving an indelible mark on your soul. It's a moment of pure magic, where nature's grand finale takes center stage against the silhouette of majestic mountains."
    },
    // Add more blog posts as needed
];

// Function to dynamically generate blog posts
function generateBlogPosts() {
    const blogContainer = document.getElementById("blog");

    blogData.forEach((post) => {
        const article = document.createElement("article");
        article.classList.add("article");  // Add the 'article' class
        article.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        blogContainer.appendChild(article);
    });
}

// Call the function to generate blog posts when the page loads
document.addEventListener("DOMContentLoaded", generateBlogPosts);

// Function to update scroll progress
function updateScrollProgress() {
    const scrollProgress = document.getElementById("scrollProgress");
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.scrollY;
    const progress = (scrollTop / scrollHeight) * 100;

    scrollProgress.style.width = progress + "%";
}

// Update scroll progress on scroll
document.addEventListener("scroll", updateScrollProgress);

// Update scroll progress on page load
document.addEventListener("DOMContentLoaded", updateScrollProgress);

