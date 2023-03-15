let month = prompt("현재는 몇 월 입니까?", "0");

if(month >= 9 && month <= 11) {
  document.write("독서하기 좋은 가을이네요!");
} else if(month >= 6 && month <= 8) {
  document.write("여행하기 좋은 여름이네요!");
} else if(month >= 3 && month <= 5) {
  document.write("햇살 가득한 봄이네요!");
} else{
  document.write("스키의 계절 겨울이네요!");
}