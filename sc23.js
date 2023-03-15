let id = "david";
let pw = "1234";

let user_id = prompt("당신의 아이디를 입력해주세요!"); 

if(id == user_id) {
  let user_pw = prompt("당신의 비밀번호를 입력해주세요!");
  //작성한 순서대로 진행되기때문에 if문안에 넣어서 순서대로 진행되게 만들수있다
  if(pw == user_pw) {
    document.write(user_id + "님 반갑습니다!"); 
  } else {
    alert("비밀번호가 일치하지 않습니다!");
    location.reload();
    //다시 초기화해서 돌아가기
  }
} else {
  alert("아이디가 일치하지 않습니다!");
  location.reload();
}

