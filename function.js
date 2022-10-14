//変数を指定
let chHolder = document.getElementById("crosshair");
let hide1 = document.getElementById("title");
let hide2 = document.getElementById("crosshairSettingBox");
let hide3 = document.getElementById("settingBox");
let hide4 = document.getElementById("logoHolder");
let hide5 = document.getElementsByClassName("spacer")[0];
let hide6 = document.getElementsByClassName("spacer")[1];
let hide7 = document.getElementById("bgChangeHolder");

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
    hide4.setAttribute("class", "logoHolder");
    hide5.setAttribute("class", "spacer");
    hide6.setAttribute("class", "spacer");
    hide7.setAttribute("class", "");
  } else if (!checktf) {
    localStorage.setItem("checkBoxSaved", "false");
    console.log("false");
    hide1.setAttribute("class", "hiddenClass");
    hide2.setAttribute("class", "hiddenClass");
    hide3.setAttribute("class", "hiddenClassSetting");
    hide4.setAttribute("class", "logoHolder");
    hide4.setAttribute("class", "hiddenClass");
    hide5.setAttribute("class", "spacer");
    hide5.setAttribute("class", "hiddenClass");
    hide6.setAttribute("class", "hiddenClass");
    hide6.setAttribute("class", "spacer");
    hide7.setAttribute("class", "hiddenClass");
  }
}

//設定ボックスの表示・非表示を切り替える

