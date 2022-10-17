let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");
let phonePhotosBigDiv = document.getElementById("phonePhotosBigDiv");
let sCont = document.getElementById("divHaveDivsWithNoIcone");
const hScroll = document.getElementById("phonePhotosBigDiv");
let currentScrollPosition = 0;
let scrollAmount = 220;
let maxScroll = 0;



maxScroll = Number (hScroll.offsetWidth) + reternOffSet2();

function reternOffSet2(){
        return -sCont.offsetWidth;
}

rightBtn.style.display = "none";
function scrollHoriz(val){   
    currentScrollPosition += (val * scrollAmount);
    if(currentScrollPosition >= 0){
        currentScrollPosition = 0;
        rightBtn.style.display = "none";
    }
    else{
        rightBtn.style.display = "block";
    }

    if(currentScrollPosition <= maxScroll) {
        currentScrollPosition = maxScroll;
        leftBtn.style.display = "none";
    }
    else{
        leftBtn.style.display = "block";
    }

        sCont.style.left = currentScrollPosition + "px";
    
    
    
}