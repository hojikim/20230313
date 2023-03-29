let color = ["white", "yellow", "aqua", "purple"];

let i = 0;
function changeColor() {
  i++;
  if(i >= color.length) {
    i = 0; // i는 4가되는 순간 부터 다시 0이된다 즉 다시 반복
  }
  
  let bodyTag = document.getElementById("theBody"); //id요소를 불러와서 bodyTag안에 넣을 것이다
  bodyTag.style.backgroundColor = color[i];
}