var ham = document.getElementById('ham');
var close = document.querySelector('.close');
var hmbHolder = document.querySelector('.hmb_holder');
var hmb = document.querySelector('.hmb');

ham.addEventListener('click', openHamMenu);
close.addEventListener('click', closeHamMenu)
    // hmbHolder.addEventListener('click', closeHamMenu)
    // hmb.addEventListener('click', openHamMenu);



function closeHamMenu() {
    var hmb = document.querySelector('.hmb');
    var hmbHolder = document.querySelector('.hmb_holder');
    hmbHolder.style.visibility = 'hidden';
    hmbHolder.style.opacity = '0';
    hmb.style.marginRight = '-250px';
}

function openHamMenu() {
    var hmb = document.querySelector('.hmb');
    var hmbHolder = document.querySelector('.hmb_holder');
    // hmbHolder.style.display = 'block';
    hmbHolder.style.visibility = 'visible';
    hmbHolder.style.opacity = '1';
    hmb.style.marginRight = '0px';
}