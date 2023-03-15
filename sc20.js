let userName = prompt("방문자의 이름은?");

if(userName) {
  document.write(userName + "님 반갑습니다! 방문을 환영합니다!", "<br />")
}

let num = prompt("당신이 좋아하는 숫자는?");
if(num%2 ==0) {
  document.write("당신이 좋아하는 숫자는 짝수입니다!");
} else {
  document.write("당신이 좋아하는 숫자는 홀수입니다!");
}