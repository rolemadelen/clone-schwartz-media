import '../styles/style.scss';
'use strict';

const imgSlideshow =  document.querySelector('img#image-slideshow');
const images = ['carousel_tm_1.jpg', 'carousel_tm_2.jpg', 'carousel_tm_3.jpg']
const imgPath = "./assets/images/";
let imgPosition = 0;

function imageSlideshow() {
    setInterval(() => {
        if (imgPosition >= images.length) {
            imgPosition = 0;
        }
    
        imgSlideshow.src = imgPath + images[imgPosition];
        ++imgPosition;
        console.log(imgPosition);
    }, 3500);
}

// document.onload = imageSlideshow();
