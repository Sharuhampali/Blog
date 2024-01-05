// Sample data for blog posts (you can replace this with your content)
const blogData = [
    {
        title: "Exploring the Enchanting Forests",
        image: "a.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        
    },
    {
        title: "Sunset Views from the Mountain Tops",
        image: "a.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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

