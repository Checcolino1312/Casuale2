let btnRandom = document.querySelector('button');
let result = document.querySelector('h6');
let pagine = [  '	http://drawing.garden/	 ',				
              '	https://www.youtube.com/watch?v=-KNj_ath73Q	 ',		
              '	https://www.youtube.com/channel/UC5yXB_ThsufRJYMRlzIGoeQ	 ',	
              '	https://www.gazzetta.it/	 ',
              '	http://lacquerlacquer.com/	 ',		
              '	https://www.youtube.com/watch?v=2ZtplZY2NWM	 ',	
              '	https://www.youtube.com/watch?v=7HqSRYs0TZI	 ',	
              '	https://www.youtube.com/user/jakidale	 '];



function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}


let myWindow;
let redirectButton = document.querySelector(".redirect");

let openRandomContent = function () {
    openWindow();
    redirectButton.classList.add("inactive");
    redirectButton.disabled = true;
    // redirectButton.removeEventListener('click', openRandomContent);
    //closeWindow();
};

redirectButton.addEventListener('click', openRandomContent);

function openWindow() {
    let index = getRandomNumber(0, pagine.length - 1);
    result.innerText = pagine[index];
    window.open(result.innerText);

}

function closeWindow() {
    window.close('', '_parent', '');
};

;
