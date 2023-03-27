let greenArr = ["교대", "방배", "강남"];
let yellowArr = ["미금", "정자", "수서"];

greenArr.splice(2, 1, "서초", "역삼"); //두번째 인덱스값에서 부터 1개를 뺴라는 뜻 
document.write(greenArr, "<br />");

let data1 = yellowArr.pop(); //마지막 데이터 값을 삭제하라 
let data2 = yellowArr.shift(); //첫번째 데이터 값을 삭제하라

yellowArr.push(data2); //데이터를 밀어라??

document.write(yellowArr, "<br />");

yellowArr.unshift(data1); //앞으로 밀어라??
document.write(yellowArr, "<br />");