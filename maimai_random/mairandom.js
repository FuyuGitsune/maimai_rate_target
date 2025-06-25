
const init_lv = 135;
let lvoc_min = init_lv;
let lvoc_max = init_lv;
let popup_type = 0;

/*
仕様
定数指定の上限下限はlvoc変数で管理している。
定数指定機能、難易度指定機能のON/OFFはhtmlのチェックボックスで管理している
ので、使う時はgetelementが必要。
*/

function chartlvc(){
    let checktf = document.getElementById("chtf");
    if (checktf.checked == false){
        document.getElementById("chtfcon").textContent = "定数(OFF)";
    }else{
        document.getElementById("chtfcon").textContent = "定数(ON)";
    }
}

function diftf(){
    let diftf = document.getElementById("diftf");
    if (diftf.checked == false){
        document.getElementById("difval").textContent = "難易度(OFF)";
    }else{
        document.getElementById("difval").textContent = "難易度(ON)";
    }
}

function change_lvmin(type){
    switch (type){
        case 0:
            lvoc_min -= 10;
            break;
        case 1:
            lvoc_min -= 1;
            break;
        case 2:
            lvoc_min += 1;
            break;
        case 3:
            lvoc_min += 10;
            break;
    }
    if (lvoc_min < 10){
        lvoc_min = 10;
    }else if(lvoc_min > 150){
        lvoc_min = 150;
    }

    if(lvoc_min > lvoc_max){
        lvoc_max = lvoc_min;
    }
    document.getElementById("numlvmin").textContent = (lvoc_min / 10).toFixed(1);
    document.getElementById("numlvmax").textContent = (lvoc_max / 10).toFixed(1);
}

function change_lvmax(type){
    switch (type){
        case 0:
            lvoc_max -= 10;
            break;
        case 1:
            lvoc_max -= 1;
            break;
        case 2:
            lvoc_max += 1;
            break;
        case 3:
            lvoc_max += 10;
            break;
    }
    if (lvoc_max < 10){
        lvoc_max = 10;
    }else if(lvoc_max > 150){
        lvoc_max = 150;
    }
    if(lvoc_min > lvoc_max){
        lvoc_min = lvoc_max;
    }
    document.getElementById("numlvmin").textContent = (lvoc_min / 10).toFixed(1);
    document.getElementById("numlvmax").textContent = (lvoc_max / 10).toFixed(1);
}

function popup(type){
    popup_type = type;
    document.getElementById('popup-wrapper').style.display = "block";
}

function closepop(){
    document.getElementById('popup-wrapper').style.display = "none";
}