
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in-text');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the element is visible
    });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });
