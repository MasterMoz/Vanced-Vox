//変数を指定
const chHolder = document.getElementById('crosshair');


//width slider
window.onload = imgWSet();
//スライダー側
function imgWSet(){
    const widthVal = document.getElementById('chWidth').value;
    document.getElementById('widthVal').value = widthVal;
    ccImageWidth = document.getElementById('chWidth').value;
    chHolder.setAttribute('width',widthVal +'px');
    localStorage.setItem('crosshairWidthSaved',widthVal);
}
//numberのinput側
function imgWSet1(){
    const widthVal = document.getElementById('widthVal').value;
    console.log(widthVal);
    chHolder.setAttribute('width',widthVal +'px')
    document.getElementById('chWidth').value = widthVal;
}


//height slider
window.onload = imgHSet()
//スライダー側
function imgHSet(){
    const heightVal = document.getElementById('chHeight').value;
    document.getElementById('heightVal').value = heightVal;
    ccImageHeight = document.getElementById('chHeight').value;
    chHolder.setAttribute('height',heightVal +'px');
    localStorage.setItem('crosshairHeightSaved',heightVal);
}
//numberのinput側
function imgHSet1(){
    const heightVal  = document.getElementById('heightVal').value;
    console.log(widthVal);
    chHolder.setAttribute('height',heightVal +'px');
    //スライダーのvalueを変更
    document.getElementById('chHeight').value = heightVal;
}


//URLを設定
function imgUrlSet(){
    const imageUrl = document.getElementById('urlBox').value;
    chHolder.setAttribute('src',imageUrl);
    localStorage.setItem('crosshairUrlSaved', imageUrl);

}


//auto default size
function defaultSize(){
    const crosshairImage = document.getElementById('crosshair');
    //画像サイズの取得
    let imgWidth =  crosshairImage.naturalHeight;
    let imgHeight = crosshairImage.naturalWidth;
    console.log('Width is ' + imgWidth + 'px');
    console.log('Height is ' + imgHeight + 'px');
    //画像サイズ
    chHolder.setAttribute('width',imgWidth +'px');
    chHolder.setAttribute('height',imgHeight +'px');
    //pxの表示
    document.getElementById('widthVal').value = imgWidth;
    document.getElementById('heightVal').value = imgHeight;
    //localstorageに格納
    localStorage.setItem('crosshairWidthSaved',imgWidth);
    localStorage.setItem('crosshairHeightSaved',imgHeight);
    //スライダーのvalueを変更
    document.getElementById('chWidth').value = imgWidth;
    document.getElementById('chHeight').value = imgHeight;
}

