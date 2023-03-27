let userName = prompt("당신의 영문 이름은?", "");
let upperName = userName.toUpperCase();
document.write(upperName, "<br/>");

let userNum = prompt("당신의 연락처는?", "번호만 입력하세요!");
let result = userNum.substring(0, userNum.length-4) + "****"; //숫자를 0부터 뒤에서 4개전까지 가져와라
document.write(result, "<br />");