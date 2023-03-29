let menu = ["짜장면", "돈까스", "된장국", "부대찌개", "회덮밥"];
let menuNum = Math.floor(Math.random()*menu.length); //메뉴의 개수만큼 숫자중에 랜덤으로 숫자를 뽑아라 0 1 2 3 4
let result = menu[menuNum];
document.write(result);