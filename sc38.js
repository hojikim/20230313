let t = "Hello Thank you good luck to you";
document.write(t.charAt(16), "<br/>"); //특정인덱스 값을 가져와준다
document.write(t.indexOf("you"), "<br/>"); //index값에서 you로 시작되는 인덱스값을 찾아주세요 
document.write(t.indexOf("you", 16), "<br/>"); //16번쨰 인덱스값에서 you를 찾아봐주세요
document.write(t.lastIndexOf("you"), "<br/>");
document.write(t.lastIndexOf("you",25), "<br/>");
document.write(t.match("luck"), "<br/>");
document.write(t.search("you"), "<br/>");
document.write(t.substr(21 , 4), "<br/>"); //21번째에서 4개 
document.write(t.substring(6, 12), "<br/>"); //6번째부터 시작해서 12전까지 끌고와라
document.write(t.replace("you", "me"), "<br/>"); //첫번쨰나오는 you를 me로 교체해라
document.write(t.toLocaleLowerCase(), "<br/>");
document.write(t.toLocaleUpperCase(), "<br/>");
document.write(t.length, "<br/>"); //인덱스값이 31이지만 총개수는 32개이다

let s = t.split(" ");
document.write(s[0], "<br/>");
document.write(s[4], "<br/>");
let str = "A";
let k = str.charCodeAt(0); //A에 대한 아스키코드 값 
document.write(k, "<br/>");
document.write(String.fromCharCode(65)); //65아스키코드를 가진 문자열은 A
