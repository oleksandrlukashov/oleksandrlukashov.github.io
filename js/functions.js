// functions.js

// Toggle light/dark mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    
    // Save the current theme in localStorage so it persists after page reload
    localStorage.setItem('theme', currentMode);
  }
  
  // On page load, check the saved theme in localStorage
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
    
    // Add event listener for the toggle button
    const toggleBtn = document.getElementById('theme-toggle-btn');
    toggleBtn.addEventListener('click', toggleTheme);
  });
  