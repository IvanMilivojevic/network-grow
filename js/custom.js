
jQuery(document).ready(function(){

	jQuery(document).click(function(){
		jQuery(".lines-anim-inner").addClass("active");

		setTimeout(function(){
			jQuery(".lines-anim-inner").addClass("completed");
		}, 5000);
	});
});
