const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const currentTheme = localStorage.getItem('theme');
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
const DARK_MODE = 'dark-mode';

console.log({ currentTheme });

const toggleTheme = (isDarkMode) => {
    var themeColor = isDarkMode ? DARK_THEME : LIGHT_THEME;
    nav.classList.remove(DARK_MODE);
    textBox.classList.remove(DARK_MODE);
    document.documentElement.setAttribute('data-theme', themeColor);
    toggleIcon.children[0].textContent = isDarkMode ? "Dark Mode" : "Light Mode";
    changeImage(themeColor);
    if (isDarkMode) {
        // change to dark theme
        nav.classList.add(DARK_MODE);
        textBox.classList.add(DARK_MODE);
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    } else {
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    }
    localStorage.setItem('theme', themeColor);
}

const changeImage = (imagecolor) => {
    image1.src = `/assets/images/undraw_proud_coder_${imagecolor}.svg`;
    image2.src = `/assets/images/undraw_feeling_proud_${imagecolor}.svg`;
    image3.src = `/assets/images/undraw_conceptual_idea_${imagecolor}.svg`;
}

// switch theme here
const switchTheme = (event) => {
    console.log('change theme here: ', event.target.checked);
    toggleTheme(event.target.checked);
}

const loadThemeColor = () => {
    if (!currentTheme) {
        currentTheme = LIGHT_THEME;
    }
    var isDarkMode = currentTheme == DARK_THEME;
    toggleSwitch.checked = isDarkMode;
    toggleTheme(isDarkMode);
}
// toggle switch change event
toggleSwitch.addEventListener('change', switchTheme);
loadThemeColor();