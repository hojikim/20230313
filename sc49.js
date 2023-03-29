function sum() {
  let sum = 0;
  for(let i = 0; i < arguments.length; i++) //arguments 사용자가 작성한데이터를 가져온다
  {sum += arguments[i];
  } 
  document.write(sum);
}

sum(10, 20, 30); 