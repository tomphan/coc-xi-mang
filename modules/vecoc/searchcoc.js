function searchCoc(input,trons){
	var results = [];
	for(var i = 0; i< trons.length; i++){
		if(trons[i].tencoc.toLowerCase().indexOf(input.toLowerCase()) > -1){
			var k = results.length;
			results[k] = new Object();
		
			results[k].tencoc = trons[i].tencoc;
		}
	}
	return results;
}

function confirm_feature(features){
	feature = features[0];
	jQuery.msgBox({
		title :"Tìm kiếm cọc",
		content:"tìm thấy cọc "+ feature.tencoc,
		type:"confirm",
		buttons : [{ value: "Yes" }, { value: "No" }, { value: "Cancel"}],
		success: function(result){
			//msgBox_result = result;
			if(result == "Yes"){
				return;
			}else if(result =="No"){
				features.splice(0,1);
				if(features.length > 0) confirm_feature(features);
			}
		}
	});
}

$(document).ready(function(){
	$("#olvm-title-txt").focus(function(){
		$(this).prev("label").hide();
	}).blur(function() {
		if($(this).val() == '') {
			$(this).prev("label").show();
		}
	});
});

$(document).ready(function() {
	$( "#olvm-search-btn" ).click(function() {
		var tencoc = $("#olvm-title-txt").val();
		if(tencoc ==""){
			return;
		}else {
			var results = searchCoc(tencoc,trons);
			if(results.length == 0){
			
			}else if(results.length == 1){
			
			}else{
				confirm_feature(results);
			}
		}
	});
});