// 평균체중 = (신장 - 100) * 0.9
let name = prompt("당신의 이름은?", ""); //사용자로부터 값을 받을때 prompt
let height = prompt("당신의 키는?", "");
let weight = prompt("당신의 몸무게는?"< "");

let nomal_w=(height - 100) * 0.9;
let result = weight >= nomal_w - 5 && weight <= nomal_w + 5;
result = result ? "적정 체중입니다!" : "적정체중이 아닙니다!";
document.write(name + "님은" + result);