let count = 0;
//일반함수
myFnc();

function myFnc() {
  count++;
  document.write("hello" + count, "<br/>");
}

myFnc();

//익명함수
//theFnc(); 익명함수임으로 함수문 정의되기전에 함수 호출을 먼저쓰면 안된다 

let theFnc = function() {
  count++;
  document.write("bye" + count, "<br/>")
}

theFnc();
