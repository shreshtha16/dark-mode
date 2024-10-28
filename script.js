function toggleMode() {
    const body = document.body;
    const toggle = document.querySelector('.toggle');
    const icon = document.querySelector('.circle img');
    
    // Toggle dark and light mode classes on body and toggle
    body.classList.toggle('dark');
    toggle.classList.toggle('dark');
    
    // Change icon based on the mode
    if (body.classList.contains('dark')) {
        icon.src = 'moon.png'; // Switch to moon icon for dark mode
    } else {
        icon.src = 'sun.png'; // Switch to sun icon for light mode
    }
}
