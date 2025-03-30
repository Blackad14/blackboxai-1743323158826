// Sample data for the Netflix clone
const contentData = [
    {
        id: 1,
        title: "Stranger Things",
        category: "Sci-Fi & Fantasy",
        image: "https://image.tmdb.org/t/p/w500/x49FVwmZIXDwlLfdzOopX3y7YmM.jpg",
        type: "series"
    },
    {
        id: 2,
        title: "The Witcher",
        category: "Fantasy",
        image: "https://image.tmdb.org/t/p/w500/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg",
        type: "series"
    },
    {
        id: 3,
        title: "Extraction",
        category: "Action",
        image: "https://image.tmdb.org/t/p/w500/3pHG9l0lTfBmN9Z2QS1r3qKWNoB.jpg",
        type: "movie"
    },
    {
        id: 4,
        title: "Money Heist",
        category: "Crime",
        image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
        type: "series"
    },
    {
        id: 5,
        title: "The Queen's Gambit",
        category: "Drama",
        image: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
        type: "series"
    },
    {
        id: 6,
        title: "Bird Box",
        category: "Thriller",
        image: "https://image.tmdb.org/t/p/w500/rGfGfgL2pEGCk6KeUeQYlQuv3IS.jpg",
        type: "movie"
    }
];

// Function to load content into the page
function loadContent() {
    const contentSection = document.querySelector('.grid');
    
    contentData.forEach(item => {
        const contentCard = document.createElement('div');
        contentCard.className = 'relative group';
        contentCard.innerHTML = `
            <div class="h-40 bg-gray-800 rounded overflow-hidden">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
            <p class="mt-2 text-sm truncate">${item.title}</p>
        `;
        contentSection.appendChild(contentCard);
    });
}

// Initialize the page when loaded
document.addEventListener('DOMContentLoaded', () => {
    loadContent();
    
    // Add event listeners for navigation
    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', () => {
            alert('This feature would be implemented in a full version');
        });
    });
});