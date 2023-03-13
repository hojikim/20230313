// A = B
// A += B    // A = A+B
// A -= B    // A = A-B
// A *= B    // A = A*B
// A /= B    // A = A/B
// A %= B    // A = A%B
let num1 = 10;
let num2 = 3;

num1 += num2
document.write(num1, "<br>");
//num1에서 받은 값으로 밑에서 적용되어 계산된다
num1 -= num2
document.write(num1, "<br>");

num1 *= num2
document.write(num1, "<br>");

num1 %= num2
document.write(num1, "<br>");