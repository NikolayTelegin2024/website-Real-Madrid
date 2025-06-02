function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Обновляем иконку
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = newTheme === 'dark' ? '🌞' : '🌙';
}

// Инициализация темы при загрузке
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = savedTheme === 'dark' ? '🌞' : '🌙';
    
    // Добавляем обработчик события
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);
}

// Вызываем инициализацию темы при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    // Остальной существующий код...
});
function createTooltip(img) {
    const altText = img.alt;
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = altText;
    img.parentNode.appendChild(tooltip);
  
    const tooltipRect = tooltip.getBoundingClientRect();
    const tooltipWidth = tooltipRect.width;
    const tooltipHeight = tooltipRect.height;
  
    const imgRect = img.getBoundingClientRect();
    const x = imgRect.left + imgRect.width / 2;
    const y = imgRect.bottom + window.pageYOffset; 
  
    let left = x - tooltipWidth / 2;
    let top = y + 10;
  
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
  
    if (left < 0) left = 0;
    if (left + tooltipWidth > windowWidth) left = windowWidth - tooltipWidth;
    if (top + tooltipHeight > windowHeight) top = y - tooltipHeight - 10;
  
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  }
  
  function removeTooltip(img) {
    const tooltip = img.parentNode.querySelector('.tooltip');
    if (tooltip) {
      img.parentNode.removeChild(tooltip);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-container img');
    images.forEach(img => {
      img.addEventListener('mouseover', () => createTooltip(img));
      img.addEventListener('mouseout', () => removeTooltip(img));
    });
  });