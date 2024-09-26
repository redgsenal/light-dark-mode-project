const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const currentTheme = localStorage.getItem('theme');
console.log({ currentTheme });

const toggleTheme = (isDarkMode) => {
    var themeColor = isDarkMode ? 'dark' : 'light';
    nav.classList.remove('dark-mode');
    textBox.classList.remove('dark-mode');
    if (isDarkMode) {
        // change to dark theme
        document.documentElement.setAttribute('data-theme', 'dark');
        nav.classList.add('dark-mode');
        textBox.classList.add('dark-mode');
        toggleIcon.children[0].textContent = "Dark Mode";
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
        changeImage('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleIcon.children[0].textContent = "Light Mode";
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
        changeImage('light');
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
    var isDarkMode = event.target.checked;
    toggleTheme(isDarkMode);
}

const loadThemeColor = () => {
    if (!currentTheme) {
        currentTheme = 'light';
    }
    var isDarkMode = currentTheme == 'dark';
    toggleSwitch.checked = isDarkMode;
    toggleTheme(isDarkMode);
}
// toggle switch change event
toggleSwitch.addEventListener('change', switchTheme);
loadThemeColor();