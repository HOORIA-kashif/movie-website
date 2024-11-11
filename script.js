// swiper js
var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
       280:{
        slidesPerView:1,
        spaceBetween: 10,
       },
       320:{
        slidesPerView:2,
        spaceBetween: 10,
       },
       510:{
        slidesPerView:2,
        spaceBetween: 10,
       },
       758:{
        slidesPerView:3,
        spaceBetween: 15,
       },
       900:{
        slidesPerView:4,
        spaceBetween: 20,
       },


    },
  });

  // video js

  // Get elements
const watchBtn = document.querySelector('.watch-btn');
const videoContainer = document.querySelector('.video-container');
const closeBtn = document.querySelector('.close-video');
const video = document.querySelector('#myvideo');

// Show video when 'Watch the Trailer' button is clicked
watchBtn.addEventListener('click', () => {
    videoContainer.style.display = 'flex';
    video.play(); // Start playing the video automatically
});

// Close video when 'X' button is clicked
closeBtn.addEventListener('click', () => {
    videoContainer.style.display = 'none';
    video.pause(); // Pause the video
    video.currentTime = 0; // Reset video to the start
});


