let phoneNum = prompt("당신의 핸드폰 번호를 입력해주세요!", "번호만 입력");
let result_1 = phoneNum.substring(0, phoneNum.length-4);
document.write(result_1, "****", "<br/>");

let imgSrc = "img/bnt_out.jpg";
let result_2 = imgSrc.replace("out.jpg", "over.jpg");
document.write(result_2, "<br/>");