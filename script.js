// 必要な要素を取得
const gameBody = document.body;
const appBody = document.getElementById('app');

// 設定ボックス
const settingBoxCreate = document.createElement("div"); //<div id="settingBox"></div>を作成する
settingBoxCreate.setAttribute("id","settingBox"); //idをsettingBoxにする
gameBody.appendChild(settingBoxCreate); //bodyの一番下に挿入

const settingBox = document.getElementById("settingBox"); //<div id="settingBox">をsettingBoxに入れる

let checkBoxCreate = document.createElement("input"); //inputを作成
checkBoxCreate.setAttribute("id","vCheckBox"); //idをvCheckBoxに
checkBoxCreate.setAttribute("type","checkbox");
settingBox.appendChild(checkBoxCreate); //settingBoxについか

let urlInputLabelCreate = document.createElement("label");
urlInputLabelCreate.setAttribute("value","URL");
urlInputLabelCreate.setAttribute("id","urlLabel");
urlInputLabelCreate.textContent = "URL";
settingBox.appendChild(urlInputLabelCreate);

const urlLabel = document.getElementById("urlLabel");

let urlInputCreate = document.createElement("input");
urlInputCreate.setAttribute("id","urlBox");
urlInputCreate.setAttribute("type","text");
urlLabel.appendChild(urlInputCreate);


// クロスヘア
const crosshairCreate = createElement("div");
crosshairCreate.setAttribute("id","crosshair");
appBody.appendChild(crosshairCreate);

let crosshairWidth = getComputedStyle(gameBody).getPropertyValue("--ch-width");
let crosshairHeight = getComputedStyle(gameBody).getPropertyValue("--ch-height");
// クロスヘア用コード
window.imgSetClick = () => {
    const ccImage = document.getElementById('crosshair');
    const setBtn = document.getElementById('setButton');
    const ccImageUrl = document
        .getElementById('urlBox')
        .value;
    const ccImageWidth = document
        .getElementById('chWidth')
        .value;
    const ccImageHeight = document
        .getElementById('chHeight')
        .value;
    ccImage.innerHTML = `<img src="${ccImageUrl}" width="${ccImageWidth}" height="${ccImageHeight}"/>`;
    // テンプレートリテラル:
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Template_literals
};

//style

const style =`<style type="text/css">
@import url("style.css");
@import url("https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic&display=swap");
</style>`

gameBody.insertAdjacentHTML('beforeend',style);