// Get all gallery items and filter buttons
const galleryItems = document.querySelectorAll('.gallery-item');
const filterButtons = document.querySelectorAll('.filter-button');
const modal = document.querySelector('.gallery-modal');
const modalImage = document.querySelector('.modal-content img');
const modalClose = document.querySelector('.close-modal');

// Filter gallery items by category
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;

        // Show/hide items based on category
        galleryItems.forEach(item => {
            if (category === 'all' || item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        // Highlight the active filter button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Open modal when a gallery item is clicked
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        modalImage.src = imgSrc;
        modal.style.display = 'flex';
    });
});

// Close modal when clicking the close button or outside the modal content
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
