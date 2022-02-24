let btnRandom = document.querySelector('button');
let result = document.querySelector('h6');
let pagine = [  '	http://drawing.garden/	 ',		
              '	https://www.youtube.com/watch?v=bGXtovOy3jA&list=PLrBFDJBJN1PFAN9sfybPGYfuylkIf1BCp&index=14	 ',		
              '	https://www.youtube.com/watch?v=-KNj_ath73Q	 ',		
              '	https://www.youtube.com/channel/UC5yXB_ThsufRJYMRlzIGoeQ	 ',	
              '	https://www.gazzetta.it/	 ',
              '	http://lacquerlacquer.com/	 ',		
              '	https://www.youtube.com/watch?v=2ZtplZY2NWM	 ',	
              '	https://www.youtube.com/watch?v=7HqSRYs0TZI	 ',	
              '	https://www.youtube.com/user/jakidale	 ',		'https://www.google.com/searchq=seria+a&rlz=1C1ONGR_itIT934IT934&sxsrf=AOaemvKh_L11DONQier8q7DTn4JglXNN0g%3A1643198093972&ei=jTbxYbPBOpuGxc8PnI6i2AM&gs_ssp=eJzj4tDP1TcwriqzNGD0Yi9OLcpMVEgEADUxBYE&oq=seroia&gs_lcp=Cgdnd3Mtd2l6EAMYADIHCC4QsQMQQzIHCAAQsQMQCjIHCAAQsQMQCjIECC4QCjIECAAQCjIGCC4QChBDMgQILhAKMgcIABCxAxBDMgQIABAKMgQILhAKOgQILhAnOgQIIxAnOgQILhBDOgUIABCABDoHCCMQJxCLAzoECAAQQzoICAAQgAQQsQM6BwguELEDEAo6DAgjELECECcQRhD9AUoECEEYAEoECEYYAFAAWJcGYK8PaABwAngAgAGhA4gB7QqSAQkwLjEuMi4xLjGYAQCgAQG4AQLAAQE&sclient=gws-wiz#sie=lg;/g/11n0vx7n5d;2;/m/03zv9;st;fp;1;;	 '];



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
