let num = 10;
if (num < 500) {
  document.write("hello", "<br/>");
}

let walkAmount = prompt("당신의 하루 걷는 양은 몇 보인가요?", "ex.50");

if(walkAmount >= 10000) {
  document.write("매우 좋은 습관을 가지고 있군요!", "<br />");
}
document.write("====== The End ======");