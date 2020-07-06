/*var a = 2;
console.log(~a)
console.log(Math.floor((Math.random() * 10) +1));
console.log(false == undefined);
console.log(false == null);
console.log(null  == undefined);
*/
var a1 = "wrong";
function a() { return "1st"; };
function a(val) { this.a1 = "right"; return "2nd"; }
console.log(new a().a1);