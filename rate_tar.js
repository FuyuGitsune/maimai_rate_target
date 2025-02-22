
const constant = [22.4  , 21.6  , 21.1 , 20.8 , 20.3 , 20.0 , 16.8 , 13.6 , 8.0  , 7.5  , 7.0  , 6.0  , 5.0  , 4.0  , 3.0  , 2.0  , 1.0  , 0.0];
const ramk     = ["None", "SSS+", "SSS" , "SS+", "SS" , "S+" , "S"  , "AAA", "AA" , "A"  , "BBB", "BB" , "B"  , "C"  , "D"  , "D"  , "D"  , "D"  , "D"];
const pers     = [200, 100.5 , 100.00, 99.50, 99.00, 98.00, 97.00, 94.00, 90.00, 80.00, 75.00, 70.00, 60.00, 50.00, 40.00, 30.00, 20.00, 10.00, 0.00];

let percent = 0;

function calc(){
    let input_num = document.getElementById('rate').value;
    input_num = Number(input_num);
    for (i=91; i < 151; i++){
        //ここに処理
        if (input_num / (i / 10) / constant[0] * 100 > 100.5){
            document.getElementById("per_" + String(i)).textContent = '--xx--';
            continue;
        }else{
            //ここで計算する。
            
            for (j = 0; j<constant.length; j++){
                //場合分け
                if (input_num / (i / 10) / constant[j] * 100 >= pers[j+1] && input_num / (i / 10) / constant[j] * 100 < pers[j]){
                    document.getElementById("per_" + String(i)).textContent = String(Math.ceil(input_num / (i / 10) / constant[j] * 100 * 10000) / 10000);
                    break;
                }else if(input_num / (i / 10) / constant[j] * 100 >= pers[j+1]){
                    document.getElementById("per_" + String(i)).textContent = String(pers[j]) + "-" + ramk[j];
                    break;
                }
            }
        }
    }
}