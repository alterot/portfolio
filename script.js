const headings = document.querySelectorAll('.heading');
const closeArrows = document.querySelectorAll('.close-arrow');

headings.forEach(heading => {
  const h2 = heading.querySelector('h2');
  const content = heading.querySelector('.content');

  h2.addEventListener('click', () => {
    document.querySelectorAll('.content').forEach(item => {
    content.classList.toggle('visible');
    });
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