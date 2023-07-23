const closeArrows = document.querySelectorAll('.close-arrow');

const headerElements = document.querySelectorAll('.heading'); // Select all header elements

headerElements.forEach(header => {
    const h2 = header.querySelector('h2');
    const content = header.querySelector('.content'); // Assuming .content is inside the .header element

    h2.addEventListener('click', () => {
        // Check if the content is visible
        const isVisible = content.classList.contains('visible');
        
        // If the content is not visible, add the 'visible' class
        if (!isVisible) {
            content.classList.add('visible');
        }

        // Listen for the 'transitionend' event
        const handleTransitionEnd = () => {
            // Remove the event listener after the transition is completed
            content.removeEventListener('transitionend', handleTransitionEnd);

            // Scroll to the top of the h2 element when clicked on
            h2.scrollIntoView({ behavior: 'smooth' });
        };

        // Add the 'transitionend' event listener
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