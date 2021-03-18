const slider = document.querySelector('.slider');
const slide = [... document.querySelectorAll('.slide')];

slide.forEach(single => {
    let num = single.children[0].alt;
    const nextSlide = () => {
        single.classList.remove('active');
        num++;
        if(num === slide.length) {
            num = 0;
        }
        if(num === 2) {
            single.classList.add('active');
            document.querySelector('.nameUser').textContent = single.children[1].textContent;
            document.querySelector('.jobUser').textContent = single.children[2].textContent;
        }
        single.style.order = num;
    }

    const prevSlide = () => {
        single.classList.remove('active');
        num--;
        if(num === -1) {
            num = slide.length - 1;
        }
        if(num === 2) {
            single.classList.add('active');
            document.querySelector('.nameUser').textContent = single.children[1].textContent;
            document.querySelector('.jobUser').textContent = single.children[2].textContent;
        }
        single.style.order = num;
    }

    document.querySelector('.fa-chevron-right').addEventListener('click', nextSlide);
    document.querySelector('.fa-chevron-left').addEventListener('click', prevSlide);
})