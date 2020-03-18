'use strict'

var numimg=0;

var imgslide= new Array();
imgslide[0] = new Image();
imgslide[1] = new Image();
imgslide[2] = new Image();
imgslide[3] = new Image();
imgslide[4] = new Image();
imgslide[0].src = "/IMG_1.JPG";
imgslide[1].src = "/IMG_2.JPG";
imgslide[2].src = "/IMG_3.JPG";
imgslide[3].src = "IMG_4.JPG";
imgslide[4].src = "/IMG_5.JPG";

function dem(n) {

    document.images[0].src = imgslide[numimg].src
    
    if (n==1) { 

        numimg++
        if (numimg == 5)
        numimg=0;

    } else { 
        numimg--
        if (numimg ==-1)
        numimg=4;

    }

}

function Zadanie_2() {

    document.mypict.style.width = "200px";
    document.mypict.style.transition = "2s";

}

function Zadanie_2_back() {

    document.mypict.style.width = "100px";
    document.mypict.style.transition = "2s";

}

var timerId = setInterval(() => change(), 1000);

function change() {

    document.images[2].src = imgslide[numimg].src

        numimg++
        if (numimg == 5)
        numimg=0;

}