document.addEventListener('DOMContentLoaded', () => {
    const numDots = 50;
    const body = document.body;

    const createDot = (size, duration, delay) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.top = `${Math.random() * 170}vh`;
        dot.style.left = `${Math.random() * 100}vw`;
        dot.style.animationDuration = `${duration}s`;
        dot.style.animationDelay = `${delay}s`;
        body.appendChild(dot);

        return dot;
    };

    const dots = [];
    for (let i = 0; i < numDots; i++) {
        const size = Math.random() * 20 + 10;
        const duration = Math.random() * 50 + 20;
        const delay = Math.random() * 0;
        const dot = createDot(size, duration, delay);
        dots.push(dot);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var scrollArrow = document.querySelector('.scroll-arrow');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { 
            scrollArrow.classList.add('show');
        } else {
            scrollArrow.classList.remove('show');
        }
    });

    scrollArrow.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
