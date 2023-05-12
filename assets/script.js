document.addEventListener('DOMContentLoaded', function () {
    let navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        let navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      });
    });
  });
