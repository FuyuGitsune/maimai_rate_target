let check_stat = 6;
const achi_len = ["S", "S+", "SS", "SS+", "SSS", "SSS+", "取消"];
//チェックモードのステータス管理用変数
function change_state(stat){
    document.getElementById("diff" + String(check_stat)).className = "achino";
    document.getElementById("diff" + String(stat)).className = "achina";
    check_stat = stat;
}


function change_achi(id){
    let tag = document.getElementById(id);
    let text = document.getElementById(id + "text");
    switch (check_stat){
        case 0:
            tag.className = "s";
            text.className = "stext";
            break;
        case 1:
            tag.className = "sp";
            text.className = "sptext";
            break;
        case 2:
            tag.className = "ds";
            text.className = "dstext";
            break;
        case 3:
            tag.className = "dsp";
            text.className = "dsptext";
            break;
        case 4:
            tag.className = "ts";
            text.className = "tstext";
            break;
        case 5:
            tag.className = "tsp";
            text.className = "tsptext";
            break;
        case 6:
            tag.className = "none";
            text.className = "nonetext";
            break;
        default:
            tag.className = "none";
            text.className = "nonetext";
    }
}
