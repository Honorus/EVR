/*

alert("???");

*/

$ (document).ready(function(){
	
	 $(".spoiler .title").click(function(){
		 
		$(this).parent().find(".big-desc").toggle(500);
		
		});
});