/* programming Language(프로그래밍 언어)
 .web/FrontEnd
	  - Javascript 
 .web/BackEnd 
 	 	- PHP 
	  - Java
	  - Python 
  	- C#
 .Application/	  
 		- Java -> 안드로이드앱
	  - Python ->java대체언어
 		- VisualBasic -> 간단한 윈도우즈용 프로그램
 		- C -> IOT(사물인터넷)
  	- C++ -> 복잡한 윈도우즈용 프로그램
 		- C# -> 윈도우7 이상 프로그램
 	  - swift > 아이폰앱 */
// -----------------------------
// *********java에서 document는 html에서의 body와 같은역할
// (getElementById(#) = #을 가져오겠다) (addEventListener = #에게 "클릭"이벤트를 추가하겠다)
// alert > 에러메시지************
// -----------------------------
// 자바스크립트 함수 
document.getElementById("bt1").addEventListener("click", function () {
	alert("Hello Real World");
	document.getElementById("cmt").innerHTML = "현실세계를 선택!";
});

// J쿼리($) 함수
$("#bt2").click(function () {
	alert("Hello Virtual World");
	$("#cmt").html("가상현실을 선택!");
});

// 변수
// 변수에는 모든 것을 담을 수 있다 (숫자,문자,객체-html)
var a; //var a=10;

a = 10;
console.log(a);

a = 20;
console.log(a);

var b = 30;
console.log(a, b, a + b);

var c = a + b;
console.log(c);

var t1 = 10;
var t2 = 20;
var t3 = "30";
var t4 = t1 + t2 + t3;
var t5 = t3 + t1 + t2;
var t6 = t3 + (t1 + t2);
console.log(t4);
console.log(t5);
console.log(t6);

var bt1 = document.getElementById("bt1");
console.log(bt1);

var $bt1 = $("#bt1");
console.log($bt1);

var doc = document;
console.log(doc);

var body = doc.body;
console.log(body);

// 함수 - function
// *정수로떨어짐* +,-,*,/(10/3 =>3 몫 ),%(mod:10%3 =>1 나머지)
/* function 함수명(인자:paramenter){

 } 
 */
var x = 5;

// 매개변수가 없는 함수 / 리턴값이 없는 함수(void)
function multi() {
	console.log(x * x);
}
multi();

// 매개변수가 있는 함수 / 리턴값이 없는 함수(void)
function multi2(x) {
	console.log("함수 안의 x 는"+x);
	console.log(x * x);
}
console.log("함수 밖의 x 는"+x);
multi2(25);

// 매개변수가 여러개인함수 / 리턴값이 없는 함수(void)
function hap(x,y){
	console.log(x+"와 "+y+"의 합은"+(x+y)+"입니다.");
}
hap(25,34);

// 리턴값이 있는 함수
function hap2(x,y) {
	var c=x+y;
	return c;
}

var d=hap2(20,30);
console.log(d);

function hap3(x,y) {
	return x+y;
}
console.log(hap3(40,50));

// 리턴함수의 예제
function ampm(h) {
	if(h<12){
		return "오전 "+h+"시"
	}
	else{
		return"오후 "+(h-12)+"시";
	}
}
function date(d){
	return d.getFullYear()+"년 "+(d.getMonth()+1)+"월 "+d.getDate()+"일";
}
function time(d){
	return ampm(d.getHours())+d.getMinutes()+"분"+d.getSeconds()+"초";
}
var d=new Date();
console.log(d);
console.log(d.getHours());
console.log(ampm(d.getHours()));

var nowDate=date(d);
var nowTime=time(d);
console.log(nowDate + nowTime);
// $("#cmt").html(nowDate + nowTime)
document.getElementById("cmt").innerHTML = nowDate + nowTime ;

// 초기화 버튼
//var btReset = document.getElementById("bt_reset");
document.getElementById("bt_reset").addEventListener("click", function() {
	var d = new Date();
	var cmt = document.getElementById("cmt");
	cmt.innerHTML = date(d) + time(d);
});