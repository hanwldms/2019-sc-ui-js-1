$("#small_pic img").click(function(){
	$("#big_pic").html('<img src="'+$(this).attr("src")+'" class="img">');
});

