let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');
let pagine = [ '	http://drawing.garden/	 ',
 '	http://lacquerlacquer.com/	 ',
 '	http://www.trashloop.com/	 ',
 '	http://nooooooooooooooo.com/	 ',
 '	https://jacksonpollock.org/	 ',
 '	https://puginarug.com/	 ',
 '	https://mondrianandme.com/	 ',
 '	http://www.staggeringbeauty.com/	 ',
 '	https://thatsthefinger.com/	 ',
 '	https://www.movenowthinklater.com/	 ',
 '	http://www.koalastothemax.com/	 ',
 '	https://smashthewalls.com/	 ',
 '	https://chrismckenzie.com/	 ',
 '	https://cat-bounce.com/	 ',
 '	https://potatoortomato.com/	 ',
 '	http://scroll-o-meter.club/	 ',
 '	http://doughnutkitten.com/	 ',
 '	https://www.yesnoif.com/	 ',
 '	https://oct82.com/	 ',
 '	http://www.omfgdogs.com/#	 ',
 '	http://spaceis.cool/	 ',
 '	http://buildshruggie.com/	 ',
 '	https://www.blankwindows.com/	 ',
 '	http://yeahlemons.com/	 ',
 '	https://zoomquilt.org/	 ',
 '	http://wowenwilsonquiz.com/	 ',
 '	https://loopedforinfinity.com/	 ',
 '	http://chihuahuaspin.com/	 ',
 '	http://www.partridgegetslucky.com/	 ',
 '	https://www.youtube.com/watch?v=bGXtovOy3jA&list=PLrBFDJBJN1PFAN9sfybPGYfuylkIf1BCp&index=14	 ',
 '	https://www.youtube.com/watch?v=2ZtplZY2NWM	 ',
 '	https://www.youtube.com/watch?v=-OT5sWFGQNg	 ',
 '	https://www.youtube.com/watch?v=uqC3UH8XSt8	 ',
 '	https://www.youtube.com/watch?v=ViuBLXffAQ0	 ',
 '	https://www.youtube.com/watch?v=X0yedGLQzxE	 ',
 '	https://www.youtube.com/watch?v=jmLJZUrUSSA	 ',
 '	https://www.youtube.com/watch?v=9sh2SwfuO44	 ',
 '	https://www.youtube.com/watch?v=5TuLryMvYnM	 ',
 '	https://www.youtube.com/watch?v=tDGbhhEwypk	 ',
 '	https://www.youtube.com/watch?v=R-vzhSy70jc	 ',
 '	https://www.youtube.com/watch?v=Br8Nk_LDbIA	 ',
 '	https://www.youtube.com/watch?v=VbwS_w3FxPk	 ',
 '	https://www.youtube.com/watch?v=O3ApPRJXtiY	 ',
 '	https://www.youtube.com/watch?v=AMUmlBEwfAM	 ',
 '	https://www.youtube.com/watch?v=PavhsHTd4pU	 ',
 '	https://www.youtube.com/watch?v=vCl3p-VuvtM&list=PLrBFDJBJN1PFAN9sfybPGYfuylkIf1BCp	 ',
 '	https://www.youtube.com/watch?v=LHMZ62g3k78&list=PLrBFDJBJN1PFAN9sfybPGYfuylkIf1BCp&index=3	 ',
 '	https://www.youtube.com/watch?v=5aopMm7UGYA&list=PLrBFDJBJN1PFAN9sfybPGYfuylkIf1BCp&index=10	 ',
 '	https://www.youtube.com/watch?v=g9Mvm_Ipp5g&list=PLrBFDJBJN1PFAN9sfybPGYfuylkIf1BCp&index=11	 ',
 '	https://www.youtube.com/watch?v=bGXtovOy3jA&list=PLrBFDJBJN1PFAN9sfybPGYfuylkIf1BCp&index=14	 ',
 '	https://www.youtube.com/watch?v=thtRNJ3A-CA&list=PLrBFDJBJN1PFAN9sfybPGYfuylkIf1BCp&index=15	 ',
 '	https://www.youtube.com/watch?v=LeUtR2GXv2E	 ',
 '	https://www.youtube.com/watch?v=xUmp0OKlXn0	 ',
 '	https://www.youtube.com/watch?v=LNJnWXDShdU	 ',
 '	https://www.youtube.com/watch?v=F9UByD5fBc8	 ',
 '	https://www.youtube.com/watch?v=6v6ER7QnwKw	 ',
 '	https://www.youtube.com/watch?v=1U_H_L0L968	 ',
 '	youtube.com/watch?v=Vk6qYlTS7M8	 ', '	https://www.youtube.com/watch?v=-KNj_ath73Q	 ',
 '	https://www.youtube.com/watch?v=7HqSRYs0TZI	 ',
 '	https://www.youtube.com/watch?v=DVRf6zoFbyE	 ',
 '	https://www.youtube.com/watch?v=CwAiOd7GcYA	 ',
 '	https://www.youtube.com/watch?v=he2WNs43G_Q	 ',
 '	https://www.youtube.com/watch?v=iR0_sLpeiUA	 ',
 '	https://www.youtube.com/watch?v=DMrYez93pEQ	 ',
 '	https://www.youtube.com/watch?v=nECLM2lzVos	 ',
 '	https://www.youtube.com/watch?v=Y4IyWe4qNGg&list=RDY4IyWe4qNGg&start_radio=1	 ',
 '	https://www.youtube.com/watch?v=Y4IyWe4qNGg&list=RDY4IyWe4qNGg&start_radio=1	 ',
 '	https://www.youtube.com/watch?v=M8C_aieRM4Q&list=RDY4IyWe4qNGg&index=9	 ',
 '	youtube.com/watch?v=BU_azCT00FU&list=RDY4IyWe4qNGg&index=12	 ',
 '	https://www.youtube.com/watch?v=TsyMERzWNe4&list=RDY4IyWe4qNGg&index=33	 ',
 '	https://www.youtube.com/watch?v=mhH0X7RtZyM	 ',
 '	https://www.youtube.com/watch?v=FXqyWm1Uhn8	 ',
 '	https://www.youtube.com/watch?v=OHsIqCEpyto	 ',
 '	https://www.youtube.com/watch?v=T24-SPzP5gU	 ',
 '	https://www.youtube.com/watch?v=nbDUARi6m3E	 ',
 '	https://www.youtube.com/watch?v=MVcaHiCnR-w	 ',
 '	https://www.youtube.com/watch?v=CJEk72PJ5fo	 ',
 '	https://www.youtube.com/watch?v=Jvc11ghI05g	 ',
 '	https://www.youtube.com/watch?v=z_JDccpkMAM	 ',
 '	https://www.youtube.com/watch?v=XVpaG7kU0Yw	 ',
 '	https://www.youtube.com/watch?v=AWqKECytyeU	 ',
 '	https://www.youtube.com/watch?v=og0xFfS3l8Y	 ',
 '	https://www.youtube.com/watch?v=iKSkLw7YKwo	 ',
 '	https://www.youtube.com/watch?v=78YNQ7zzxvQ	 ',
 '	https://www.youtube.com/watch?v=wJ5jjUVqHbE	 ',
 '	https://www.youtube.com/watch?v=F7hWpZUQxZ0	 ',
 '	https://www.youtube.com/watch?v=xHciCj8pi8s	 ',
 '	https://www.youtube.com/watch?v=fKa6mxDZcmI&list=RDY4IyWe4qNGg&index=36	 ',
 '	https://www.youtube.com/watch?v=tU_KbOs8w2o	 ',
 '	https://www.youtube.com/watch?v=BDx_YTf9x1g	 ',
 '	https://www.youtube.com/watch?v=PxQVexjVlg4	 ',
 '	https://www.youtube.com/watch?v=gv3Gtf94o6w	 ',
 '	https://www.youtube.com/watch?v=dXPjWdUPcB4	 ',
 '	https://www.youtube.com/watch?v=0kdY-4kaJKo	 ',
 '	https://www.youtube.com/watch?v=GOJUNJ1o394	 ',
 '	https://www.youtube.com/watch?v=Wc7hliMuiWc	 ',
 '	https://www.youtube.com/watch?v=lmHddBClrxQ	 ',
 '	https://www.youtube.com/watch?v=jnzyFvcENAw	 ',
 '	https://www.youtube.com/watch?v=QRDg77Wg3_w	 ',
 '	https://www.youtube.com/watch?v=EaPqGRHu07M	 ',
 '	https://www.youtube.com/watch?v=MUXveS-0Jqs	 ',
 '	https://www.youtube.com/watch?v=8YtJpKRf4Dg	 ',
 '	https://www.youtube.com/watch?v=toNT-qapkns	 ',
 '	https://www.youtube.com/watch?v=HS2dupmJ85Y	 ',
 '	https://www.youtube.com/watch?v=nXdTzmvHyNk	 ',
 '	https://www.youtube.com/watch?v=nSybxOkSC_o	 ',
 '	https://www.youtube.com/watch?v=09Bda4LST98	 ',
 '	https://www.youtube.com/watch?v=Bkdn4VDN7_o	 ',
 '	https://www.youtube.com/watch?v=hOWAN7q1__o	 ',
 '	https://www.youtube.com/watch?v=zB6b_gyThm8	 ',
 '	https://www.youtube.com/watch?v=6l0QZycXVxo	 ',
 '	https://www.youtube.com/watch?v=boaVYmiE7VI	 ',
 '	https://www.youtube.com/watch?v=irFU1OAES2s	 ',
 '	https://www.youtube.com/watch?v=Gha-hIDPtKw	 ',
 '	https://www.youtube.com/watch?v=zSSvFBdAEXo	 ',
 '	https://www.youtube.com/watch?v=TsvJZBdoF3U	 ',
 '	https://www.youtube.com/watch?v=vHrTyRvPT3k	 ',
 '	https://www.youtube.com/watch?v=2RZivRe2rnA	 ',
 '	https://www.youtube.com/watch?v=AcnTBYYPxjI	 ',
 '	https://www.youtube.com/watch?v=sD5j9eDDNJo	 ',
 '	https://www.youtube.com/watch?v=2xxonKSQ-1M	 ',
 '	https://www.youtube.com/watch?v=UXf8pKj-4ik	 ',
 '	https://www.youtube.com/watch?v=vbRoT5bBiLM	 ',
 '	https://www.youtube.com/watch?v=Nwo8PCcxJxQ	 ',
 '	https://www.youtube.com/watch?v=XFkzRNyygfk	 ',
 '	https://www.youtube.com/watch?v=Gh8Gl2GwB6s	 ',
 '	https://www.youtube.com/watch?v=btPJPFnesV4	 ',
 '	https://www.youtube.com/watch?v=WUOtCLOXgm8	 ',
 '	https://www.youtube.com/watch?v=pr2EG89WXuY	 ',
 '	https://www.youtube.com/channel/UC5yXB_ThsufRJYMRlzIGoeQ	 ',
 '	https://www.youtube.com/user/jakidale	 ',
 '	https://www.youtube.com/channel/UCUTpKHPxgPL7q2PxQht5R0w	 ',
 '	https://www.arduino.cc/	 ',
 '	https://www.raspberrypi.com/	 ',
 '	https://leganerd.com/	 ',
 '	https://www.twitch.tv/dariomocciatwitch	 ',
 '	https://www.twitch.tv/homyatol	 ',
 '	https://www.twitch.tv/enkk	 ',
 '	https://www.leagueoflegends.com/	 ',
 '	https://www.minecraft.net/it-it	 ',
 '	https://www.thingiverse.com/	 ',
 '	https://www.tinkercad.com/dashboard	 ',
 '	https://federicstore.it/	 ',
 '	https://federicstore.it/pokemon/	 ',
 '	https://www.youtube.com/watch?v=3wjGJaPCaeU	 ',
 '	https://www.youtube.com/watch?v=jgoVyiSyB5k	 ',
 '	https://www.youtube.com/watch?v=iS0f5TXIL64	 ',
 '	https://www.youtube.com/watch?v=EPqw0LalPqs	 ',
 '	https://www.prusa3d.com/it/	 ',
 '	https://andreagaleazzi.com/	 ',
 '	https://www.apple.com/it/iphone/	 ',
 '	https://www.samsung.com/it/	 ',
 '	https://it.wikipedia.org/wiki/Bitcoin	 ',
 '	https://www.google.com/finance/quote/BTC-EUR	 ',
 '	https://www.google.com/finance/quote/ETH-EUR	 ',
 '	https://ethereum.org/it/	 ',
 '	https://it.wikipedia.org/wiki/Non-fungible_token	 ',
 '	https://opensea.io/	 ',
 '	https://replit.com/	 ',
 '	https://opensea.io/collection/monkeybet	 ',
 '	https://p5js.org/	 ',
 '	https://crypto.com/	 ',
 '	https://www.udemy.com/	 ',
 '	https://thetruesize.com/#?borders=1~!MTU0Mzg0NDU.NTEyOTE5NA*MzIwOTY2NTA(NTM5NTQ3OA~!CONTIGUOUS_US*MTAwMjQwNzU.MjUwMjM1MTc(MTc1)MA~!IN*NTI2NDA1MQ.Nzg2MzQyMQ)MQ~!CN*OTkyMTY5Nw.NzMxNDcwNQ(MjI1)Mg	 ',
 '	https://www.glideapps.com/	 ',
 '	https://www.reddit.com/	 ',
 '	https://www.giambaj.it/twitch/graph/	 ',
 '	https://www.epicgames.com/fortnite/it/home	 ',
 '	https://www.callofduty.com/it	 ',
 '	https://www.telefonino.net/	 ',
 '	https://www.hdblog.it/	 ',
 '	https://twitter.com/elonmusk	 ',
 '	https://www.tesla.com/it_it	 ',
 '	https://www.starlink.com/	 ',
 '	https://www.spacex.com/	 ',
 '	https://www.nasa.gov/	 ',
 '	https://www.intel.it/content/www/it/it/homepage.html	 ',
 '	https://www.microsoft.com/it-it	 ',
 '	https://www.microsoft.com/it-it/windows?r=1	 ',
 '	https://it.wikipedia.org/wiki/Web_3.0	 ',
 '	https://it.wikipedia.org/wiki/Metaverso	 ',
 '	https://about.facebook.com/meta/	 ',
 '	https://www.oculus.com/	 ',
 '	https://www.nvidia.com/it-it/	 ',
 '	https://www.trust.com/it	 ',
 '	https://www.youtube.com/c/DarioMocciaChannel	 ',
 '	https://www.youtube.com/watch?v=65gcWGY113k	 ',
 '	https://www.youtube.com/watch?v=ozpBr7nY9As	 ',
 '	https://www.youtube.com/watch?v=JRJNvxoh844	 ',
 '	https://www.html.it/	 ',
 '	https://stackoverflow.com/	 ',
 '	https://www.w3schools.com/	 ',
 '	https://github.com/	 ',
 '	https://www.pinterest.it/	 ',
 '	https://discord.com/	 ',
 '	https://www.twitch.tv/	 ',
 '	https://www.informatica.com/it/	 ',
 '	https://www.oracle.com/it/index.html	 ',
 '	https://www.ces.tech/	 ',
 '	https://www.kickstarter.com/?lang=it	 ',
 '	https://www.youtube.com/c/DarioMocciaArchives	 ', 
 '	https://www.gazzetta.it/	 ',
 '	https://www.google.com/search?q=seria+a&rlz=1C1ONGR_itIT934IT934&sxsrf=AOaemvKh_L11DONQier8q7DTn4JglXNN0g%3A1643198093972&ei=jTbxYbPBOpuGxc8PnI6i2AM&gs_ssp=eJzj4tDP1TcwriqzNGD0Yi9OLcpMVEgEADUxBYE&oq=seroia&gs_lcp=Cgdnd3Mtd2l6EAMYADIHCC4QsQMQQzIHCAAQsQMQCjIHCAAQsQMQCjIECC4QCjIECAAQCjIGCC4QChBDMgQILhAKMgcIABCxAxBDMgQIABAKMgQILhAKOgQILhAnOgQIIxAnOgQILhBDOgUIABCABDoHCCMQJxCLAzoECAAQQzoICAAQgAQQsQM6BwguELEDEAo6DAgjELECECcQRhD9AUoECEEYAEoECEYYAFAAWJcGYK8PaABwAngAgAGhA4gB7QqSAQkwLjEuMi4xLjGYAQCgAQG4AQLAAQE&sclient=gws-wiz#sie=lg;/g/11n0vx7n5d;2;/m/03zv9;st;fp;1;;	 ',
 '	https://www.juventus.com/it	 ',
 '	https://www.google.com/search?rlz=1C1ONGR_itIT934IT934&sxsrf=AOaemvI1Uwf1gLJtKioZkRgj2J-XHj4e9Q:1643198105551&q=Premier+League&stick=H4sIAAAAAAAAAONgFuLQz9U3MK4qs1QCs4ziS5K1BIMzU1LLEyuL_VIrSoJLUguKF7HyBRSl5mamFin4pCaml6buYGUEAIQYURY9AAAA&sa=X&ved=2ahUKEwjflYH7rc_1AhWbQvEDHZIkCKsQxA16BAgrEAc&biw=1920&bih=1089&dpr=1#sie=lg;/g/11p44qhs93;2;/m/02_tc;st;fp;1;;	 ',
 '	https://www.manutd.com/	 ',
 '	https://it.wikipedia.org/wiki/Diego_Armando_Maradona	 ',
 '	https://www.youtube.com/watch?v=P6JxpnZDQqM	 ',
 '	https://www.youtube.com/watch?v=U59IW2aZZ5g	 ',
 '	https://www.youtube.com/watch?v=3h7hHr8TPHg	 ',
 '	https://www.youtube.com/watch?v=1kAw6GwQ43o	 ',
 '	https://www.youtube.com/watch?v=3A1kAqYgXv8	 ',
 '	https://www.youtube.com/watch?v=3nxh83bOKEg	 ',
 '	https://www.sportmediaset.mediaset.it/	 ',
 '	https://sport.sky.it/	 ',
 '	https://www.formula1.com/	 ',
 '	https://www.corrieredellosport.it/	 ',
 '	https://www.youtube.com/watch?v=t22flliJLTQ	 ',
 '	youtube.com/watch?v=vQcUp_63M94	 ',
 '	youtube.com/watch?v=B0pYDrb_nzI	 ',
 '	https://www.youtube.com/watch?v=pS036KpTis0	 ',
 '	https://www.youtube.com/watch?v=fhotYXx3ekk	 ',
 '	https://www.youtube.com/watch?v=YWvgsT-_uKw	 ',
 '	https://www.youtube.com/watch?v=dbp91G9EA8U	 ',
 '	https://www.youtube.com/watch?v=SX4IrbzM_nU	 ',
 '	https://www.acmilan.com/it	 ',
 '	https://www.inter.it/it	 ',
 '	bundesliga.com/en/bundesliga	 ',
 '	https://it.uefa.com/uefachampionsleague/	 ',
 '	https://it.uefa.com/uefaeuropaleague/	 ',
 '	https://ausopen.com/	 ',
 '	https://ausopen.com/players/italy/matteo-berrettini	 ',
 '	https://ausopen.com/players/greece/stefanos-tsitsipas	 ',
 '	https://ausopen.com/players/spain/rafael-nadal	 ',
 '	https://ausopen.com/players/italy/jannik-sinner	 ',
 '	https://ausopen.com/players/australia/ashleigh-barty	 ',
 '	https://ausopen.com/players/belarus/aryna-sabalenka	 ',
 '	https://ausopen.com/players/united-kingdom/emma-raducanu	 ',
 '	https://it.wikipedia.org/wiki/Cristiano_Ronaldo	 ',
 '	https://www.transfermarkt.it/cristiano-ronaldo/profil/spieler/8198	 ',
 '	https://www.transfermarkt.it/lionel-messi/profil/spieler/28003	 ',
 '	https://it.wikipedia.org/wiki/Ballspielverein_Borussia_09_Dortmund	 ',
 '	https://www.goal.com/it	 ',
 '	https://www.fantacalcio.it/	 ',
 '	https://www.youtube.com/watch?v=Maph_4fTaRg	 ',
 '	https://www.youtube.com/watch?v=cNstaDY6ql8	 ',
 '	https://www.youtube.com/watch?v=jIwAXme6X7s&t=1s	 ',
 '	https://www.youtube.com/watch?v=otIAxfJ0UTc	 ',
 '	https://www.youtube.com/watch?v=ydBKIXWXxsk	 ',
 '	https://www.youtube.com/watch?v=Sv_6JZrCvh4	 ',
 '	https://www.youtube.com/watch?v=QGuYep0cSAY	 ',
 '	https://www.youtube.com/watch?v=cuLprHh_BRg	 ',
 '	https://www.youtube.com/watch?v=AunImole9HI	 ',
 '	https://www.youtube.com/watch?v=ZXaSa2vEtF8	 ',
 '	https://www.youtube.com/watch?v=7nyaWT3avnA	 ',
 '	https://www.youtube.com/watch?v=w8nuyDyvYlY	 ',
 '	https://www.youtube.com/watch?v=OmKbGOARXao	 ',
 '	https://www.youtube.com/watch?v=TthnLjCrMTg	 ',
 '	https://www.youtube.com/watch?v=VZvoufQy8qc	 ',
 '	https://www.youtube.com/watch?v=B7lQ8JxFLTY	 ',
 '	https://www.youtube.com/watch?v=f6a3B499nwY	 ',
 '	https://www.youtube.com/watch?v=4rp2aLQl7vg	 ',
 '	https://www.youtube.com/watch?v=Vw34wMAqWzc	 ',
 '	https://www.youtube.com/watch?v=c0cUE-ePDEc	 ',
 '	https://www.calciomercato.com/	 ',
 '	https://www.sportmediaset.mediaset.it/calcio/	 ',
 '	https://www.youtube.com/watch?v=fsU-BnwqrmY	 ',
 '	https://www.youtube.com/watch?v=ct8HQTNYfIs	 ',
 '	https://www.youtube.com/watch?v=UmIYanq5gH8	 ',
 '	https://www.youtube.com/watch?v=fZgx6Wtv9Og&t=2s	 ',
 '	https://www.youtube.com/watch?v=Tfcw46r9JSc	 ',
 '	https://www.youtube.com/watch?v=gIwOsQFXkNI	 ',
 '	https://www.youtube.com/watch?v=MTe12fH2xtQ	 '];



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
