let traffic = prompt("교통비 얼마나왔나요?", "ex.3000");
let eat = prompt("식비 얼마나왔나요?", "ex.6000");
let drink = prompt("음료비 얼마나왔나요?", "ex.3000");

let normal = Number(traffic) +Number(eat) + Number(drink);
let result = normal < 10000;
let result1 = 10000 - normal;
let result2  = normal - 10000;

result = result ? result1 + "원 남았습니다! 돈관리 잘하셨어요" : result2 + "원 초과! 조금만 더 노력해주세요";
document.write(result);