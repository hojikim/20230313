let rightId = "korea";
let rightPw = 1234;

function login(id, pw) {
  if(id == rightId) {
    if(pw == rightPw) {
      document.write(`${id}님 방문을 환영합니다!`); //`백틱을 사용 키보드상 1옆에 물결 
    } else {
      alert("잘못된 비번입니다!");
    } 
  } else {
    alert("존재하지 않는 아이디입니다!");
  }
}

let userId = prompt("아이디를 입력하세요!", "");
let userPw = prompt("패스워드를 입력하세요!", "");
login(userId, userPw); //여기서 받아온 아이디 패스워드를 위에 login(id, pw) 를 넣어준다.