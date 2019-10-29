// Your code goes here



//MouseOver

const mapImg = document.querySelector('.content-section .img-content');
console.log(mapImg);
mapImg.addEventListener('mouseover', () => {
    mapImg.style.transform = 'scale(1.5)';
    mapImg.style.transition = 'transform .25s'
});
mapImg.addEventListener('mouseleave', () => {
    mapImg.style.transform = 'scale(1)';
    mapImg.style.transition = 'transform .25s'
});  

//KeyDown

const htag = document.querySelector('.intro h2');
console.log(htag);
document.addEventListener('keydown', (event) => {
    htag.style.color = 'teal';
    htag.style.fontSize = '4.5rem';
})


//Wheel
const busImg = document.querySelector('.intro img')
console.log(busImg);
busImg.addEventListener('wheel', () => {
    busImg.style.transform = 'scale(1.5)';
    busImg.style.transition = 'transition .5s';
})

busImg.addEventListener('mouseleave', () => {
    busImg.style.transform = 'scale(1)';
    busImg.style.transition = 'transition .5s';
})

// //Drag/Drop

// const draggable = document.querySelector('.content-pick .destination')
// console.log(draggable);

// document.addEventListener('drag', function(event){
// }, false);

// document.addEventListener('dragstart', function(event){
//     draggable = event.target;
//     event.target.style.opacity = .5;
// }, false);

// document.addEventListener('dragend', function(event){
//     event.target.style.opacity = '';
// }, false);

// document.addEventListener('dragover', function(event){
//     event.preventDefault();
// }, false);

//Focus
document.querySelectorAll('a').forEach(element => {
    element.addEventListener('focus', (event) => {
        event.target.style.background = 'lightsalmon';
    })
})

//ReSize

