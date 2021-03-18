const menu = [... document.querySelectorAll('.fas')];


menu.forEach(single => {
    single.addEventListener('click', () => {
        document.querySelector('header').classList.toggle('active');
    })
})