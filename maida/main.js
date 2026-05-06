function escapes(str){
	if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function check_num(num){
	if(isNaN(num) || num == 0){
		return 0;
	}else{
		return num;
	}
}

function run(){
	let daneme = document.getElementById("daneme").value;
	let init_hp = document.getElementById("init_hp").value;
	let de_hp = [document.getElementById("d_pe").value, document.getElementById("d_gr").value, document.getElementById("d_go").value, document.getElementById("d_mi").value];
	let heal = document.getElementById("heal").value;

	let chart_num = 4;
	if (document.getElementsByName("tof")[0].checked){
		chart_num = 3;
	}

	let name1 = document.getElementById("name1").value;
	let diff1 = document.getElementById("diff1").value;
	let lv1 = document.getElementById("ch_con1").value;
	let type1 = "DX"; //std-0, dx-1
	if (document.getElementsByName("type1")[0].checked){
		type1 = "STD";
	}
	let per1 = document.getElementById("per1").value;
	let sc1 = document.getElementById("sc1").value;
	let info1 = [document.getElementById("cr1").value, document.getElementById("pe1").value, document.getElementById("gr1").value, document.getElementById("go1").value, document.getElementById("mi1").value];


	let name2 = document.getElementById("name2").value;
	let diff2 = document.getElementById("diff2").value;
	let lv2 = document.getElementById("ch_con2").value;
	let type2 = "DX"; //std-0, dx-1
	if (document.getElementsByName("type2")[0].checked){
		type2 = "STD";
	}
	let per2 = document.getElementById("per2").value;
	let sc2 = document.getElementById("sc2").value;
	let info2 = [document.getElementById("cr2").value, document.getElementById("pe2").value, document.getElementById("gr2").value, document.getElementById("go2").value, document.getElementById("mi2").value];


	let name3 = document.getElementById("name3").value;
	let diff3 = document.getElementById("diff3").value;
	let lv3 = document.getElementById("ch_con3").value;
	let type3 = "DX"; //std-0, dx-1
	if (document.getElementsByName("type3")[0].checked){
		type3 = "STD";
	}
	let per3 = document.getElementById("per3").value;
	let sc3 = document.getElementById("sc3").value;
	let info3 = [document.getElementById("cr3").value, document.getElementById("pe3").value, document.getElementById("gr3").value, document.getElementById("go3").value, document.getElementById("mi3").value];


	let name4 = document.getElementById("name4").value;
	let diff4 = document.getElementById("diff4").value;
	let lv4 = document.getElementById("ch_con4").value;
	let type4 = "DX"; //std-0, dx-1
	if (document.getElementsByName("type4")[0].checked){
		type4 = "STD";
	}
	let per4 = document.getElementById("per4").value;
	let sc4 = document.getElementById("sc4").value;
	let info4 = [document.getElementById("cr4").value, document.getElementById("pe4").value, document.getElementById("gr4").value, document.getElementById("go4").value, document.getElementById("mi4").value];

	let return_html = "";

	//No.1
	return_html += "<div class='info "
	return_html += escapes(diff1);
	return_html += "'>"
	return_html += "<div class='track'>track1</div><div class='ch_title'>";
	return_html += escapes(name1);
	return_html += "</div><div class='chart_info'><span class='diff_text'>";
	return_html += escapes(diff1);
	return_html += "</span>-";
	return_html += type1;
	return_html += "<span class='diff_text'>";
	return_html += Math.trunc(check_num(Number(lv1)) / 10);
	if (check_num(Number(lv1)) % 10 == 5){
		return_html += "+";
	}
	return_html += "</span></div><div class='clear'></div><div class='ach_info'>";
	return_html += escapes(per1);
	return_html += "%</div><span class='clear'></span>";
	return_html += "<div class='detail'>";
	return_html += "(detail: " + escapes(info1[0]) + "-" + escapes(info1[1]) + "-" + escapes(info1[2]) + "-" + escapes(info1[3]) + "-" + escapes(info1[4]) + ")";
	return_html += "</div><div class='dx_info'>(DX:";
	return_html += escapes(sc1);
	return_html += "/"
	return_html += String(info1.reduce((sum, element) => check_num(Number(sum)) + check_num(Number(element)), 0) * 3);
	return_html += ")</div><div class='clear'></div></div>";



	return_html += "<div class='info "
	return_html += escapes(diff2);
	return_html += "'>"
	return_html += "<div class='track'>track2</div><div class='ch_title'>";
	return_html += escapes(name2);
	return_html += "</div><div class='chart_info'><span class='diff_text'>";
	return_html += escapes(diff2);
	return_html += "</span>-";
	return_html += type2;
	return_html += "<span class='diff_text'>";
	return_html += Math.trunc(check_num(Number(lv2)) / 10);
	if (check_num(Number(lv2)) % 10 == 5){
		return_html += "+";
	}
	return_html += "</span></div><div class='clear'></div><div class='ach_info'>";
	return_html += escapes(per2);
	return_html += "%</div><span class='clear'></span>";
	return_html += "<div class='detail'>";
	return_html += "(detail: " + escapes(info2[0]) + "-" + escapes(info2[1]) + "-" + escapes(info2[2]) + "-" + escapes(info2[3]) + "-" + escapes(info2[4]) + ")";
	return_html += "</div><div class='dx_info'>(DX:";
	return_html += escapes(sc2);
	return_html += "/"
	return_html += String(info2.reduce((sum, element) => check_num(Number(sum)) + check_num(Number(element)), 0) * 3);
	return_html += ")</div><div class='clear'></div></div>";


	return_html += "<div class='info "
	return_html += escapes(diff3);
	return_html += "'>"
	return_html += "<div class='track'>track3</div><div class='ch_title'>";
	return_html += escapes(name3);
	return_html += "</div><div class='chart_info'><span class='diff_text'>";
	return_html += escapes(diff3);
	return_html += "</span>-";
	return_html += type3;
	return_html += "<span class='diff_text'>";
	return_html += Math.trunc(check_num(Number(lv3)) / 10);
	if (check_num(Number(lv3)) % 10 == 5){
		return_html += "+";
	}
	return_html += "</span></div><div class='clear'></div><div class='ach_info'>";
	return_html += escapes(per3);
	return_html += "%</div><span class='clear'></span>";
	return_html += "<div class='detail'>";
	return_html += "(detail: " + escapes(info3[0]) + "-" + escapes(info3[1]) + "-" + escapes(info3[2]) + "-" + escapes(info3[3]) + "-" + escapes(info3[4]) + ")";
	return_html += "</div><div class='dx_info'>(DX:";
	return_html += escapes(sc3);
	return_html += "/"
	return_html += String(info3.reduce((sum, element) => check_num(Number(sum)) + check_num(Number(element)), 0) * 3);
	return_html += ")</div><div class='clear'></div></div>";

	if (chart_num == 4){

	return_html += "<div class='info "
	return_html += escapes(diff4);
	return_html += "'>"
	return_html += "<div class='track'>track4</div><div class='ch_title'>";
	return_html += escapes(name4);
	return_html += "</div><div class='chart_info'><span class='diff_text'>";
	return_html += escapes(diff4);
	return_html += "</span>-";
	return_html += type4;
	return_html += "<span class='diff_text'>";
	return_html += Math.trunc(check_num(Number(lv4)) / 10);
	if (check_num(Number(lv4)) % 10 == 5){
		return_html += "+";
	}
	return_html += "</span></div><div class='clear'></div><div class='ach_info'>";
	return_html += escapes(per4);
	return_html += "%</div><span class='clear'></span>";
	return_html += "<div class='detail'>";
	return_html += "(detail: " + escapes(info4[0]) + "-" + escapes(info4[1]) + "-" + escapes(info4[2]) + "-" + escapes(info4[3]) + "-" + escapes(info4[4]) + ")";
	return_html += "</div><div class='dx_info'>(DX:";
	return_html += escapes(sc4);
	return_html += "/"
	return_html += String(info4.reduce((sum, element) => check_num(Number(sum)) + check_num(Number(element)), 0) * 3);
	return_html += ")</div><div class='clear'></div></div>";

	}

	//calc_hp
	let hp = check_num(init_hp);
	//1st
	let lost1 = check_num(Number(de_hp[0]) * Number(info1[1]) + Number(de_hp[1]) * Number(info1[2]) + Number(de_hp[2]) * Number(info1[3]) + Number(de_hp[3]) * Number(info1[4]));
	hp -= lost1;
	if (hp <= 0){
		hp = 0;
	}else{
		hp += check_num(Number(heal));
		let lost2 = check_num(Number(de_hp[0]) * Number(info2[1]) + Number(de_hp[1]) * Number(info2[2]) + Number(de_hp[2]) * Number(info2[3]) + Number(de_hp[3]) * Number(info2[4]));
		hp -= lost2;
		if (hp <= 0){
			hp = 0;
		}else{
			hp += Number(heal);
			let lost3 = check_num(Number(de_hp[0]) * Number(info3[1]) + Number(de_hp[1]) * Number(info3[2]) + Number(de_hp[2]) * Number(info3[3]) + Number(de_hp[3]) * Number(info3[4]));
			hp -= lost3;
			if (hp <= 0){
				hp = 0;
			}else if(chart_num == 4){
				hp += Number(heal);
				let lost4 = check_num(Number(de_hp[0]) * Number(info4[1]) + Number(de_hp[1]) * Number(info4[2]) + Number(de_hp[2]) * Number(info4[3]) + Number(de_hp[3]) * Number(info4[4]));
				hp -= lost4;
				if (hp <= 0){
					hp = 0;
				}
			}
		}
	}



	return_html += "<div class='info "
	if (hp <= 0){
		return_html += "no";
	}else{
		return_html += "yes";
	}
	return_html += "'>"
	return_html += "<div class='track'>合計スコア</div><div class='ch_title'>";
	return_html += escapes(daneme);
	return_html += "</div><div class='chart_info'><span class='diff_text' style='font-weight: bold;'>";
	if (hp <= 0){
		return_html += "不合格";
	}else{
		return_html += "合格"
	}
	return_html += "</span>";
	return_html += "</div><div class='clear'></div><div class='ach_info'>";
	if (chart_num == 3){
		return_html += escapes(String(check_num(Number(per1) + Number(per2) + Number(per3)).toFixed(4)));
	}else{
		return_html += escapes(String(check_num(Number(per1) + Number(per2) + Number(per3) + Number(per4)).toFixed(4)));
	}
	return_html += "%<span class='show_hp'><br>(HP:";
	return_html += String(hp);
	return_html += "/";
	return_html += String(init_hp);
	return_html += ")</span></div><span class='clear'></span>";
	return_html += "<div class='detail'>";
	if (chart_num == 3){
	return_html += "(detail: " + String(check_num(Number(info1[0])) + check_num(Number(info2[0])) + check_num(Number(info3[0]))) + "-" + String(check_num(Number(info1[1])) + check_num(Number(info2[1])) + check_num(Number(info3[1]))) + "-" + String(check_num(Number(info1[2])) + check_num(Number(info2[2])) + check_num(Number(info3[2]))) + "-" + String(check_num(Number(info1[3])) + check_num(Number(info2[3])) + check_num(Number(info3[3]))) + "-" + String(check_num(Number(info1[4])) + check_num(Number(info2[4])) + check_num(Number(info3[4]))) + ")";
	}else{
	return_html += "(detail: " + String(check_num(Number(info1[0])) + check_num(Number(info2[0])) + check_num(Number(info3[0])) + check_num(Number(info4[0]))) + "-" + String(check_num(Number(info1[1])) + check_num(Number(info2[1])) + check_num(Number(info3[1])) + check_num(Number(info4[1]))) + "-" + String(check_num(Number(info1[2])) + check_num(Number(info2[2])) + check_num(Number(info3[2])) + check_num(Number(info4[2]))) + "-" + String(check_num(Number(info1[3])) + check_num(Number(info2[3])) + check_num(Number(info3[3])) + check_num(Number(info4[3]))) + "-" + String(check_num(Number(info1[4])) + check_num(Number(info2[4])) + check_num(Number(info3[4])) + check_num(Number(info4[4]))) + ")";
	}
	return_html += "</div><div class='dx_info'>(DX:";
	if (chart_num == 3){
	return_html += String(check_num(Number(sc1) + Number(sc2) + Number(sc3)));
	}else{
		return_html += String(check_num(Number(sc1) + Number(sc2) + Number(sc3) + Number(sc4)));
	}
	return_html += "/"
	if (chart_num == 3){
	return_html += String(check_num(info1.reduce((sum, element) => Number(sum) + Number(element), 0) * 3 + info2.reduce((sum, element) => Number(sum) + Number(element), 0) * 3 + info3.reduce((sum, element) => Number(sum) + Number(element), 0) * 3));
	}else{
	return_html += String(check_num(info1.reduce((sum, element) => Number(sum) + Number(element), 0) * 3 + info2.reduce((sum, element) => Number(sum) + Number(element), 0) * 3 + info3.reduce((sum, element) => Number(sum) + Number(element), 0) * 3 + info4.reduce((sum, element) => Number(sum) + Number(element), 0) * 3));
	}
	return_html += ")</div><div class='clear'></div></div>";

	document.getElementById("result").innerHTML = return_html;
}
