<?php
function _vecoc(){
	
	//$rows = views_get_view_result('toa_do_coc');
	$file = 'sites/all/modules/vecoc/coc.json';
	//dpm(json_decode(file_get_contents($file)));
	$rows = json_decode(file_get_contents($file));
	dpm($rows[0]);
	drupal_add_js('sites/all/modules/vecoc/jquery.js');
	drupal_add_js('sites/all/modules/vecoc/jquery.panzoom.js');
	drupal_add_js('sites/all/modules/vecoc/addLine.js');
	drupal_add_js('sites/all/modules/vecoc/sapxep.js');
	drupal_add_js('sites/all/modules/vecoc/vecoc.js');
	drupal_add_js('sites/all/modules/vecoc/catcoc.js');
	drupal_add_js('sites/all/modules/vecoc/searchcoc.js');
	drupal_add_js('sites/all/modules/vecoc/jquery.msgBox.js');
	drupal_add_css('sites/all/modules/vecoc/msgBoxLight.css');

	$html = <<< HTML
	<div id="timkiem">
		<div id="olvm-title-div" name="olvm-title-div" style="float:left; position:relative; margin:4px 5px 0px 0px; font-weight:bold;">Tìm kiếm:</div>
		<div id="olvm-title-div" name="olvm-title-div" style="float:left; position:relative; margin:0px 10px 0px 0px;">
			<label for="olvm-title-txt" style="position: absolute; top: 0px; left: 0px; margin: 4px 5px 5px 6px; color: rgb(119, 119, 119); font-weight: normal; opacity: 1;" class="label-text">Tên cọc</label>
			<input type="text" id="olvm-title-txt" name="olvm-title-txt" class="form-text">
			<input type="button" id="olvm-search-btn" name="olvm-search-btn" value="Tìm kiếm" class="form-submit">
		</div>
	</div>

HTML;
	$html .= '<div id="vecoc"style="border: 1px solid;height:850px;width:1100px;"><div id="svgbasics1" class="hasSVG" ></div></div>';
	$html .="<div><h3>Cắt cọc</h3></div>";
	$html .='<div id="catcoc"style="border: 1px solid;height:300px;width:600px;"><div id="svgbasics2" class="hasSVG" ></div></div>';
	$s = "";
	$s .= <<<MANG
		var trons = [];	
MANG;
	foreach($rows as $k=> $row){
		$s .= <<<MANG
			trons[$k] = new Object();
			trons[$k].cx = "{$row->field_coc_tc_x->und[0]->value}";
			//trons[$k].cx = trons[$k].cx.replace(/ /g,"");
			
			//console.log("Cx+"+trons[$k].cx);
			
			trons[$k].cy = "{$row->field_coc_tc_y->und[0]->value}";
			//trons[$k].cy = trons[$k].cy.replace(/ /g,"");
			
			trons[$k].tencoc = "{$row->title}";
			//console.log("Cy+"+trons[$k].cy);
			
MANG;
	}
	$s .= <<<MANG
	
	
	$(document).ready(function($){
		//var newTrons = sapxep(trons);
		//delete(trons);
		console.log("2-------------");
		var html5 = drawInitial(trons);
		//var html5 = drawInitial(newTrons);
		
		$("#svgbasics1").html(html5);
		var html2 = drawInitial2(trons);
		//var html2 = drawInitial2(newTrons);
	
		$("#svgbasics2").html(html2);
		
	});
	
MANG;
	
	drupal_add_js( <<< EEE
		$s
EEE
		, 'inline');
	drupal_add_js('sites/all/modules/vecoc/zoom.js');
	return $html;
}


function _datalogger_node_save_field($nid, $type, $field, $value) {
  $n = new stdClass();
  $n->nid = $nid;
  $n->type = $type;
  $n->{$field}[LANGUAGE_NONE][0]['value'] = $value;
  field_attach_presave('node', $n);
  field_attach_update('node', $n);
  node_load($nid, NULL, TRUE);      // reset
}