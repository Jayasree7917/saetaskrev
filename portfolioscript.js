const themeToggleBtn = document.getElementById('theme-toggle-btn');

themeToggleBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');

  const isDarkTheme = document.body.classList.contains('dark-theme');
  localStorage.setItem('dark-theme-preference', isDarkTheme);
});

window.addEventListener('load', function() {
  const isDarkTheme = localStorage.getItem('dark-theme-preference') === 'true';
  
  if (isDarkTheme) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
});
