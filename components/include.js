// Dynamically load header and footer components
document.addEventListener('DOMContentLoaded', function() {
  // Load header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    fetch('components/header.html')
      .then(response => response.text())
      .then(html => {
        headerPlaceholder.innerHTML = html;
        // Re-initialize Bootstrap components after inserting header
        if (typeof bootstrap !== 'undefined') {
          document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(el => {
            new bootstrap.Collapse(el, { toggle: false });
          });
        }
      })
      .catch(err => console.error('Error loading header:', err));
  }

  // Load footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    fetch('components/footer.html')
      .then(response => response.text())
      .then(html => {
        footerPlaceholder.innerHTML = html;
      })
      .catch(err => console.error('Error loading footer:', err));
  }
});
