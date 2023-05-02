let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');


window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    text.style.margintop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1.5 + 'px';

});

// script for work
function dict(){
    var x =document.getElementById("search").value;
    const url ="https://dictionary.cambridge.org/dictionary/english/";
    var url1 = url + x;
    var win = window.open(url1, '_blank');
    win.focus;
}
function scholar(){
    var x =document.getElementById("search").value;
    const url ="http://www.google.com/search?q=";
    var url1 = url + x;
    var win = window.open(url1, '_blank');
    win.focus;
}

