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

    // adding img div
    var imgContainer = document.createElement("img");
    imgContainer.src = imgArray[i]

    // setting childs
    parent.appendChild(child);
    child.appendChild(imgContainer);
    
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
        
        // if (activeImg === imgArray.length -1){
        //     next.classList.add('display_none');
        // }
        // else if (activeImg < 4){
        //     next.classList.remove('display_none');
        // }
        
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

        // if (activeImg > 0){

        //     thumbnails[activeImg].classList.remove('thumb_active');

        //     activeImg--;
        // }
    })