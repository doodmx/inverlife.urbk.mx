const square_hover = document.getElementById('square_white');
const square_hover2 = document.getElementById('square_hover2');
const img_woman = document.getElementById('img_woman');
const img_car = document.getElementById('img_car');
const img_wedding = document.getElementById('img_wedding');
console.log(img_wedding);
const img_mount = document.getElementById('img_mount');
console.log(img_mount);

function ocultar(){
    img_woman.classList.remove('mostrar');
    img_car.classList.remove('mostrar');
    img_woman.classList.add('ocultar');
    img_car.classList.add('ocultar');
}
function mostrar(){
    img_woman.classList.remove('ocultar');
    img_woman.classList.add('mostrar');
    img_woman.classList.add('animate__animated');
    img_woman.classList.add('animate__fadeInLeft');
    img_car.classList.add('animate__animated');
    img_car.classList.add('animate__fadeInRight');
    square_hover.classList.add('animate__animated');
    square_hover.classList.add('animate__fadeInDown');
    img_car.classList.remove('ocultar');
    img_car.classList.add('mostrar');
}
function ocultar2(){
    img_wedding.classList.remove('mostrar');
    img_mount.classList.remove('mostrar');
    img_wedding.classList.add('ocultar');
    img_mount.classList.add('ocultar');
}
function mostrar2(){
    img_wedding.classList.remove('ocultar');
    img_mount.classList.remove('ocultar');
    img_wedding.classList.add('animate__animated');
    img_wedding.classList.add('animate__fadeInRight');
    img_mount.classList.add('animate__animated');
    img_mount.classList.add('animate__fadeInLeft');
    square_hover2.classList.add('animate__animated');
    square_hover2.classList.add('animate__fadeInDown');
}