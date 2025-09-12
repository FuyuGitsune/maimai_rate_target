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
    switch (check_stat){
        case 0:
            tag.className = "s";
            break;
        case 1:
            tag.className = "sp";
            break;
        case 2:
            tag.className = "ds";
            break;
        case 3:
            tag.className = "dsp";
            break;
        case 4:
            tag.className = "ts";
            break;
        case 5:
            tag.className = "tsp";
            break;
        case 6:
            tag.className = "none";
            break;
        default:
            tag.className = "none";
    }
}
