
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

//aimbot rickroll
function rickroll(){
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}


//width slider
function imgWSet(){
    document.getElementById("")
}

//height slider
function imgHSet()
