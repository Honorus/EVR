

$ (document).ready(function(){
	$ ("div.spoiler").hide();
	$ ("input[type=checkbox]").click(function(){
		$ ("div.spoiler").show();
		var newimg = [];
		var a = $(".big-desc");
		var b = $("input[type=checkbox]:checked");
	
		a.toArray().forEach(function (dom){
			var jImg = $(dom);
			var img = jImg.attr("src");
			var a = img.substring((img.length)-4);
			
			b.toArray().forEach(function (domm){
				var y = $(domm);
				var ext = y.attr("value");
						
				if(a == ext){
					newimg.push(jImg);
					}
			});
		});
		
		$(".spoiler").hide();
		newimg.forEach(function(im){
			im.parent().show()
		});
	});
});


