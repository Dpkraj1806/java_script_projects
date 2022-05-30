const select=document.getElementById("add")
select.addEventListener("click",add_row);

function add_row() {
    var codeBlock= '<table border="1" id="table"><tr><th>No</th><th>Accesory</th><th>Unit Price</th><th>Qty</th><th>Price</th><th>Action</th><th><button id="add2">Add</button></tr></table>' 
       document.getElementById("add_row").innerHTML=codeBlock;
  }





  var selectvalue1 = document.getElementById('dropdown');
console.log(selectvalue1);
var add = document.getElementById('btn');

add.addEventListener('click', properties);
function properties() {
    var value = selectvalue1.value;
    console.log(value);
}


  




var tables='<table border="1">'+
'<tr>'+
'<th>Accessory <select>'+
'<option id="accessory">Select</option>'+
'<option>Frame</option>'+
'<option>Door</option>'+
'<option>Window</option>'+
'<option>Gate</option>'+
'</select></th>'+
'<th>Unit price</th>'+
'<th>Qty</th>'+
'<th>Price</th>'+
'<th>Action</th>'+
'</tr>'+
'</table>'


// '<tr>'+
// '<th>Frame<th>'+
// '<td><input type="number"><td>'+
// '<td><input type="number"><td>'+
// '<td><input type="number"><td>'+
// '<td><button>x<button></td>'+
// '</tr>'+
// '<tr>'+
// '<th>Door<th>'+
// '<td><input type="number"><td>'+
// '<td><input type="number"><td>'+
// '<td><input type="number"><td>'+
// '<td><button>x<button></td>'+
// '</tr>'+
// '<tr>'+
// '<th>Stopper<th>'+
// '<td><input type="number"><td>'+
// '<td><input type="number"><td>'+
// '<td><input type="number"><td>'+
// '<td><button>x<button></td>'+
// '</tr>'+
// '<tr>'+
// '<th>Screw<th>'+
// '<td><input type="number"><td>'+
// '<td><input type="number"><td>'+
// '<td><input type="number"><td>'+
// '<td><button>x<button></td>'+
// '</tr>'+
// '<tr>'+
// '<th><th>'+
// '<td><input type="number"><td>'+
// '<td><input type="number"><td>'+
// '<td><input type="number"><td>'+
// '<td><button>x<button><button>+<button></td>'+
// '</tr>'+

// '</table>'
// console.log(tables);

add.addEventListener('click',merge)
function merge(){
document.getElementById('table').innerHTML=tables
var access=document.getElementById("accessory")
console.log(access);
access.addEventListener("mouseout",acces)

function acces(){
    var val = access.value;
    console.log(val);
}
}







