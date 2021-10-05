let val1 = "";
let cal = "";
let val2 = "";
let result = "";
let flag = true;
function calculating(e) {
  val1 += e;
  document.getElementById("result").innerHTML = val1;
}
function resulting() {
  result = eval(val1).toFixed(2);
  document.getElementById("result").innerHTML = result;

}
function reset() {
  document.getElementById("result").innerHTML = "0";
  result = "";
  val1 = "";
  cal = "";
  val2 = "";
}