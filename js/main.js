// Array with images
let imgArray = new Array();

    imgArray[0] = 'img/01.webp';

    imgArray[1] = 'img/02.webp';

    imgArray[2] = 'img/03.webp';

    imgArray[3] = 'img/04.webp';

    imgArray[4] = 'img/05.webp';

console.log(imgArray)
console.log(imgArray.length)
// post array items
for(let i = 0; i < imgArray.length; i++){
    // List array items
    console.log(imgArray[i]);

    // adding div carousel_item to image_carousel
    var parent = document.getElementById('image_carousel');
    var child = document.createElement("div");
    child.className = "carousel_item";

    var parent2 = document.getElementById('thumbnails');
    var child2 = document.createElement("div");
    child2.className = "thumb";
    

    // adding img div
    var imgContainer = document.createElement("img");
    imgContainer.src = imgArray[i];

    var thumbContainer = document.createElement("img");
    thumbContainer.src = imgArray[i];

    // setting childs
    parent.appendChild(child);
    child.appendChild(imgContainer);

    parent2.appendChild(child2);
    child2.appendChild(thumbContainer)
    
}

let activeImg = 0;


const thumbnails = document.getElementsByClassName('thumb');
thumbnails[activeImg].classList.add('thumb_active');

console.log(thumbnails);


const carouselItem = document.getElementsByClassName('carousel_item');
carouselItem[activeImg].classList.add('active');


const next = document.getElementById('next_button');
    next.addEventListener('click', function() {

        if (activeImg < imgArray.length -1){

            thumbnails[activeImg].classList.remove('thumb_active');

            activeImg++;

            carouselItem[activeImg].classList.add('active');
            thumbnails[activeImg].classList.add('thumb_active');

            // Contatore immagine
            console.log("n immagine", activeImg);
            console.log("n array", imgArray.length);

        }
        else if (activeImg == 4){
            thumbnails[activeImg].classList.remove('thumb_active');
            carouselItem[activeImg].classList.remove('active');
            activeImg = 3;
            thumbnails[activeImg].classList.remove('thumb_active');
            carouselItem[activeImg].classList.remove('active');
            activeImg = 2;
            thumbnails[activeImg].classList.remove('thumb_active');
            carouselItem[activeImg].classList.remove('active');
            activeImg = 1;
            thumbnails[activeImg].classList.remove('thumb_active');
            carouselItem[activeImg].classList.remove('active');
            activeImg = 0;
            carouselItem[activeImg].classList.add('active');
            thumbnails[activeImg].classList.add('thumb_active');
            console.log("n immagine", activeImg);
        }

    })

const back = document.getElementById('back_button');
    back.addEventListener('click', function() {

        if (activeImg > 0){

            carouselItem[activeImg].classList.remove('active');
            thumbnails[activeImg].classList.remove('thumb_active');

            activeImg--;

            thumbnails[activeImg].classList.add('thumb_active');

            // Contatore immagine
            console.log("n immagine", activeImg);
            console.log("n array", imgArray.length);

        }
        else if (activeImg == 0){
            thumbnails[activeImg].classList.remove('thumb_active');
            carouselItem[activeImg].classList.remove('active');
            carouselItem[activeImg].classList.add('active');
            activeImg = 1;
            carouselItem[activeImg].classList.remove('active');
            carouselItem[activeImg].classList.add('active');
            activeImg = 2;
            carouselItem[activeImg].classList.remove('active');
            carouselItem[activeImg].classList.add('active');
            activeImg = 3;
            carouselItem[activeImg].classList.remove('active');
            carouselItem[activeImg].classList.add('active');
            activeImg = 4;
            carouselItem[activeImg].classList.add('active');
            thumbnails[activeImg].classList.add('thumb_active');
            console.log("n immagine", activeImg);
        }

    })