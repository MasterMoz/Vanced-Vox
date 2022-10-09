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
if (!chWidthVal){
        localStorage.setItem('crosshairWidthSaved','32');
};
//クロスヘアの高さをローカルストレージに
let chHeightVal = localStorage.getItem('crosshairHeightSaved');
if (!chHeightVal){
        localStorage.setItem('crosshairHeightSaved','32');
};
//クロスヘアのurlを初期設定
let chUrlVal = localStorage.getItem('crosshairUrlSaved');
if (!chUrlVal){
        localStorage.setItem('crosshairUrlSaved','https://cdn.discordapp.com/attachments/616206938048561152/922367836574335036/New_Piskel_49.png')
};
chUrlVal = localStorage.getItem('crosshairUrlSaved');

//表示非表示チェックボックスの初期設定およびうんたらかんたら
let cBoxVal = localStorage.getItem('checkBoxSaved');


//settingBox
const settingBoxCreate = document.createElement('div'); //<div id='settingBox'></div>を作成する
settingBoxCreate.setAttribute('id', 'settingBox'); //idをsettingBoxにする
gameBody.appendChild(settingBoxCreate); //bodyの一番下に挿入
const settingBox = document.getElementById('settingBox'); //<div id='settingBox'>をsettingBoxに入れる

//titleHolder
const titleHCreate = document.createElement('div');
titleHCreate.setAttribute('id','titleHolder');
settingBox.appendChild(titleHCreate);
const titleHolder = document.getElementById('titleHolder')
const titleCreate = document.createElement('h2');
titleCreate.setAttribute('id','title');
titleCreate.textContent = 'VancedVoxiom';
titleHolder.appendChild(titleCreate);

//Show <-> Hide checkbox
const cBoxLabelCreate = document.createElement('label');//input+abelを作成
cBoxLabelCreate.setAttribute('id','cBoxLabel');
cBoxLabelCreate.setAttribute('value','vCBox');
titleHolder.appendChild(cBoxLabelCreate);
const cBoxLabel = document.getElementById('cBoxLabel');

const checkBoxCreate = document.createElement('input'); //inputを作成
checkBoxCreate.setAttribute('id', 'vCheckBox'); //idをvCheckBoxに
checkBoxCreate.setAttribute('onChange','checkBox()')
checkBoxCreate.setAttribute('type', 'checkbox');
checkBoxCreate.setAttribute('value','vCBox');
cBoxLabel.appendChild(checkBoxCreate); //settingBoxにadd
const vcheck = document.getElementById('vCheckBox');
if (cBoxVal = true){
        vcheck.checked = true;
}else if (cBoxVal = false){
        vcheck.checked = false;
}
const cBoxSpan = document.createElement('span');
cBoxSpan.setAttribute('id','cBoxDeco');
cBoxLabel.appendChild(cBoxSpan);



//crosshairBoxHolder
const crosshairBoxCreate = document.createElement('div');
crosshairBoxCreate.setAttribute('id','crosshairSettingBox');
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
urlInputCreate.setAttribute('oninput', 'imgUrlSet()');
urlLabel.appendChild(urlInputCreate);
document.getElementById('urlBox').value = localStorage.getItem('crosshairUrlSaved');


//Width slider
//widthのホルダー
chWidthVal = localStorage.getItem('crosshairWidthSave');
const widthHolderCreate = document.createElement('div');
widthHolderCreate.setAttribute('id','widthHolder');
crosshairSettingBox.appendChild(widthHolderCreate);
const widthHolder = document.getElementById('widthHolder');
//widthという文字を表示
const widthTextShowCreate = document.createElement('p');
widthTextShowCreate.textContent = 'W';
widthHolder.appendChild(widthTextShowCreate);
//これスライダー
const widthSlideCreate = document.createElement('input');
widthSlideCreate.setAttribute('id', 'chWidth');
widthSlideCreate.setAttribute('max','1000');
widthSlideCreate.setAttribute('type', 'range');
widthSlideCreate.setAttribute('onInput','imgWSet()');
widthSlideCreate.defaultValue = localStorage.getItem('crosshairWidthSaved');
widthHolder.appendChild(widthSlideCreate);
//数値表示
const widthValSpanCreate = document.createElement('input');
widthValSpanCreate.setAttribute('id','widthVal');
widthValSpanCreate.setAttribute('type','number');
widthValSpanCreate.setAttribute('onInput','imgWSet1()');
widthHolder.appendChild(widthValSpanCreate);


//Height Slider
//heightのホルダー
const heightHolderCreate = document.createElement('div');
heightHolderCreate.setAttribute('id','heightHolder');
crosshairSettingBox.appendChild(heightHolderCreate);
const heightHolder = document.getElementById('heightHolder');
//heightという文字を表示
const heightTextShowCreate = document.createElement('p');
heightTextShowCreate.textContent = 'H';
heightHolder.appendChild(heightTextShowCreate);
//これスライダー
const heightSlideCreate = document.createElement('input');
heightSlideCreate.setAttribute('max','1000');
heightSlideCreate.setAttribute('id', 'chHeight');
heightSlideCreate.setAttribute('type', 'range');
heightSlideCreate.setAttribute('onInput','imgHSet()');
heightSlideCreate.defaultValue = localStorage.getItem('crosshairHeightSaved');
heightHolder.appendChild(heightSlideCreate);


//数値の表示
const heightValSpanCreate = document.createElement('input');
heightValSpanCreate.setAttribute('id','heightVal');
heightValSpanCreate.setAttribute('type','number');
heightValSpanCreate.setAttribute('oninput','imgHSet1()');
heightHolder.appendChild(heightValSpanCreate);


//自動で元のサイズにする
const defaultSizeButtonCreate = document.createElement('input');
defaultSizeButtonCreate.setAttribute('id','defaultSizeButton');
defaultSizeButtonCreate.setAttribute('type','button');
defaultSizeButtonCreate.setAttribute('value','Auto Default Size');
defaultSizeButtonCreate.setAttribute('onclick','defaultSize()')
crosshairSettingBox.appendChild(defaultSizeButtonCreate);


// クロスヘア
const crosshairCreate = document.createElement('img');
crosshairCreate.setAttribute('id', 'crosshair');
crosshairCreate.setAttribute('src',chUrlVal);
appBody.prepend(crosshairCreate);


//function.jsを読み込み
const script = document.createElement('script');
script.src = chrome.runtime.getURL('function.js');
gameBody.appendChild(script);