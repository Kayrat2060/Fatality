document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchend', handleTouchEnd, false);

const offersBox = document.querySelector('.offers-box');

// console.log(offersBox);

let x1 = null;
let x2  = null;
let xDiff = null;
let xDiff2 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
}


function handleTouchMove(event) {
    if (!x1) {
        return false;
    }
    x2 = event.touches[0].clientX;
    xDiff = x2-x1;
    offersBox.style.transition = 'transform .1s';
    offersBox.style.transform = `translate3d(${xDiff + xDiff2}px, 0px, 0px)`;
}


function handleTouchEnd(event) {
    if (xDiff + xDiff2 > offersBox.offsetWidth/3 + 20) {
        xDiff2 = offersBox.offsetWidth/3 + 10;
        xDiff = 0;
        offersBox.style.transition = 'transform .3s';
        offersBox.style.transform = `translate3d(${xDiff + xDiff2}px, 0px, 0px)`;

    } else if (xDiff + xDiff2 < - 20 - offersBox.offsetWidth/3) {
        xDiff2 = - 10 - offersBox.offsetWidth/3;
        xDiff = 0;
        offersBox.style.transition = 'transform .3s';
        offersBox.style.transform = `translate3d(${xDiff + xDiff2}px, 0px, 0px)`;
    }
    xDiff2 = xDiff + xDiff2;
    xDiff = 0;
}