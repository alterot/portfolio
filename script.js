const closeArrows = document.querySelectorAll('.close-arrow');
const headers = document.querySelectorAll('.heading');

headers.forEach(header => {
    const h2 = header.querySelector('h2');
    const content = header.querySelector('.content');

    h2.addEventListener('click', () => {
        const isVisible = content.classList.contains('visible');

        if (!isVisible) {
            content.classList.add('visible');
        } else {
            content.classList.remove('visible');
        }

        const handleTransitionEnd = () => {
            content.removeEventListener('transitionend', handleTransitionEnd);
            h2.scrollIntoView({ behavior: 'smooth' });
        };

        content.addEventListener('transitionend', handleTransitionEnd);
    });
});

closeArrows.forEach(closeArrow => {
  closeArrow.addEventListener('click', () => {
    document.querySelectorAll('.content').forEach(item => {
      item.classList.remove('visible');
    });
  });
});

const boo = document.getElementById('boo');
const squeak = document.getElementById('squeak');

boo.addEventListener('click', () => {
  squeak.currentTime = 0;
  squeak.play();
})