document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) { // Show button after scrolling 300px
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        toggleVisibility(); // Call on load to set initial state

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
  // Chart 1: Funding Sources Comparison
  new Chart(document.getElementById('costBreakdownChart'), {
    type: 'pie',
    data: {
      labels: ['Government Funding (Public)', 'Tuition & Donations (Private)'],
      datasets: [{
        data: [80, 20], // Conceptual data: 80% public, 20% private funding sources
        backgroundColor: ['#4a90e2', '#f5a623']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: true, text: 'Conceptual Funding Sources for Education' }
      }
    }
  });

  // Chart 2: Average Class Size Comparison
  new Chart(document.getElementById('locationChart'), {
    type: 'bar',
    data: {
      labels: ['Public Schools', 'Private Schools'],
      datasets: [{
        label: 'Average Class Size',
        data: [25, 15], // Conceptual data
        backgroundColor: ['#4a90e2', '#50e3c2']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: { display: true, text: 'Average Class Size Comparison' }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Number of Students' }
        }
      }
    }
  });

  // Chart 3: Extracurricular Offerings (Conceptual)
  new Chart(document.getElementById('incomeChart'), {
    type: 'radar',
    data: {
      labels: ['Sports', 'Arts', 'Clubs', 'Academic Support', 'Technology'],
      datasets: [
        {
          label: 'Public School Offerings',
          data: [4, 3, 5, 4, 3], // Conceptual scale 1-5
          backgroundColor: 'rgba(74, 144, 226, 0.2)',
          borderColor: '#4a90e2',
          pointBackgroundColor: '#4a90e2'
        },
        {
          label: 'Private School Offerings',
          data: [5, 5, 4, 5, 4], // Conceptual scale 1-5
          backgroundColor: 'rgba(80, 227, 194, 0.2)',
          borderColor: '#50e3c2',
          pointBackgroundColor: '#50e3c2'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: { display: true, text: 'Extracurricular Offerings Comparison (Conceptual)' }
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 5
        }
      }
    }
  });
});