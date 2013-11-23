

(function($) {
	

	
	$(document).ready(function() {
	//panzoom

  $('svg').svgPan('viewport');
	
	// vẽ cọc
		var td_coc = Drupal.settings.digipro.td_coc;
		var length = td_coc.length,
			element = null;

		$('#viewport').svg({onLoad: drawIntro});
		
		function drawIntro(svg) {
			jQuery.each( td_coc, function( i, val ) {
				//console.log(i);
				svg.circle(val.x, val.y, 20, 
							{fill: 'seagreen', stroke: 'red', strokeWidth: 3});
			});
			// do your stuff here
			   /*  svg.circle(75, 75, 50, 
							{fill: 'none', stroke: 'red', strokeWidth: 3});
					var g = svg.group({stroke: 'black', strokeWidth: 2}); 
					svg.line(g, 15, 75, 135, 75); 
					svg.line(g, 75, 15, 75, 135); */
				
 
		}	
	});
	
	
})(jQuery);