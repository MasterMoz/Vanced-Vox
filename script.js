//要素ごとに２改行


// bodyと#appを取得
const gameBody = document.body;
const appBody = document.getElementById('app');


//要素の定義
let ccImageWidth
let ccImageHeight
let ccImageUrl




//ローカルストレージへの初期設定
//クロスヘアの幅
let chWidthVal = localStorage.getItem('crosshairWidthSaved');
if (!chWidthVal) {
        localStorage.setItem('crosshairWidthSaved', '32');
};
console.log(chWidthVal + ' crosshair width')


//クロスヘアの高さをローカルストレージに
let chHeightVal = localStorage.getItem('crosshairHeightSaved');
if (!chHeightVal) {
        localStorage.setItem('crosshairHeightSaved', '32');
};
console.log(chHeightVal + ' crosshair height');


//クロスヘアのurlを初期設定
let chUrlVal = localStorage.getItem('crosshairUrlSaved');
if (!chUrlVal) {
        localStorage.setItem('crosshairUrlSaved', 'https://cdn.discordapp.com/attachments/616206938048561152/922367836574335036/New_Piskel_49.png')
};
chUrlVal = localStorage.getItem('crosshairUrlSaved');
console.log(chUrlVal + ' crosshair Url')


//ロゴの初期値を設定
let logoUrlVal = localStorage.getItem('logoUrlSaved');
if (!logoUrlVal) {
        console.log('logo not rdy');
        localStorage.setItem('logoUrlSaved', 'https://voxiom.io/package/ea55824826de52b7ccc3.png');
}
logoUrlVal = localStorage.getItem('logoUrlSaved');
console.log(logoUrlVal + ' logo url');


//ロゴの文字の初期値を設定
let logoTextVal = localStorage.getItem('logoTextSaved');
if (!logoTextVal) {
        console.log('logo text is none');
        localStorage.setItem('logoTextSaved', 'Open Alpha Testing - Pre-Season')
}
logoTextVal = localStorage.getItem('logoTextSaved');
console.log(logoTextVal + ' / logo text');



//表示非表示チェックボックスの初期設定およびうんたらかんたら
let cBoxVal = localStorage.getItem('checkBoxSaved');
console.log(cBoxVal + ' cBoxVal');
console.log(localStorage.getItem('checkBoxSaved') + ' visible');

if (cBoxVal == null) {
        console.log(cBoxVal + ' / null');
        localStorage.setItem('checkBoxSaved', 'true');
} else if (cBoxVal === "true") {
        console.log(cBoxVal + ' / true');
} else if (cBoxVal === "false") {
        console.log(cBoxVal + ' / false');
} else {
        console.log('hoge');
}
cBoxVal = localStorage.getItem('checkBoxSaved');
console.log(cBoxVal + ' visible');

//settingBox
const settingBoxCreate = document.createElement('div'); //<div id='settingBox'></div>を作成する
settingBoxCreate.setAttribute('id', 'settingBox'); //idをsettingBoxにする
gameBody.appendChild(settingBoxCreate); //bodyの一番下に挿入
const settingBox = document.getElementById('settingBox'); //<div id='settingBox'>をsettingBoxに入れる


//titleHolder
const titleHCreate = document.createElement('div');
titleHCreate.setAttribute('id', 'titleHolder');
settingBox.appendChild(titleHCreate);
const titleHolder = document.getElementById('titleHolder')
const titleCreate = document.createElement('h2');
titleCreate.setAttribute('id', 'title');
titleCreate.textContent = 'VancedVoxiom';
titleHolder.appendChild(titleCreate);


//Show <-> Hide checkbox
const cBoxLabelCreate = document.createElement('label');//input+abelを作成
cBoxLabelCreate.setAttribute('id', 'cBoxLabel');
cBoxLabelCreate.setAttribute('value', 'vCBox');
titleHolder.appendChild(cBoxLabelCreate);
const cBoxLabel = document.getElementById('cBoxLabel');

