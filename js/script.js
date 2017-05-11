var shaObj = new jsSHA("SHA-512", "TEXT");
var str = Math.random().toString(36).substring(7);
shaObj.update(str);
var h = shaObj.getHash("HEX");

document.getElementById("identicon").setAttribute("data-jdenticon-hash", h);