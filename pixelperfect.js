$.fn.pixelperfect=function(options){
    // Configuration 
	var img = options.img;
	var width = options.width;
	if(img == ''){ console.log('Please add an image to PixelPerfect.js'); return false };
	if(width=='') { width = img.width; }
	
	// Code
	
	$('html').keypress(function(event){
		if(event.shiftKey==true && event.charCode=='81')
		{
			var insertOverlay = "<div style='position:absolute;width:100%;top:0px;z-index:1000000000;' class='pixelperfectoverlay'><div style='position:relative; width:"+width+"; margin:0 auto; text-align:center;'><img src='"+img+"'/></div></div>";
			$('body').append(insertOverlay);
			console.log('enter');
		}
	});
	
	$('html').live('keyup',function(event){
		
		$('.pixelperfectoverlay').remove();
		
	});
	
}
