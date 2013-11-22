function sapxep(trons) {
	var cx =[];
	for(var i=0;i<trons.length;i++){
		cx[cx.length] = trons[i].cx;
	}
	var newTrons = [];
	for(var i=0;i<cx.length;i++){
		for(var j=0;j<trons.length;j++){
			if(trons[j].cx ==cx[i]){
				newTrons[newTrons.length] = trons[j];
			}
		}
	}
	return newTrons;
}