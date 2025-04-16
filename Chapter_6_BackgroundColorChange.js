function BackgroundColorChange(){
    const backColor = document.querySelector("#backColor");
    backColor.onclick = function() {
        let selectColor = prompt('Enter the color:');
        if(selectColor){
        document.body.style.backgroundColor = selectColor;
        }
        else{
            console.error('Color is not entered.');
        }
    }
}

window.onload = BackgroundColorChange; //BackgroundColorChange()