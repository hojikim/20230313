let arr_1 = ["사당", "교대", "방배", "강남"];
let arr_2 = ["신사", "압구정", "옥수"];

let result = arr_1.join("-"); //데이터를 가지고오는데 중간에 표기를해서 넣을 수 있다 그것이 join
document.write(result, "<br />");

result = arr_1.concat(arr_2); //뒤에 붙여서 바로가져오는것
document.write(result, "<br />");

result = arr_1.slice(1, 3); // slice는 인덱스 1번에서부터 3미만까지 데이터를 가져와라 1번과 2번 해당
document.write(result, "<br />");

arr_1.sort();    // 오름차순 가나다라마사.. 
document.write(arr_1, "<br />");

arr_2.reverse(); // 배치순서를 꺼꾸로 가져온다
document.write(arr_2, "<br />");
