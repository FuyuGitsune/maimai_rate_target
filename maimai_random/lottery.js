fetch("./datalist.csv").then(res => res.text()).then(text =>{
    const datalist = text;
    console.log(datalist);
});

function lottery(lv_min, lv_max){
    switch (document.getElementById("chtf").checked + document.getElementById("diftf").checked * 2){
        case 0: //条件指定なし
            alert("指定なし");
            break;
        case 1: //定数が指定されている
            alert("定数指定");
            break;
        case 2: //難易度が指定されている
            alert("難易度指定");
            break;
        case 3: //難易度も定数も指定されている
            alert("難易度と定数指定");
            break;
    }
    
}