/* 여러 방법으로 클래스 지정하기
$(".btns>.btn")
$(".btn",$(".btns"))
$(".btns").find(".btn") - 자손 (그냥 밑에있는애들)
$(".btns").children(".btn") - 자식 (바로밑에있는애들) */

$(".btns").children(".btn").not(".btn-default").click(function(){
	var n=$(this).index();
	// $(".box").eq(n).fadeToggle(1000);
	// animate({애니메이션값},속도())
	$(".box").eq(n).stop().animate({"left":"90%", "width":"400px", "borderWidth":"20px"}, 1000, "swing", function(){
		$(this).stop().animate({"left":0, "width":"100px", "borderWidth":"5px"}, 500);
	});
});

$(".btns").children(".btn-default").click(function(){
	$(".box").show(0);
	$(".box").animate({"left":"0"},300);
});

