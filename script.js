let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');
let pagine = ['	http://drawing.garden/	 ',
    '	http://lacquerlacquer.com/	 ',
    '	https://strobe.cool/	 ',
    '	http://www.muchbetterthanthis.com/	 ',
    '	https://boringboringboring.com/	 ',
    '	http://www.crossdivisions.com/	 ',
    '	http://chillestmonkey.com/	 ',
    '	http://wutdafuk.com/	 ',
    '	http://www.omfgdogs.com/#	 ',
    '	http://onemillionlols.com/	 ',
    '	https://www.ascii-middle-finger.com/	 ',
    '	http://chihuahuaspin.com/	 ',
    '	http://www.trashloop.com/	 ',
    '	http://tunnelsnakes.com/	 ',
    '	http://buzzybuzz.biz/	 ',
    '	http://nooooooooooooooo.com/	 ',
    '	https://dadlaughbutton.com/	 ',
    '	https://www.youtube.com/watch?v=bGXtovOy3jA&list=PLrBFDJBJN1PFAN9sfybPGYfuylkIf1BCp&index=14	 ',
    '	https://jacksonpollock.org/	 ',
    '	http://www.partridgegetslucky.com/	 ',
    '	https://www.youtube.com/watch?v=5TuLryMvYnM	 ',
    '	https://www.youtube.com/watch?v=tDGbhhEwypk	 ',
    '	https://www.youtube.com/watch?v=R-vzhSy70jc	 ',
    '	https://www.youtube.com/watch?v=Br8Nk_LDbIA	 ',
    '	https://www.youtube.com/watch?v=Qr7jkGazzw8	 ',
    '	https://www.youtube.com/watch?v=O3ApPRJXtiY	 ',
    '	https://www.youtube.com/watch?v=AMUmlBEwfAM	 ',
    '	https://www.youtube.com/watch?v=PavhsHTd4pU	 ',
    '	https://www.youtube.com/watch?v=vCl3p-VuvtM&list=PLrBFDJBJN1PFAN9sfybPGYfuylkIf1BCp	 ',
    '	https://www.youtube.com/watch?v=LHMZ62g3k78&list=PLrBFDJBJN1PFAN9sfybPGYfuylkIf1BCp&index=3	 ',
    '	https://www.youtube.com/watch?v=5aopMm7UGYA&list=PLrBFDJBJN1PFAN9sfybPGYfuylkIf1BCp&index=10	 ',
    '	https://www.youtube.com/watch?v=g9Mvm_Ipp5g&list=PLrBFDJBJN1PFAN9sfybPGYfuylkIf1BCp&index=11	 ',
    '	https://www.youtube.com/watch?v=bGXtovOy3jA&list=PLrBFDJBJN1PFAN9sfybPGYfuylkIf1BCp&index=14	 ',
    '	https://www.youtube.com/watch?v=thtRNJ3A-CA&list=PLrBFDJBJN1PFAN9sfybPGYfuylkIf1BCp&index=15	 ',
    '	https://www.youtube.com/watch?v=8nvC289Oz50	 ',
    '	https://www.youtube.com/watch?v=-KNj_ath73Q	 ',
    '	https://www.youtube.com/watch?v=Hv_vPOj6Dzg	 ',
    '	https://www.youtube.com/watch?v=9sh2SwfuO44	 ',
    '	https://www.youtube.com/watch?v=jmLJZUrUSSA	 ',
    '	https://www.youtube.com/watch?v=X0yedGLQzxE	 ',
    '	https://www.youtube.com/watch?v=ViuBLXffAQ0	 ',
    '	https://www.youtube.com/watch?v=uqC3UH8XSt8	 ',
    '	https://www.youtube.com/watch?v=LeUtR2GXv2E	 ',
    '	https://www.youtube.com/watch?v=VbwS_w3FxPk	 ',
    '	https://www.youtube.com/watch?v=-OT5sWFGQNg	 ',
    '	https://www.youtube.com/watch?v=2ZtplZY2NWM	 '];



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