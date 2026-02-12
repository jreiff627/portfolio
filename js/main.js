// Optional JS for smooth scroll highlighting, animations, etc.
// For now, this is a placeholder.

console.log("Portfolio loaded successfully!");

// You can add:
// - Navbar highlight on scroll
// - Fade-in animations
// - Interactive project cards
function scrollProjects(distance) {
    const container = document.querySelector('.project-list');
    container.scrollBy({ left: distance, behavior: 'smooth' });
}
