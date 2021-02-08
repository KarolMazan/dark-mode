let isDark = false;

const switchMode = document.querySelector('.mode--js');

switchMode.addEventListener('click', () => {
    if (isDark) {
        document.documentElement.style.setProperty('--background-color', 'rgb(241, 236, 236)')
        document.documentElement.style.setProperty('--text-color', 'rgb(14, 13, 13)')
        isDark = false;
    } else {
        document.documentElement.style.setProperty('--background-color', 'rgb(14, 13, 13)')
        document.documentElement.style.setProperty('--text-color', 'rgb(241, 236, 236)')
        isDark = true;
    }
})