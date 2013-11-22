function drawInitial2(trons) {
	
	var diem = addLine(trons[0],trons[30],trons);
	var html ='<svg version="1.1" class="svg">';	
	for(var i =0; i<diem.length-1; i++){
		
		if(i ==0){
			html += '<line x1="100" y1="100" x2="100" y2="200" stroke="blue" stroke-width="1"></line>';
		}else{
		//console.log(Math.sqrt(abs((diem[i+1].cx-diem[i].cx)*(diem[i+1].cx-diem[i].cx)-(diem[i+1].cy-diem[i].cy)*(diem[i+1].cy-diem[i].cy))));
			var x = (diem[i+1].cx-diem[i].cx)*(diem[i+1].cx-diem[i].cx);
			var y = (diem[i+1].cy-diem[i].cy)*(diem[i+1].cy-diem[i].cy);
			var giatri = 100 + Math.sqrt(x+y);
			html += '<line x1="';
			html += giatri*3;
			html += '" y1="';
			html += 100;
			html +='" x2="';
			html += giatri*3;
			html +='" y2="';
			html += 200;
			html +='" stroke="blue" stroke-width="1"></line>';
		}
	}

	
	html +='</svg>';
	return html;
}