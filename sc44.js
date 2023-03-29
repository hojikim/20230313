let form = document.querySelector('form'); //form태그안에 있는걸 form변수에 가져와라
let input = document.querySelector('input'); //input태그안에 있는걸 input변수에 가져와라
let ul = document.querySelector('ul'); 

form .addEventListener('submit', (event) => {
  event.preventDefault(); //처음 값으로 돌아가는걸 방지 , 제출이 되어도 데이터가 남아있게 하는것 

  if(input.value !=='') {
    let li = document.createElement('li'); //다음과 같은 요소 생성, li태그안에
    li.innerText = input.value;
    ul.appendChild(li);

    input.value = ''; //input value 값을 공백으로 만들기
  }
}) //form에다가 이벤트를 넣을것이다  submit 제출하기 이벤트 - 제출하면 데이터가 사라진다