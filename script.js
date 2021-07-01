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
             'https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg'];
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
