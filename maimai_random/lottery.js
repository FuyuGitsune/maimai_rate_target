
let data_raw = fetch("./datalist.csv").then(response => response.text());

const diff_text = ["BASIC", "ADVANCED", "EXPERT", "MASTER", "Re:MASTER"];

function lottery(lv_min, lv_max){
    switch (document.getElementById("chtf").checked + document.getElementById("diftf").checked * 2){
        case 0: //条件指定なし
            data_raw.then(text => {
                let arr = text.split('\r\n');
                let res = [];
                for (let i = 0; i < arr.length; i++){
                    if(arr[i] == '') break;
                    res[i] = arr[i].split(',');
                    for(let j = 4; j < res[i].length; j++){
                        res[i][j] = Number(res[i][j]);
                    }
                }
                let ret_ch = res[Math.floor( Math.random() * res.length )];

                let ran_fidn = Math.floor( Math.random() * (ret_ch.length - 4) );
                document.getElementById("chart_name").textContent = ret_ch[0];
                document.getElementById("chart_bpm").textContent = ret_ch[1];
                document.getElementById("chart_comp").textContent = ret_ch[3];
                document.getElementById("chart_diff").textContent = diff_text[ran_fidn];
                document.getElementById("chart_num").textContent = ret_ch[ran_fidn + 4];
            })
            break;
        case 1: //定数が指定されている
            data_raw.then(text => {
                
                let arr = text.split('\r\n');
                let res = [];
                let true_res = [];
                for (let i = 0; i < arr.length; i++){
                    let tr_flag = false;
                    if(arr[i] == '') break;
                    res[i] = arr[i].split(',');
                    for(let j = 4; j < res[i].length; j++){
                        res[i][j] = Number(res[i][j]);
                        if (res[i][j] >= lv_min / 10 && res[i][j] <= lv_max / 10){
                            tr_flag = true;
                        }
                    }
                    
                    if (tr_flag){
                        true_res.push(res[i]);
                    }
                }
                
                if (true_res.length == 0){
                    document.getElementById("chart_name").textContent = "該当譜面なし";
                    document.getElementById("chart_bpm").textContent = "----";
                    document.getElementById("chart_comp").textContent = "----";
                    document.getElementById("chart_diff").textContent = "----";
                    document.getElementById("chart_num").textContent = "----";
                    return;
                }

                let ret_ch = true_res[Math.floor( Math.random() * true_res.length )];
                let dif_len = [];



                for (let i = 4; i < ret_ch.length; i++){
                    if (ret_ch[i] >= lv_min / 10 && ret_ch[i] <= lv_max / 10){
                        dif_len.push(i - 4);
                    }
                }

                let ran_fidn = dif_len[Math.floor( Math.random() * (dif_len.length) )];
                document.getElementById("chart_name").textContent = ret_ch[0];
                document.getElementById("chart_bpm").textContent = ret_ch[1];
                document.getElementById("chart_comp").textContent = ret_ch[3];
                document.getElementById("chart_diff").textContent = diff_text[ran_fidn];
                document.getElementById("chart_num").textContent = ret_ch[ran_fidn + 4];
            })
            break;
        case 2: //難易度が指定されている
            data_raw.then(text => {
                if (document.getElementById("difbox4").checked){
                    //
                    let arr = text.split('\r\n');
                    let res = [];
                    for (let i = 0; i < arr.length; i++){
                        if(arr[i] == '') break;
                        if(arr[i].split(',').length != 9){
                            break;
                        }

                        res[i] = arr[i].split(',');
                        for(let j = 4; j < res[i].length; j++){
                            res[i][j] = Number(res[i][j]);
                        }
                    }
                    

                    let ret_ch = res[Math.floor( Math.random() * (res.length) )];


                    let dif_len = [];
                    if (document.getElementById("difbox0").checked){
                        dif_len.push(0);
                    }
                    if (document.getElementById("difbox1").checked){
                        dif_len.push(1);
                    }
                    if (document.getElementById("difbox2").checked){
                        dif_len.push(2);
                    }
                    if (document.getElementById("difbox3").checked){
                        dif_len.push(3);
                    }
                    if (document.getElementById("difbox4").checked){
                        dif_len.push(4);
                    }

                    let ran_difn = dif_len[Math.floor( Math.random() * dif_len.length )];

                    document.getElementById("chart_name").textContent = ret_ch[0];
                    document.getElementById("chart_bpm").textContent = ret_ch[1];
                    document.getElementById("chart_comp").textContent = ret_ch[3];
                    document.getElementById("chart_diff").textContent = diff_text[ran_difn];
                    document.getElementById("chart_num").textContent = ret_ch[ran_difn + 4];

                    //
                }else{
                    //
                    let arr = text.split('\r\n');
                    let res = [];
                    for (let i = 0; i < arr.length; i++){
                        if(arr[i] == '') break;
                        res[i] = arr[i].split(',');
                        for(let j = 4; j < res[i].length; j++){
                            res[i][j] = Number(res[i][j]);
                        }
                    }
                    let ret_ch = res[Math.floor( Math.random() * (res.length) )];


                    let dif_len = [];
                    if (document.getElementById("difbox0").checked){
                        dif_len.push(0);
                    }
                    if (document.getElementById("difbox1").checked){
                        dif_len.push(1);
                    }
                    if (document.getElementById("difbox2").checked){
                        dif_len.push(2);
                    }
                    if (document.getElementById("difbox3").checked){
                        dif_len.push(3);
                    }
                    let ran_difn = dif_len[Math.floor( Math.random() * dif_len.length )];

                    document.getElementById("chart_name").textContent = ret_ch[0];
                    document.getElementById("chart_bpm").textContent = ret_ch[1];
                    document.getElementById("chart_comp").textContent = ret_ch[3];
                    document.getElementById("chart_diff").textContent = diff_text[ran_difn];
                    document.getElementById("chart_num").textContent = ret_ch[ran_difn + 4];

                }

            })
            break;
        case 3: //難易度も定数も指定されている
            data_raw.then(text => {
                
                let arr = text.split('\r\n');
                let res = [];
                let true_res = [];
                for (let i = 0; i < arr.length; i++){
                    let tr_flag = false;
                    if(arr[i] == '') break;
                    res[i] = arr[i].split(',');
                    for(let j = 4; j < res[i].length; j++){
                        res[i][j] = Number(res[i][j]);
                        if (res[i][j] >= lv_min / 10 && res[i][j] <= lv_max / 10){
                            if((document.getElementById("difbox0").checked && j == 4) || (document.getElementById("difbox1").checked && j == 5) || (document.getElementById("difbox2").checked && j == 6) || (document.getElementById("difbox3").checked && j == 7) || (document.getElementById("difbox4").checked && j == 8)){
                                tr_flag = true;
                            }
                        }
                    }
                    
                    if (tr_flag){
                        true_res.push(res[i]);
                    }
                }
                
                if (true_res.length == 0){
                    document.getElementById("chart_name").textContent = "該当譜面なし";
                    document.getElementById("chart_bpm").textContent = "----";
                    document.getElementById("chart_comp").textContent = "----";
                    document.getElementById("chart_diff").textContent = "----";
                    document.getElementById("chart_num").textContent = "----";
                    return;
                }

                let ret_ch = true_res[Math.floor( Math.random() * true_res.length )];
                let dif_len = [];



                for (let i = 4; i < ret_ch.length; i++){
                    if (ret_ch[i] >= lv_min / 10 && ret_ch[i] <= lv_max / 10 && ((document.getElementById("difbox0").checked && i == 4) || (document.getElementById("difbox1").checked && i == 5) || (document.getElementById("difbox2").checked && i == 6) || (document.getElementById("difbox3").checked && i == 7) || (document.getElementById("difbox4").checked && i == 8))){
                        dif_len.push(i - 4);
                    }
                }

                let ran_fidn = dif_len[Math.floor( Math.random() * (dif_len.length) )];
                document.getElementById("chart_name").textContent = ret_ch[0];
                document.getElementById("chart_bpm").textContent = ret_ch[1];
                document.getElementById("chart_comp").textContent = ret_ch[3];
                document.getElementById("chart_diff").textContent = diff_text[ran_fidn];
                document.getElementById("chart_num").textContent = ret_ch[ran_fidn + 4];

            })
            break;
    }
    
}