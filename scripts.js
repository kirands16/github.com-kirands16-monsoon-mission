document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Chart.js visualization for ISMR trends
  const ctx = document.getElementById('ismrChart')?.getContext('2d');
  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2000', '2005', '2010', '2015', '2020'],
        datasets: [{
          label: 'ISMR Anomaly (mm/day)',
          data: [0.2, -0.1, 0.3, -0.2, 0.4],
          borderColor: '#1e3a8a',
          backgroundColor: 'rgba(30, 58, 138, 0.2)',
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Indian Summer Monsoon Rainfall Anomaly (2000–2020)'
          }
        },
        scales: {
          y: { title: { display: true, text: 'Anomaly (mm/day)' } },
          x: { title: { display: true, text: 'Year' } }
        }
      }
    });
  }
});
