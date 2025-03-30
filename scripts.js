// Futuristic Netflix Clone - Interactive Effects

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    // Set initial dark mode based on preference
    checkSystemDarkModePreference();

    // Navbar Scroll Effect
    window.addEventListener('scroll', handleNavbarScroll);

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', handleParallaxEffect);

    // 3D Card Hover Effects
    setupContentCardInteractions();
});

// Dark Mode Functions
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    darkModeToggle.classList.toggle('active');
}

function checkSystemDarkModePreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        const darkModeToggle = document.querySelector('.dark-mode-toggle');
        darkModeToggle.classList.add('active');
    }
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Parallax Effect for Hero Section
function handleParallaxEffect() {
    const hero = document.querySelector('.hero-bg');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
}

// 3D Card Hover Effects
function setupContentCardInteractions() {
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.5s ease';
            card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    });
}