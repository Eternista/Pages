const menu = [... document.querySelectorAll('.menuBtn')];


menu.forEach(single => {
    single.addEventListener('click', () => {
        document.querySelector('header').classList.toggle('active');
    })
})