document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.model-track');
    const items = document.querySelectorAll('.model-item');
    const slideWidth = items[0].clientWidth;
  
    let index = 0;
  
    function slideNext() {
      index++;
      if (index > items.length - 1) {
        index = 0;
      }
      updateSlide();
    }
  
    function slidePrev() {
      index--;
      if (index < 0) {
        index = items.length - 1;
      }
      updateSlide();
    }
  
    function updateSlide() {
      const offset = -index * slideWidth;
      track.style.transform = `translateX(${offset}px)`;
    }
  
    const nextBtn = document.querySelector('.model-next');
    const prevBtn = document.querySelector('.model-prev');
  
    nextBtn.addEventListener('click', slideNext);
    prevBtn.addEventListener('click', slidePrev);
  });
