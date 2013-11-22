function drawInitial(trons) {
	var html ="";
	html +='<svg version="1.1" class="svg" >';	
	for(var i = 0;i<trons.length; i++){	
		html +='<circle cx="';
		html += (trons[i].cx - 1059790)*1;
		html +='"cy="';
		html += (trons[i].cy - 612460)*7;
		html +='" r="4" fill="white" stroke="blue" stroke-width="1"></circle>';
	}
	
	var diem = addLine(trons[0],trons[30],trons);
	
	console.log(diem[0]+"---------------------1111");
	/*
	for(var i =0;i< diem.length-1 ; i++){
		html += '<line x1="';
		html += diem[i].cx - 1059500;
		html +='" y1="';
		html += diem[i].cy - 612000;
		html +='" x2="';
		html += diem[i+1].cx - 1059600;
		html +='" y2="';
		html += diem[i+1].cy - 612000;
		html +='" stroke="red" stroke-width="1" ></line>';
	}
	*/
	html +='</svg>';
	
	return html;
}

$(document).ready(function(){
	$('circle').css("cursor","default");
});