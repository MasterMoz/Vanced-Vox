// 必要な要素を取得
const gameBody = document.body;
const appBody = document.getElementById('app');

//変数を定義
let ccImageWidth
let ccImageHeight
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
const widthSlideCreate = document.createElement("input");
widthSlideCreate.setAttribute("id", "chWidth");
widthSlideCreate.setAttribute("type", "range");
widthSlideCreate.defaultValue = ccImageWidth;
settingBox.appendChild(widthSlideCreate);


//Height Slider
const heightSlideCreate = document.createElement("input");
heightSlideCreate.setAttribute("id", "chWidth");
heightSlideCreate.setAttribute("type", "range");
heightSlideCreate.defaultValue = ccImageHeight;
settingBox.appendChild(heightSlideCreate);


// クロスヘア
const crosshairCreate = document.createElement("img");
crosshairCreate.setAttribute("id", "crosshair");
appBody.appendChild(crosshairCreate);


// クロスヘア用コード
window.imgSetClick = () => {
    const ccImageUrl = document
        .getElementById('urlBox')
        .value;
    ccImageWidth = document
        .getElementById('chWidth')
        .value;
    localStorage.setItem.cImgW = ccImageWidth;
    ccImageHeight = document
        .getElementById('chHeight')
        .value;
    localStorage.setItem.cImgH = ccImageHeight;
    ccImage.innerHTML = `<img src="${ccImageUrl}" width="${ccImageWidth}" height="${ccImageHeight}"/>`;
    // テンプレートリテラル:
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Template_literals
};