//finde id in html 

let showPrevBtn=document.getElementById('show-prev-btn');
let showNextBtn=document.getElementById('show-next-btn');
let sliderImage=document.getElementById('slider-img');


// create event

showPrevBtn.addEventListener('click',onShowPrev);
showNextBtn.addEventListener('click',onShowNext);


// create array image

imageArray=['carusel/1.jpg','carusel/2.jpg','carusel/3.jpg'];
let carrentImage=0;
sliderImage.src=imageArray[carrentImage];
showPrevBtn.disabled=true;




// function

function onShowPrev(){
	carrentImage--;
	sliderImage.src=imageArray[carrentImage];
	showNextBtn.disabled=false;
	if(carrentImage===0){
		showPrevBtn.disabled=true;
	}
}


function onShowNext(){
	carrentImage++;
	sliderImage.src=imageArray[carrentImage];
	showPrevBtn.disabled=false;
	if(carrentImage===imageArray.length-1){
		showNextBtn.disabled=true;
	}


}

