export function applySavedTheme() {
  const saved = localStorage.getItem('theme');

  if (saved) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(saved);
  } else {
    document.body.classList.add('light-mode');
  }
}
