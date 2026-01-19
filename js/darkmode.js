
function toggleTheme() {
    const themeLink = document.getElementById('theme');
    if (themeLink.href.includes('dark.css')) {
        themeLink.href = './resources/css/style.css';
    } else {
        themeLink.href = './resources/css/dark.css';
    }
}   