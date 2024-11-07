// Smooth scrolling for internal navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Display service details based on URL parameters (for the service-detail page)
const urlParams = new URLSearchParams(window.location.search);
const serviceName = urlParams.get('service');

if (serviceName && document.getElementById('service-title')) {
    document.getElementById('service-title').innerText = serviceName.replace(/-/g, ' ');
    document.getElementById('service-description').innerText = `Detailed information about ${serviceName} goes here.`;
}