const checkBoxCreate = document.createElement('input'); //inputを作成
checkBoxCreate.setAttribute('id', 'vCheckBox'); //idをvCheckBoxに
checkBoxCreate.setAttribute('onChange', 'checkBox()')
checkBoxCreate.setAttribute('type', 'checkbox');
checkBoxCreate.setAttribute('value', 'vCBox');
cBoxLabel.appendChild(checkBoxCreate); //settingBoxにadd
let vcheck = document.getElementById('vCheckBox');
const cBoxSpan = document.createElement('span');
cBoxSpan.setAttribute('id', 'cBoxDeco');
cBoxLabel.appendChild(cBoxSpan);

//spacer
let spacer = document.createElement('div');
spacer.setAttribute('class', 'spacer');
settingBox.appendChild(spacer);

//title
const crosshairHolderTitleCreate = document.createElement('h3');
crosshairHolderTitleCreate.setAttribute('class', 'fncTitle');
crosshairHolderTitleCreate.textContent = '- Crosshair -'
settingBox.appendChild(crosshairHolderTitleCreate);

//crosshairSettingBoxHolder
const crosshairBoxCreate = document.createElement('div');
crosshairBoxCreate.setAttribute('id', 'crosshairSettingBox');
settingBox.appendChild(crosshairBoxCreate);
const crosshairSettingBox = document.getElementById('crosshairSettingBox');





//TEXT [URL]
const urlInputLabelCreate = document.createElement('label');
urlInputLabelCreate.setAttribute('id', 'urlLabel');
urlInputLabelCreate.textContent = 'URL';
crosshairSettingBox.appendChild(urlInputLabelCreate);
const urlLabel = document.getElementById('urlLabel');


//URL INPUT BOX
const urlInputCreate = document.createElement('input');
urlInputCreate.setAttribute('id', 'urlBox');
urlInputCreate.setAttribute('type', 'text');
urlInputCreate.setAttribute('class', 'inputText');
urlInputCreate.setAttribute('oninput', 'imgUrlSet()');
urlLabel.appendChild(urlInputCreate);
document.getElementById('urlBox').value = localStorage.getItem('crosshairUrlSaved');


//Width slider
//widthのホルダー
chWidthVal = localStorage.getItem('crosshairWidthSave');
const widthHolderCreate = document.createElement('div');
widthHolderCreate.setAttribute('id', 'widthHolder');
crosshairSettingBox.appendChild(widthHolderCreate);
const widthHolder = document.getElementById('widthHolder');
//widthという文字を表示
const widthTextShowCreate = document.createElement('p');
widthTextShowCreate.textContent = 'W';
widthHolder.appendChild(widthTextShowCreate);
//これスライダー
const widthSlideCreate = document.createElement('input');
widthSlideCreate.setAttribute('id', 'chWidth');
widthSlideCreate.setAttribute('max', '1000');
widthSlideCreate.setAttribute('type', 'range');
widthSlideCreate.setAttribute('onInput', 'imgWSet()');
widthSlideCreate.defaultValue = localStorage.getItem('crosshairWidthSaved');
widthHolder.appendChild(widthSlideCreate);
//数値表示
const widthValSpanCreate = document.createElement('input');
widthValSpanCreate.setAttribute('id', 'widthVal');
widthValSpanCreate.setAttribute('type', 'number');
widthValSpanCreate.setAttribute('onInput', 'imgWSet1()');
widthHolder.appendChild(widthValSpanCreate);


//Height Slider
//heightのホルダー
const heightHolderCreate = document.createElement('div');
heightHolderCreate.setAttribute('id', 'heightHolder');
crosshairSettingBox.appendChild(heightHolderCreate);
const heightHolder = document.getElementById('heightHolder');
//heightという文字を表示
const heightTextShowCreate = document.createElement('p');
heightTextShowCreate.textContent = 'H';
heightHolder.appendChild(heightTextShowCreate);
//これスライダー
const heightSlideCreate = document.createElement('input');
heightSlideCreate.setAttribute('max', '1000');
heightSlideCreate.setAttribute('id', 'chHeight');
heightSlideCreate.setAttribute('type', 'range');
heightSlideCreate.setAttribute('onInput', 'imgHSet()');
heightSlideCreate.defaultValue = localStorage.getItem('crosshairHeightSaved');
heightHolder.appendChild(heightSlideCreate);
//数値の表示
const heightValSpanCreate = document.createElement('input');
heightValSpanCreate.setAttribute('id', 'heightVal');
heightValSpanCreate.setAttribute('type', 'number');
heightValSpanCreate.setAttribute('oninput', 'imgHSet1()');
heightHolder.appendChild(heightValSpanCreate);


