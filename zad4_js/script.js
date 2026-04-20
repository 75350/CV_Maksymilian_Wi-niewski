// 1. ZMIANA MOTYWU
const btnTheme = document.getElementById('btn-theme');
const themeStyle = document.getElementById('theme-style');

btnTheme.addEventListener('click', function() {
    if (themeStyle.getAttribute('href') === 'red.css') {
        themeStyle.setAttribute('href', 'green.css');
        btnTheme.innerText = 'Zmień motyw na Czerwony';
    } else {
        themeStyle.setAttribute('href', 'red.css');
        btnTheme.innerText = 'Zmień motyw na Zielony';
    }
});

// 2. UKRYWANIE SEKCJI
const btnSection = document.getElementById('btn-section');
const sectionToHide = document.getElementById('umiejetnosci');

btnSection.addEventListener('click', function() {
    if (sectionToHide.style.display !== 'none') {
        sectionToHide.style.display = 'none';
        btnSection.innerText = 'Pokaż Umiejętności';
    } else {
        sectionToHide.style.display = 'block';
        btnSection.innerText = 'Ukryj Umiejętności';
    }
});