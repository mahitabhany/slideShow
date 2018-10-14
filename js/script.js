var loaderX = document.getElementById('loaderX');
var slideShow = document.getElementById('slideShow');
var prev = document.getElementById('prev');
var next = document.getElementById('next');

var currentIndex = 1;

window.onload = function(){
    loaderX.style.display = 'none';
    slideShow.style.display = 'flex';
};




function prevSlide()
{
    --currentIndex;
    slideShow.style.backgroundImage = "url('assets/cs-" + currentIndex + ".jpg')";
    
}
function nextSlide()
{
    ++currentIndex;
    slideShow.style.backgroundImage = "url('assets/cs-" + currentIndex + ".jpg')";
    
}