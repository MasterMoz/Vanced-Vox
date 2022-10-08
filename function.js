//変数を指定
const chHolder = document.getElementById("crosshair");
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


//width slider
window.onload = imgWSet();

function imgWSet(){
    const widthVal = document.getElementById("chWidth").value;
    document.getElementById("widthVal").innerHTML = widthVal + 'px';
    ccImageWidth = document.getElementById("chWidth").value;
    chHolder.setAttribute("width",widthVal);
}

//height slider
function imgHSet(){
    document.getElementById("heightVal").innerHTML = document.getElementById("chHeight").value + 'px';
}





//aimbot rickroll
function rickroll(){
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}
