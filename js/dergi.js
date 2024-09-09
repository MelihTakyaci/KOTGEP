// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const nextBtnM = document.querySelector("#next-btn-m");
const prevBtnM = document.querySelector("#prev-btn-m");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const papers = document.querySelectorAll(".paper");
console.log("papers:" , papers.length)

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
prevBtnM.addEventListener("click", goPrevPage);
nextBtnM.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = papers.length;
let maxLocation = numOfPapers + 1;
let backpagecount = numOfPapers - 2;

// for(let i = 0; i< papers.length; i++){
//     papers[i].style.zIndex = numOfPapers - i;
// }
function openBook() {
    var screenWidth = window.innerWidth; // Ekran genişliğini al
    var translateXValue;
    if(screenWidth > 1124){
        prevBtn.style.transform = "translateX(-220px)";
        nextBtn.style.transform = "translateX(220px)";
    }
    if(screenWidth <= 1024){
        prevBtn.style.transform = "translateX(-180px)";
        nextBtn.style.transform = "translateX(180px)";
    }
    if(screenWidth < 768){
        prevBtn.style.transform = "translateX(-150px)";
        nextBtn.style.transform = "translateX(150px)";
    }
    book.style.transform = "translateX(50%)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        if(currentLocation == 1){
            openBook();
            papers[currentLocation-1].classList.add("flipped");
            papers[currentLocation-1].style.zIndex = 1;
        }else if(currentLocation < numOfPapers){
            papers[currentLocation-1].classList.add("flipped");
            papers[currentLocation-1].style.zIndex = currentLocation;
            papers[currentLocation].style.zIndex = currentLocation+1;
        }else if(currentLocation == numOfPapers){
            papers[currentLocation-1].classList.add("flipped");
            papers[currentLocation-1].style.zIndex = currentLocation;
            closeBook(false);
        }     
        // switch(currentLocation) {
        //     case 1:
        //         openBook();
        //         paper1.classList.add("flipped");
        //         paper1.style.zIndex = 1;
        //         break;
        //     case 2:
        //         paper2.classList.add("flipped");
        //         paper2.style.zIndex = 2;
        //         break;
        //     case 3:
        //         paper3.classList.add("flipped");
        //         paper3.style.zIndex = 3;
        //         closeBook(false);
        //         break;
        //     default:
        //         throw new Error("unkown state");
        // }
        backpagecount --;
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        if(currentLocation == 2){
            closeBook(true);
            papers[currentLocation-2].classList.remove("flipped");
            papers[currentLocation-2].style.zIndex = backpagecount;
        }else if(currentLocation <maxLocation){
            papers[currentLocation-2].classList.remove("flipped");
            papers[currentLocation-2].style.zIndex = backpagecount;
            papers[currentLocation-1].style.zIndex = backpagecount-1;
        }else if(currentLocation == maxLocation){
            openBook();
            papers[currentLocation-2].classList.remove("flipped");
            papers[currentLocation-2].style.zIndex = backpagecount;
        }
        // switch(currentLocation) {
        //     case 2:
        //         closeBook(true);
        //         paper1.classList.remove("flipped");
        //         paper1.style.zIndex = 3;
        //         break;
        //     case 3:
        //         paper2.classList.remove("flipped");
        //         paper2.style.zIndex = 2;
        //         break;
        //     case 4:
        //         openBook();
        //         paper3.classList.remove("flipped");
        //         paper3.style.zIndex = 1;
        //         break;
        //     default:
        //         throw new Error("unkown state");
        // }
        backpagecount ++;
        currentLocation--;
    }
}
