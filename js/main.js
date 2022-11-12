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
    child.appendChild(imgContainer)
    
}

// for(let i = 0; i < imgArray.length; i++){

//     child.appendChild("img")

    
// }