vcheck = document.getElementById("vCheckBox");
let loadChecker = setInterval(findElm2, 10);
let retry = 0;
function findElm2() {
  retry++;
  const tarElm1 = document.getElementsByClassName("logoHolder");
  console.log(retry + " hidden");
  console.log(tarElm1);
  if (tarElm1.length > 0) {
    console.log("waaa");
    window.onload = cbLoaded();
    clearInterval(loadChecker);
  } else if (retry >= 1000) {
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
    hide5.setAttribute("class", "");
    hide6.setAttribute("class", "");
    hide7.setAttribute("class", "");
  } else if (cBoxVal === "false") {
    console.log(cBoxVal + "/ false check");
    vcheck.checked = false;
    console.log("default is false");
    hide1.setAttribute("class", "hiddenClass");
    hide2.setAttribute("class", "hiddenClass");
    hide3.setAttribute("class", "hiddenClassSetting");
    hide4.setAttribute("class", "hiddenClass");
    hide5.setAttribute("class", "hiddenClass");
    hide6.setAttribute("class", "hiddenClass");
    hide7.setAttribute("class", "hiddenClass");
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
window.onload = logoOnLoad();
function logoOnLoad() {
  const urlVal = document.getElementById("logoUrlInput");
  const textlVal = document.getElementById("logoTextInput");
  let logoTextVal = localStorage.getItem("logoTextSaved");
  let logoUrlVal = localStorage.getItem("logoUrlSaved");
  urlVal.value = logoUrlVal;
  textlVal.value = logoTextVal;
}

//ロゴの要素が追加されるまで監視する
let logoFinder = setInterval(findElm, 10);
let retry_counter = 0;
let max_retry = 30000;

//ロゴ要素が追加されたときの処理
function findElm() {
  retry_counter++;
  console.log(retry_counter);
  if (retry_counter > max_retry) {
    clearInterval(logoFinder);
  }
  const targetElm = document.getElementsByClassName("hrxbol");
  const targetElm2 = document.getElementsByClassName("yYlig");

  if (targetElm.length > 0 && targetElm2.length > 0) {
    console.log(targetElm);
    let logoTextVal = localStorage.getItem("logoTextSaved");
    let logoUrlVal = localStorage.getItem("logoUrlSaved");
    const logoText = document.getElementsByClassName("yYlig")[0];
    logoText.textContent = logoTextVal;

    const logo = document.getElementsByClassName("hrxbol")[0];
    logo.setAttribute("src", logoUrlVal);

    clearInterval(logoFinder);
  }
}

//背景の画像・色の読み込み時の切り替え
bgStyle = localStorage.getItem("bgStyleSaved");
if(bgStyle == "image"){
  const imageInput = document.getElementById('bgUrlLabel');
  const colorInput = document.getElementById('bgColorHolder');
  imageInput.setAttribute("class","");
  colorInput.setAttribute("class","hiddenClass");

}else if(bgStyle == "color"){
  const imageInput = document.getElementById('bgUrlLabel');
  const colorInput = document.getElementById('bgColorHolder');
  imageInput.setAttribute("class","hiddenClass");
  colorInput.setAttribute("class","");
}



//Logo urlが入力された
function logoUrlSet() {
  const logo = document.getElementsByClassName("hrxbol")[0];
  const logoUrlInput = document.getElementById("logoUrlInput").value;
  console.log(logoUrlInput);
  if(logoUrlInput.length < 1){
    localStorage.setItem(
      "logoUrlSaved",
      "https://voxiom.io/package/ea55824826de52b7ccc3.png");
    document.getElementById("logoUrlInput").value = localStorage.getItem('logoUrlSaved');
  }else{
  logo.setAttribute("src", logoUrlInput);
  localStorage.setItem("logoUrlSaved", logoUrlInput);
  }
}

//ロゴの下の文字が入力された時の処理
function logoTextSet() {
  const logoTextInput = document.getElementById("logoTextInput").value;
  console.log(logoTextInput);
  const logoText = document.getElementsByClassName("yYlig")[0];
  logoText.textContent = logoTextInput;
  localStorage.setItem("logoTextSaved", logoTextInput);
}

//画像と色のどちらかを選択する
function bgSelector(){
  const imageInput = document.getElementById('bgUrlLabel');
  const colorInput = document.getElementById('bgColorHolder');
  const selector = document.getElementById('bgSelect').value;
  if(selector == "image"){
    console.log("image");
    imageInput.setAttribute("class", "");
    colorInput.setAttribute("class", "hiddenClass");
    localStorage.setItem("bgStyleSaved",selector);
    bgUrlSet();
  }else if(selector == "color"){
    console.log('color');
    imageInput.setAttribute("class","hiddenClass");
    colorInput.setAttribute("class","");
    localStorage.setItem("bgStyleSaved",selector);
    bgColorVal = localStorage.getItem("bgColorSaved");
    document.documentElement.style.setProperty('--bgUrl',bgColorVal);
  }else{
    console.log("error")
  }
}
// 画像の設定
function bgUrlSet(){
  bg = document.getElementsByClassName('bNczYf')[0];
  bgUrl = document.getElementById('bgUrlInput').value;
    if(bgUrl.length < 1){
      document.documentElement.style.setProperty('--bgUrl','url(https://voxiom.io/package/c30b27cd3f6c8d9bb236.jpg)');
      localStorage.setItem(
        "bgUrlSaved",
        "https://voxiom.io/package/c30b27cd3f6c8d9bb236.jpg"
        );
        document.getElementById('bgUrlInput').value = localStorage.getItem('bgUrlSaved')
  }else{
    document.documentElement.style.setProperty('--bgUrl','url('+bgUrl+')');
    localStorage.setItem(
      "bgUrlSaved",
      bgUrl
      );
  }
  console.log(bgUrl);
}
function colorPick1(){
  let colorDeg = localStorage.getItem('colorDegSaved');
  let color1 = localStorage.getItem('color1Saved');
  let color2 = localStorage.getItem('color2Saved');
  let color3 = localStorage.getItem('color3Saved');
  const colorInput = document.getElementById('colorInput1');
  console.log(colorInput.value);
  color1 = colorInput.value;
  localStorage.setItem('color1Saved',color1);
  bgColorVal ='linear-gradient(' + colorDeg + 'deg ,' + color1 + ',' + color2 + ',' + color3 + ')'
  document.documentElement.style.setProperty('--bgUrl',bgColorVal);
  console.log(bgColorVal)
}
function colorPick2(){
  let colorDeg = localStorage.getItem('colorDegSaved');
  let color1 = localStorage.getItem('color1Saved');
  let color2 = localStorage.getItem('color2Saved');
  let color3 = localStorage.getItem('color3Saved');
  const colorInput = document.getElementById('colorInput2');
  console.log(colorInput.value);
  color2 = colorInput.value;
  localStorage.setItem('color2Saved',color2);
  bgColorVal ='linear-gradient(' + colorDeg + 'deg ,' + color1 + ',' + color2 + ',' + color3 + ')'
  document.documentElement.style.setProperty('--bgUrl',bgColorVal);
  console.log(bgColorVal)
}
function colorPick3(){
  let colorDeg = localStorage.getItem('colorDegSaved');
  let color1 = localStorage.getItem('color1Saved');
  let color2 = localStorage.getItem('color2Saved');
  let color3 = localStorage.getItem('color3Saved');
  const colorInput = document.getElementById('colorInput3');
  console.log(colorInput.value);
  color3 = colorInput.value;
  localStorage.setItem('color3Saved',color3);
  bgColorVal ='linear-gradient(' + colorDeg + 'deg ,' + color1 + ',' + color2 + ',' + color3 + ')'
  document.documentElement.style.setProperty('--bgUrl',bgColorVal);
  console.log(bgColorVal)
}