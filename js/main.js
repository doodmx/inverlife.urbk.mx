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

const main_square = document.querySelector('.main_square');
const second_square = document.querySelector('.second_square');
const desktop_img1 = document.querySelector('.desktop_img1');
const desktop_img2 = document.querySelector('.desktop_img2');
const desktop_img3 = document.querySelector('.desktop_img3');
console.log(desktop_img2);

function mostrarAnimacion(){
    // main_square.classList.add('img')
    second_square.classList.add('mostrar');
    desktop_img1.classList.add('mostrar');
    desktop_img1.classList.add('img1_animation');
    desktop_img2.classList.add('mostrar');
    desktop_img2.classList.add('img2_animation');
    desktop_img3.classList.add('mostrar');
    desktop_img3.classList.add('img3_animation');
}
function ocultarAnimacion(){
    second_square.classList.add('ocultar');
    second_square.classList.remove('mostrar');
    desktop_img1.classList.add('ocultar');
    desktop_img1.classList.remove('mostrar');
    desktop_img2.classList.add('ocultar');
    desktop_img2.classList.remove('mostrar');
    desktop_img3.classList.add('ocultar');
    desktop_img3.classList.remove('mostrar');
    desktop_img1.classList.remove('img1_animation');
    desktop_img2.classList.remove('img2_animation');
    desktop_img3.classList.remove('img3_animation');
}