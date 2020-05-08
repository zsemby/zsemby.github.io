console.log('script betöltve');

let data1 = {
    photo: 'images/sun.jpg',
    title: "Az év emlőse 2014: a sün",
    description: 'A keleti sün (Erinaceus roumanicus) az elmúlt évek legnépszerűbb "Vadonlesős" állatává vált, hiszen a honlap látogatói, a lelkes "Vadonlesők", eddig már több mint 1700 megfigyelési adattal gazdagították Magyarország "sün-térképét".',
    alt: 'sün'
  };

  let data2 = {
    photo: 'images/urge.jpg',
    title: 'Az év emlőse 2015: az ürge',
    description: 'Az ürge (Spermophillus citellus) Európa keleti, délkeleti rövidfüvű pusztáin elterjedt kisemlős. Tőlünk nyugatabbra valamint északabbra már csak töredék-, vagy mesterségesen visszatelepített állományai találhatóak. Európai szinte ránk hárul az a természetvédelmi feladat, hogy az ürge populációk fennmaradását hosszú távon is biztosítsuk.',
    alt:'ürge'
  };

  let data3 = {
    photo: 'images/denever.jpg',
    title: 'Az év emlőse 2016: a denevér',
    description: '2016-ban a hazai denevérek 28 védett vagy fokozottan védett faja került az országos figyelem középpontjába. A Vadonleső Program kezdeményezésére a tíz hazai nemzeti park igazgatóság valamint számos civil szervezet és tudományos műhely is népszerűsítette a repülő rovarevőket ebben az évben. ',
    alt: 'denever'
  };

  let data4 = {
    photo: 'images/pele.jpg',
    title: 'Az év emlőse 2017: a mogyorós pele',
    description: 'A mogyorós pele (Muscardinus avellanarius) elsősorban erdőmelléki cserjésekben, bozótosokban, bogyós termésekben gazdag bokorszinttel rendelkező erdőkben él. Nyugat-Európában az egyik legfontosabb tápláléka a mogyoró (neve is innen származik), míg a hazai mogyorós pelék sokkal szélesebb körből választanak (som, makk, csipkebogyó, kökény, stb.).',
    alt:'pele'
  };

  let data5 = {
    photo: 'images/foldikutya.jpg',
    title: 'Az év emlőse 2018: a földikutya',
    description: 'Alig pár tucatnyian mondhatják el hazánk lakosai közül magukról, hogy valóban láttak már élő földikutyát. Ami nem is csoda, mivel ez a fokozottan védett őshonos rágcsálónk gyakorlatilag soha nem jön magától a felszínre, mi pedig nem láthatjuk őt földalatti járatrendszerében.' ,
    alt:'földikutya'
  };

  let data6 = {
    photo: 'images/lynx.jpg',
    title: 'Az év emlőse 2019: a hiúz ',
    description: 'A hiúz (Lynx lynx) Magyarország faunájából az első világháború környékén tűnt el, azonban az 1980-as években már bizonyossá vált, hogy erdeinkben újra él és szaporodik ez a nagymacska faj. Különböző nyomok (lábnyom, hullaték, szőr stb.) valamint kameracsapda-felvételek sokasága bizonyítja tartós megtelepedését az Északi-középhegység számos pontján. ',
    alt:'hiúz'
  };

  let data7 = {
    photo: 'images/vidra.jpg',
    title: 'Az év emlőse 2020: a vidra',
    description: 'A vidra (Lutra lutra) vizeink egyik csúcsragadozója. Áramvonalas, torpedó alakú testüket rendkívül dús, jó hőszigetelésű szőrzet borítja. A vadászathoz szükséges gyors úszását ujjai között feszülő úszóhártyák segítik. A vidra a sérült, gyengébb, illetve idegenhonos inváziós halak és rákok pusztításával az élővizek őshonos élővilágának fennmaradásához is hozzájárul.',
    alt:'vidra'
  };

let imagesData =[data1, data2, data3, data4, data5, data6, data7];

let currentPhoto =0;

$('#photo-title').text(data1.title);

$('#photo-description').text(data1.description);

$('#photo').attr('alt', data1.alt);

$('#photo').attr('src', imagesData[0].photo);

$('.right').click(() => {

    console.log(currentPhoto);

    currentPhoto = currentPhoto + 1;

    $('#photo').attr('src', imagesData[currentPhoto].photo);

    $('#photo-description').text(imagesData[currentPhoto].description);

    $('#photo-title').text(imagesData[currentPhoto].title);

});

$('.left').click(() => {

    console.log(currentPhoto);

    currentPhoto = currentPhoto - 1;

    $('#photo').attr('src', imagesData[currentPhoto].photo);

    $('#photo-description').text(imagesData[currentPhoto].description);

    $('#photo-title').text(imagesData[currentPhoto].title);

});

imagesData.forEach((photo, index) => {
    // <img id="thumbimage" src="images/sun.jpg">
   $('.thumbs').append('<img id="thumbimage" data-index="${index}" src="${imagesData[index].photo}">');
   

});




