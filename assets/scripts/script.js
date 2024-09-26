const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const toggleTheme = (isDarkMode) => {
    if (isDarkMode) {
        // change to dark more
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

const changeImage = (imagecolor) => {
    image1.src = `/assets/images/undraw_proud_coder_${imagecolor}.svg`;
    image2.src = `/assets/images/undraw_feeling_proud_${imagecolor}.svg`;
    image3.src = `/assets/images/undraw_conceptual_idea_${imagecolor}.svg`;
}

// switch theme here
const switchTheme = (event) => {
    var isDarkMode = event.target.checked;
    console.log('change theme here: ', event.target.checked);
    toggleTheme(isDarkMode);
    nav.classList.remove('dark-mode');
    textBox.classList.remove('dark-mode');
    if (isDarkMode) {
        nav.classList.add('dark-mode');
        textBox.classList.add('dark-mode');
        toggleIcon.children[0].textContent = "Dark Mode";
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
        changeImage('dark');
    } else {
        toggleIcon.children[0].textContent = "Light Mode";
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
        changeImage('light');
    }
}
// toggle switch change event
toggleSwitch.addEventListener('change', switchTheme);