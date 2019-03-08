/* ID를 통한 접근 (ES6)
f = document.querySelector("#form1")*/

/*ID를 통한 접근 (ES5)
var f = document.getElementById("form1");
var v1 = document.getElementById("val1");
var v2 = document.getElementById("val2");
var calc = document.getElementById("calc");
var bt1 = document.getElementById("bt1");
var result = document.getElementById("result");
console.log(f);
console.log(v1);
console.log(v2);
console.log(calc);
console.log(bt1);
console.log(result);*/

// form 요소일 경우는 name으로 접근할 수가 있다 (id접근보다쉬움)
f=document.form1;
v1=document.form1.val1;
v2=f.val2;
calc=f.calc;
bt1=f.bt1;
result=f.result;

// jQuery 접근법 (ID접근)
var $f = $("#form1");
var $v1 = $("#val1");
var $v2 = $("#val2");
var $calc=$("#calc");
var $bt1=$("#bt1");
var $result=$("#result");

// jQuery 접근법 (Name접근-1)
$f = $("form[name='form1']");
$v1 = $("input[name='val1']",$f);
$v2 = $('input[name="val2"]',$f);
$calc=$('select[name="#calc"]',$f);
$bt1=$("button[name='#bt1']",$f);
$result=$("input[name='#result']",$f);

// jQuery 접근법 (Name접근-2)
$f = $("form[name='form1']");
$v1 = $f.find("input[name='val1']");
$v2 = $f.find('input[name="val2"]');
$calc=$f.find('select[name="#calc"]');
$bt1=$f.find("button[name='#bt1']");
$result=$f.find("input[name='#result']");
/*
console.log($f);
console.log($v1);
console.log($v2);
console.log($calc);
console.log($bt1);
console.log($result); */
// --------------------------------
// 비교연산자
// ==(같은 문자인지 비교), ===(같은문자,같은형태), < , > ,<= , >= 
// 함수 안에 있는 변수는 지역변수, 함수 밖에 있는 변수는 전역변수

// If문 - 제어문
var x = 13
if(x>0){
 //조건이 true이면 여기가 실행
 console.log("양수입니다");
}
else if(x===0){
	console.log("0입니다.")
}
else if(x<0){
 //조건이 false이면 여기가 실행
console.log("음수입니다");
}
else {
	console.log("문자입니다");
}


// Simple 사칙연산 - JQuery
bt1.addEventListener("click",function(){
	var x = v1.value;
	var y = v2.value;
	var c = calc.value;
	result.value = (eval(x+c+y));
});

// Simple 사칙연산 - JS
bt1.addEventListener("click", function(){
	if(v1.value == "") {
		alert("첫번째 숫자를 입력하세요.");
		v1.focus();
		return;
	}
	if(v2.value == "") {
		alert("두번째 숫자를 입력하세요.");
		v2.focus();
		return;
	}
	if(calc.value == "") {
		alert("연산방식을 선택하세요.");
		calc.focus();
		return;
	}
	var x = v1.value;	//10
	var y = v2.value;	//20
	var c = calc.value;	//*
	result.value = eval(x + c + y);
});
btReset.addEventListener("click", function(){
	v1.value = "";
	v2.value = "";
	calc.value = "";
	result.value = "";
});
