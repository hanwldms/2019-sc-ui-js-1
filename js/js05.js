// $(".thumbs img").click(function(){
// 	// console.log($(this).attr("src"));
// 	var src=$(this).attr("src");
// 	var t = '<img src="'+src+'" class="img">';
// $(".pic_b").html(t);
// });


/*mouseover > 마우스가 올라가면 반응
	but 모바일에선 먹히지않으므로
	mouseenter로 쓴다 같은 효과임*/

$(".thumbs img").mouseenter(function(){
	var src=$(this).attr("src");
	var t = '<img src="'+src+'" class="img">';
$(".pic_b").html(t);
});
$(".thumbs img").eq(0).trigger("mouseenter");