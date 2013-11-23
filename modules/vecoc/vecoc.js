function drawInitial(trons) {
	var html ="";
	html +='<svg version="1.1" class="svg" >';	
	for(var i = 0;i<trons.length; i++){	
		html +='<circle class="';
		html += i;
		html += '" cx="';
		html += (trons[i].cx - 1059790)*1;
		html +='"cy="';
		html += (trons[i].cy - 612460)*7;
		html +='" r="4" fill="white" stroke="blue" stroke-width="1"></circle>';
	}
	//html += '<line x1="40" y1="224" x2="50" y2="280" stroke="red" stroke-width="1"></line>';
	//var diem = addLine(trons[0],trons[597],trons);
	
	//alert(diem.length);
	/*
	for(var i =0;i< diem.length-1 ; i++){
		html += '<line x1="';
		html += (trons[i].cx - 1059790)*1;
		html +='" y1="';
		html += (trons[i].cy - 612460)*7;
		html +='" x2="';
		html += (trons[i+1].cx - 1059790)*1;
		html +='" y2="';
		html += (trons[i+1].cy - 612460)*7;
		html +='" stroke="red" stroke-width="1" ></line>';
	}
	*/
	html +='</svg>';
	
	return html;
}
/*
$(document).ready(function(){
	$('circle').click(function(){
		alert('ok');
	});
});

*/