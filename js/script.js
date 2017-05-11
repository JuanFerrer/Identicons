var shaObj = new jsSHA("SHA-512", "TEXT");
var str = Math.random().toString(36).substring(7);
//str = "v6sqiv"; //#
shaObj.update(str);
var h = shaObj.getHash("HEX");

var data = new Identicon(h, 420).toString();
document.getElementById("identicon").setAttribute("src", 'data:image/png;base64,' + data);