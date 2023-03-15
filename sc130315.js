let num1 = 10;
let num2 = 20;
let result;

num1--; 
document.write(num1, "<br />");

num1++; 
document.write(num1, "<br />");

result = num2++; //num2를 result에 주고 그뒤에 ++가 되는거임 연산자 위치따라서 값달라짐 그러므로 result는 20
document.write(result, "<br />");

result = ++num2; //21+1 위에 값을 받으므로  
document.write(num2, "<br />");