//自動で元のサイズにする
const defaultSizeButtonCreate = document.createElement('input');
defaultSizeButtonCreate.setAttribute('class', 'defaultSizeButton');
defaultSizeButtonCreate.setAttribute('type', 'button');
defaultSizeButtonCreate.setAttribute('value', 'Auto Default Size');
defaultSizeButtonCreate.setAttribute('onclick', 'defaultSize()')
crosshairSettingBox.appendChild(defaultSizeButtonCreate);


//spacer
spacer = document.createElement('div');
spacer.setAttribute('class', 'spacer');
settingBox.appendChild(spacer);


//logo holder
const logoHolderCreate = document.createElement("div");
logoHolderCreate.setAttribute('class', 'logoHolder');
logoHolderCreate.setAttribute('id', 'logoHolder');
settingBox.appendChild(logoHolderCreate);
const logoHolder = document.getElementById('logoHolder')


//title
const logoHolderTitleCreate = document.createElement('h3');
logoHolderTitleCreate.setAttribute('class', 'fncTitle');
logoHolderTitleCreate.textContent = '- Logo changer -'
logoHolder.appendChild(logoHolderTitleCreate);


//Logo url input label
const logoUrlInputLabelCreate = document.createElement('label');
logoUrlInputLabelCreate.setAttribute('id', 'logoUrlLabel');
logoUrlInputLabelCreate.textContent = 'URL';
logoHolder.appendChild(logoUrlInputLabelCreate);
const logoUrlLabel = document.getElementById('logoUrlLabel');
//Logo url input
const logoUrlInputCreate = document.createElement('input');
logoUrlInputCreate.setAttribute('type', 'text');
logoUrlInputCreate.setAttribute('id', 'logoUrlInput')
logoUrlInputCreate.setAttribute('oninput', 'logoUrlSet()');
logoUrlInputCreate.setAttribute('class', 'inputText');
logoUrlInputCreate.textContent = logoUrlVal;
logoUrlLabel.appendChild(logoUrlInputCreate);

//Logo txt input label
const logoTextInputLabelCreate = document.createElement('label');
logoTextInputLabelCreate.setAttribute('id', 'logoTextLabel');
logoTextInputLabelCreate.textContent = 'TEXT';
logoHolder.appendChild(logoTextInputLabelCreate);
const logoTextLabel = document.getElementById('logoTextLabel');
//Logo txt input
const logoTextInputCreate = document.createElement('input');
logoTextInputCreate.setAttribute('type', 'text');
logoTextInputCreate.setAttribute('id', 'logoTextInput')
logoTextInputCreate.setAttribute('oninput', 'logoTextSet()');
logoTextInputCreate.setAttribute('class', 'inputText');
logoTextInputCreate.textContent = logoTextVal;
logoTextLabel.appendChild(logoTextInputCreate);




// クロスヘア
const crosshairCreate = document.createElement('img');
crosshairCreate.setAttribute('id', 'crosshair');
crosshairCreate.setAttribute('src', chUrlVal);
appBody.prepend(crosshairCreate);


//stylesheet
let style = document.createElement('style');
let css = `@import url("https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic&display=swap");/*フォントの追加*/*,* *,body,html {font-family: "Zen Maru Gothic" !important;}`
style.innerHTML = css;
gameBody.appendChild(style);


//function.jsを読み込み
const script = document.createElement('script');
script.src = chrome.runtime.getURL('function.js');
gameBody.appendChild(script);

