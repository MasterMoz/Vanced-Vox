//変数を指定
let chHolder = document.getElementById("crosshair");
let hide1 = document.getElementById("title");
let hide2 = document.getElementById("crosshairSettingBox"); hide3 = document.getElementById("settingBox");
let hide4 = document.getElementById("logoHolder");


cBoxVal = localStorage.getItem("checkBoxSaved");

//表示非表示チェックボックス

function checkBox() {
  const checkbox = document.getElementById("vCheckBox");
  let checktf = checkbox.checked;
  if (checktf) {
    localStorage.setItem("checkBoxSaved", "true");
    console.log("true");
    hide1.setAttribute("class", "");
    hide2.setAttribute("class", "");
    hide3.setAttribute("class", "");
    hide4.setAttribute("class", "");
  } else if (!checktf) {
    localStorage.setItem("checkBoxSaved", "false");
    console.log("false");
    hide1.setAttribute("class", "hiddenClass");
    hide2.setAttribute("class", "hiddenClass");
    hide3.setAttribute("class", "hiddenClassSetting");
    hide4.setAttribute("class", "hiddenClass");
  }
}

//設定ボックスの表示・非表示を切り替える

vcheck = document.getElementById("vCheckBox");
let loadChecker = setInterval(findElm2, 10);
let retry = 0;
function findElm2(){
    retry++
    const tarElm1 = document.getElementsByClassName('logoHolder');
    console.log(retry + ' hidden');
console.log(tarElm1);
    if(tarElm1.length > 0){
        console.log("waaa");
        window.onload = cbLoaded();
        clearInterval(loadChecker);
    }else if (retry >= 1000){
        clearInterval(loadChecker);
    }
}

function cbLoaded() {
  if (cBoxVal === "true") {
    console.log(cBoxVal + "/ true check");
    vcheck.checked = true;
    console.log("default is true");
    hide1.setAttribute("class", "");
    hide2.setAttribute("class", "");
    hide3.setAttribute("class", "");
    hide4.setAttribute("class", "");
  } else if (cBoxVal === "false") {
    console.log(cBoxVal + "/ false check");
    vcheck.checked = false;
    console.log("default is false");
    hide1.setAttribute("class", "hiddenClass");
    hide2.setAttribute("class", "hiddenClass");
    hide3.setAttribute("class", "hiddenClassSetting");
    hide4.setAttribute("class", "hiddenClass");
  }
}

//width slider
window.onload = imgWSet();

//スライダー側
function imgWSet() {
  const widthVal = document.getElementById("chWidth").value;
  document.getElementById("widthVal").value = widthVal;
  ccImageWidth = document.getElementById("chWidth").value;
  chHolder.setAttribute("width", widthVal + "px");
  localStorage.setItem("crosshairWidthSaved", widthVal);
}
//numberのinput側
function imgWSet1() {
  const widthVal = document.getElementById("widthVal").value;
  chHolder.setAttribute("width", widthVal + "px");
  document.getElementById("chWidth").value = widthVal;
}

//height slider
window.onload = imgHSet();
//スライダー側
function imgHSet() {
  const heightVal = document.getElementById("chHeight").value;
  document.getElementById("heightVal").value = heightVal;
  ccImageHeight = document.getElementById("chHeight").value;
  chHolder.setAttribute("height", heightVal + "px");
  localStorage.setItem("crosshairHeightSaved", heightVal);
}
//numberのinput側
function imgHSet1() {
  const heightVal = document.getElementById("heightVal").value;
  chHolder.setAttribute("height", heightVal + "px");
  //スライダーのvalueを変更
  document.getElementById("chHeight").value = heightVal;
}

//URLを設定
function imgUrlSet() {
  const imageUrl = document.getElementById("urlBox").value;
  chHolder.setAttribute("src", imageUrl);
  localStorage.setItem("crosshairUrlSaved", imageUrl);
}

//auto default size
function defaultSize() {
  const crosshairImage = document.getElementById("crosshair");
  //画像サイズの取得
  let imgWidth = crosshairImage.naturalWidth;
  let imgHeight = crosshairImage.naturalHeight;
  console.log("Width is " + imgWidth + "px");
  console.log("Height is " + imgHeight + "px");
  //画像サイズ
  chHolder.setAttribute("width", imgWidth + "px");
  chHolder.setAttribute("height", imgHeight + "px");
  //pxの表示
  document.getElementById("widthVal").value = imgWidth;
  document.getElementById("heightVal").value = imgHeight;
  //localstorageに格納
  localStorage.setItem("crosshairWidthSaved", imgWidth);
  localStorage.setItem("crosshairHeightSaved", imgHeight);
  //スライダーのvalueを変更
  document.getElementById("chWidth").value = imgWidth;
  document.getElementById("chHeight").value = imgHeight;
}



//ロゴを設定する
let logoFinder = setInterval(findElm, 10);
let retry_counter = 0;
let max_retry = 30000;

function findElm() {
  retry_counter++;
  console.log(retry_counter);
  if(retry_counter > max_retry){
    clearInterval(logoFinder);
  }
  const targetElm = document.getElementsByClassName('hrxbol');
  const targetElm2 = document.getElementsByClassName('yYlig');
  if (targetElm.length > 0 && targetElm2.length > 0) {
    console.log(targetElm);
    console.log("unko");
    let logoTextVal = localStorage.getItem("logoTextSaved");
    let logoUrlVal = localStorage.getItem("logoUrlSaved");
    const logoText = document.getElementsByClassName("yYlig")[0];
    logoText.textContent = logoTextVal;
    const logo = document.getElementsByClassName("hrxbol")[0];
    logo.setAttribute("src", logoUrlVal);
    clearInterval(logoFinder);
  }
}


function logoUrlSet(){
    const logoUrlInput = document.getElementById('logoUrlInput').value
    console.log(logoUrlInput);
    const logo = document.getElementsByClassName("hrxbol")[0];
    logo.setAttribute("src", logoUrlInput);
    localStorage.setItem('logoUrlSaved',logoUrlInput);
};

function logoTextSet(){
    const logoTextInput = document.getElementById('logoTextInput').value
    console.log(logoTextInput);
    const logoText = document.getElementsByClassName("yYlig")[0];
    logoText.textContent = logoTextInput;
    localStorage.setItem('logoTextSaved',logoTextInput);
}