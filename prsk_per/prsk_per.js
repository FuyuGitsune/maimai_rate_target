const nomal_coefficient = [ 3.0, 1.5,  1.2,  1.0,   0.0];
const super_coefficient = [25.0, 0.0, -3.0, -5.0, -10.0];

function calc(){
    let perfect = Number(document.getElementById('perfect').value);
    let great = Number(document.getElementById('great').value);
    let good = Number(document.getElementById('good').value);
    let bad = Number(document.getElementById('bad').value);
    let miss = Number(document.getElementById('miss').value);
    let all_notes = perfect + great + good + bad + miss;

    let output_str = "";

    let normal_per = (perfect * 3 + great * 1.5 + good * 1.2 + bad * 1) / (all_notes * 3) * 100;

    document.getElementById('per').textContent = String(normal_per.toFixed(4)) + "%";

    if(normal_per >= 99.5){
        output_str += "<SSS*> ";
    }else if(normal_per >= 99.0){
        output_str += "<SSS> ";
    }else if(normal_per >= 98.5){
        output_str += "<SS*> ";
    }else if(normal_per >= 98.0){
        output_str += "<SS> ";
    }else if(normal_per >= 97.5){
        output_str += "<S*> ";
    }else if(normal_per >= 97){
        output_str += "<S> ";
    }else if(normal_per >= 95){
        output_str += "<A> ";
    }else if(normal_per >= 90){
        output_str += "<B> ";
    }else if(normal_per >= 85){
        output_str += "<C> ";
    }else if(normal_per >= 80){
        output_str += "<D> ";
    }else{
        output_str += "<F> ";
    }

    let super_score = (perfect * 25 + good * (-3) + bad * (-5) + miss * (-10));
    let super_per = super_score / (all_notes * 25);

    let star = ((-25000 / 9) * super_per * super_per + (50000 / 9) * super_per - (24910 / 9)).toFixed(2);
    if (star >= 0){
        output_str = output_str + "+" + star.toString() + "(" + super_score.toString() + "/" + (all_notes * 25).toString() + ")";
    }else{
        output_str = output_str + star.toString() + "(" + super_score.toString() + "/" + (all_notes * 25).toString() + ")";
    }

    document.getElementById('rank').textContent = output_str;
}