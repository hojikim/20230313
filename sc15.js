// && and  / || or / !A 참과 거짓을 뒤집음
let a = 10;
let b = 20;
let m = 30;
let n = 40;

let result;
result = a > b || b >= m || m > n;
document.write(result, "<br />");

result = a > b || b >= m || m <= n;
document.write(result, "<br />");

result = a <= b && b >= m && m <= n;
document.write(result, "<br />");

result = a <= b && b <= m && m <= n;
document.write(result, "<br />");

result = !(a > b);
document.write(result, "<br />");