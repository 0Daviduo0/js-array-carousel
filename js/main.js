// Array with images
let imgArray = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = 'img/01.webp';

    imgArray[1] = new Image();
    imgArray[1].src = 'img/02.webp';

    imgArray[2] = new Image();
    imgArray[2].src = 'img/03.webp';

    imgArray[3] = new Image();
    imgArray[3].src = 'img/04.webp';

    imgArray[4] = new Image();
    imgArray[4].src = 'img/05.webp';

console.log(imgArray)
console.log(imgArray.length)

// post array items
for(let i = 0; i < imgArray.length; i++){

    console.log(imgArray[i]);

    var parent = document.getElementById('image_carousel');
    var child = document.createElement("div");
    child.className = "carousel_item";
    parent.appendChild(child);


    // var createIMG = document.createElement(imgArray[i]);
    // child.appendChild(createIMG)
    
}

// for(let i = 0; i < imgArray.length; i++){

//     child.appendChild("img")

    
// }