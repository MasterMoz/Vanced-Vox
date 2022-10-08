// 必要な要素を取得
const gameBody = document.body;
const appBody = document.getElementById('app');

//変数を定義
let ccImageWidth = 10
let ccImageHeight = 10
let ccImageUrl



// 設定ボックス
const settingBoxCreate = document.createElement("div"); //<div id="settingBox"></div>を作成する
settingBoxCreate.setAttribute("id", "settingBox"); //idをsettingBoxにする
gameBody.appendChild(settingBoxCreate); //bodyの一番下に挿入
const settingBox = document.getElementById("settingBox"); //<div id="settingBox">をsettingBoxに入れる
const checkBoxCreate = document.createElement("input"); //inputを作成


//checkBox
checkBoxCreate.setAttribute("id", "vCheckBox"); //idをvCheckBoxに
checkBoxCreate.setAttribute("type", "checkbox");
settingBox.appendChild(checkBoxCreate); //settingBoxにadd


//TEXT [URL]
const urlInputLabelCreate = document.createElement("label");
urlInputLabelCreate.setAttribute("value", "URL");
urlInputLabelCreate.setAttribute("id", "urlLabel");
urlInputLabelCreate.textContent = "URL";
settingBox.appendChild(urlInputLabelCreate);
const urlLabel = document.getElementById("urlLabel");


//URL BOX
const urlInputCreate = document.createElement("input");
urlInputCreate.setAttribute("id", "urlBox");
urlInputCreate.setAttribute("type", "text");
urlLabel.appendChild(urlInputCreate);


//Width slider
//widthのホルダー
const widthHolderCreate = document.createElement("div");
widthHolderCreate.setAttribute("id","widthHolder");
settingBox.appendChild(widthHolderCreate);
const widthHolder = document.getElementById("widthHolder");
//これスライダー
const widthSlideCreate = document.createElement("input");
widthSlideCreate.setAttribute("id", "chWidth");
widthSlideCreate.setAttribute("type", "range");
widthSlideCreate.setAttribute("oninput","imgWSet");
widthSlideCreate.defaultValue = ccImageWidth;
widthHolder.appendChild(widthSlideCreate);
//数値表示
const widthValSpanCreate = document.createElement("span");
widthValSpanCreate.setAttribute("id","widthVal");
widthValSpanCreate.textContent = ccImageWidth +'px';
widthHolder.appendChild(widthValSpanCreate);


//Height Slider
//heightのホルダー
const heightHolderCreate = document.createElement("div");
heightHolderCreate.setAttribute("id","heightHolder");
settingBox.appendChild(heightHolderCreate);
const heightHolder = document.getElementById("heightHolder");
//これスライダー
const heightSlideCreate = document.createElement("input");
heightSlideCreate.setAttribute("id", "chWidth");
heightSlideCreate.setAttribute("type", "range");
heightSlideCreate.setAttribute("oninput","imgHSet()");
heightSlideCreate.defaultValue = ccImageHeight;
heightHolder.appendChild(heightSlideCreate);
//数値の表示
const heightValSpanCreate = document.createElement("span");
heightValSpanCreate.setAttribute("id","heightVal");
heightValSpanCreate.textContent = ccImageHeight + 'px';
heightHolder.appendChild(heightValSpanCreate);


//aimbot menu
const aimbotLabelCreate = document.createElement("label");
aimbotLabelCreate.setAttribute("id","aimbotLabel");
aimbotLabelCreate.textContent = "Aimbot";
settingBox.appendChild(aimbotLabelCreate);
const aimbotLabel = document.getElementById("aimbotLabel");

const aimbotCreate = document.createElement("input");
aimbotCreate.setAttribute("id","aimbotButton");
aimbotCreate.setAttribute("type","button");
aimbotCreate.setAttribute("value","ENABLE");
aimbotCreate.setAttribute("onclick","rickroll()");
aimbotLabel.appendChild(aimbotCreate);

// クロスヘア
const crosshairCreate = document.createElement("img");
crosshairCreate.setAttribute("id", "crosshair");
appBody.appendChild(crosshairCreate);

//function.jsを読み込み
const script = document.createElement('script');
script.src = chrome.runtime.getURL('function.js');
gameBody.appendChild(script);