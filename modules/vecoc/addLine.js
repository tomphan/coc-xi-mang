function addLine(cocA,cocB,trons){
	/*
	Y1= aX1+b;
	Y2=aX2+b;
	Y1-Y2=a(X1-X2);
	a= (Y1-Y2)/(X1-X2);
	Y1X2-Y2X1 = (X2-X1)b;
	b=(Y1X2-Y2X1)/(X2-X1);
	*/	
	var diem = [];
	if(cocA.cx == cocB.cx){
		for(var i = 0; i< trons.length; i++){
			if(trons[i].cx == cocA.cx){
				var j = diem.length;
				diem[j] = new Object();
				diem[j].cx = trons[i].cx;
				diem[j].cy = trons[i].cy;
			}
		}
	}else{
		for(var i = 0; i< trons.length; i++){
			var a = (cocA.cy-cocB.cy)/(cocA.cx-cocB.cx);
			var b= (cocA.cy*cocB.cx-cocB.cy*cocA.cx)/(cocB.cx-cocA.cx);
			if((a*trons[i].cx+b) == trons[i].cy){
				var j = diem.length;
				diem[j] = new Object();
				diem[j].cx = trons[i].cx;
				diem[j].cy = trons[i].cy;
			}
		}
	}
	console.log("number"+diem.length);
	return diem;
}