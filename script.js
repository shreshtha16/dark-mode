function toggleMode() {
    const body = document.body;
    const toggle = document.querySelector('.toggle');
    const icon = document.querySelector('.circle img');
    

    body.classList.toggle('dark');
    toggle.classList.toggle('dark');
    

    if (body.classList.contains('dark')) {
        icon.src = 'moon.png';
    } else {
        icon.src = 'sun.png';
    }
}
