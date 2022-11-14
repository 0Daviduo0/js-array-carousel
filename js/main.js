// Array with images
let imgArray = ['01', '02', '03', '04', '05'];

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
    imgContainer.src = `img/${imgArray[i]}.webp`;

    var thumbContainer = document.createElement("img");
    thumbContainer.src = `img/${imgArray[i]}.webp`;

    // setting childs
    parent.appendChild(child);
    child.appendChild(imgContainer);

    parent2.appendChild(child2);
    child2.appendChild(thumbContainer)
    
}

// variable for counting the active image
var activeImg = 0;

// getting thumb class and adding the active state
const thumbnails = document.getElementsByClassName('thumb');
thumbnails[activeImg].classList.add('thumb_active');

console.log(thumbnails);

// getting carousel item class and adding the active state
const carouselItem = document.getElementsByClassName('carousel_item');
carouselItem[activeImg].classList.add('active');

// getting next button and adding function
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
         // Infinite scroll 
        else if (activeImg == imgArray.length -1){
            carouselItem[activeImg].classList.remove('active');
            thumbnails[activeImg].classList.remove('thumb_active');

            for (activeImg == imgArray.length; activeImg--; ){

                carouselItem[activeImg].classList.remove('active');
                thumbnails[activeImg].classList.remove('thumb_active');
                
            }
            
            activeImg = 0;
            carouselItem[activeImg].classList.add('active');
            thumbnails[activeImg].classList.add('thumb_active');
            console.log("n immagine", activeImg);
        }

    })

// getting back button and adding function
const back = document.getElementById('back_button');
    back.addEventListener('click', function() {

        if (activeImg > 0){

            carouselItem[activeImg].classList.remove('active');
            thumbnails[activeImg].classList.remove('thumb_active');

            activeImg--;
            carouselItem[activeImg].classList.add('active');
            thumbnails[activeImg].classList.add('thumb_active');

            // Contatore immagine
            console.log("n immagine", activeImg);
            console.log("n array", imgArray.length);

        }
        // Infinite scroll 
        else if (activeImg == 0){
            carouselItem[activeImg].classList.remove('active');
            thumbnails[activeImg].classList.remove('thumb_active')

            activeImg = imgArray.length -1;

            carouselItem[activeImg].classList.add('active');
            thumbnails[activeImg].classList.add('thumb_active');
            console.log("n immagine", activeImg);
        }

    })