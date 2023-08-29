function sub1() {
    window.alert('Are you sure?');
}
function firstload() {
    alert('already');
}
function login1() {
    window.alert('can`t login right now, the system is being reparation');
}
function klik() {
    document.getElementById('klik').innerHTML = "thankyou for your joining, please tell us if you need anything";
}
function upperchange(){
    var name = document.getElementById('nama');
    name.value = name.value.toUpperCase();
}
function lowerkeyup(){
   var usernama = document.getElementById('usernama');
   usernama.value = usernama.value.toLowerCase();
}
function colorkeydown(){
    document.getElementById('nama').style.backgroundColor = "rgba(148, 146, 146, 0.6)";
}
function coloronfokus(a){
    a.style.background = "rgba(148, 146, 146, 0.6)";
}
function threedonmouseover(x){
    x.style.height = "400px";
    x.style.width = "400px";
}
function threedonmouseout(x){
    x.style.height = "200px";
    x.style.width = "200px";
}
function dex2onmousedown(){
    document.getElementById('tesmouse').style.color = "coral";
}
function dex2onmouseup(){
    document.getElementById('tesmouse').style.color = "green";
}