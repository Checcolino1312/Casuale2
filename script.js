let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');
let pagine = ['https://www.google.com/',
              'https://it.wikipedia.org/wiki/Pagina_principale', 
              'https://www.youtube.com/?gl=IT&hl=it', 
              'https://www.oraspot.it/', 
              'https://www.youtube.com/watch?v=l6N-Yq9Fw4U',
             'https://www.youtube.com/watch?v=UXf8pKj-4ik',
             'https://upload.wikimedia.org/wikipedia/commons/9/99/Gioconda_%28copia_del_Museo_del_Prado_restaurada%29.jpg',
             'https://www.instagram.com/_frapr_/',
             'https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
              '	http://drawing.garden/	 ',
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
 '	https://www.youtube.com/watch?v=Hv_vPOj6Dzg	 '];
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}




function openWindow(){
    let index = getRandomNumber(0, pagine.length-1);
    result.innerText = pagine[index];
    window.open(result.innerText);
}
