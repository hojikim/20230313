let userEmail = prompt("당신의 이메일 주소는?", "");
let arrUrl = [".co.kr", ".com", ".net", ".or.kr", ".go.kr"]; //뒤에 붙는 모든경우에 수를 적었음 

let check1 = false;
let check2 = true;

if (userEmail.indexOf("@") > 0) {   //이메일을 써서 @가 들어가 있다면 true이다
  check1 = true;
}
for(let i = 0; i < arrUrl.length; i++) {
  if(userEmail.indexOf(arrUrl[i]) > 0) {
    check2 = true;
  }
}
if(check1 && check2) {
  document.write(userEmail);
} else {
  alert("이메일 형식이 잘못되었습니다!");
}