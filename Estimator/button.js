var sel=document.getElementById("select")
sel.addEventListener("click",main)
function main()
{
    if(sel!="Select an item")
    {
        console.log(sel.value)
        const element=document.getElementById("myBtn")
        element.addEventListener("click", choice);
    }
}

function choice()
        {
            var x=document.getElementById("select").value
            console.log(x);
            if(x=="gate")
            {
                table_heading();gate();
                var unit_total=document.querySelector("unit_total")
                unit_total.addEventListener("mouseon",add)
                var ad2=document.getElementById("add2")
                ad2.addEventListener("click",row)
                function row()
                {
                    var i=2
                    i=new_row(i)
                    console.log("add2 button clicked")
                } 
            }
            else if(x=="door")
            {
                table_heading()
            }
            else if(x=="fan")
            {
                table_heading()
            }
            else if(x=="window")
            {
                table_heading()
            }
            
        }
 //Funtion for table heading
 function table_heading()
 {
    console.log("table heading function starts"); //table heading function starts
    console.log("main add button is clicked");
     document.getElementById("main_table").innerHTML=`<tr><th id="item_name"rowspan="7">type</th><th id="accesory" value="">Accesory</th><th>Unit Price</th><th>Qty</th><th>Price</th><th>Action</th><th rowspan="6"><button id="add2">Add</button></th></tr><th colspan="3">Total</th><td colspan="2"></td></tr>`;
     var x=document.getElementById("select").value
     console.log("item type value is",x);// item type value is
     itemname=document.getElementById("item_name")
     itemname.innerHTML=x
    console.log(" table heading function ends");// table heading function end
}

function gate()
{  
    console.log("function gate starts");//function gate starts
    var gate_row=main_table.insertRow(1)
    gate_row.innerHTML='<tr><th>Frame</th><td><input type="number"id="unit_price_1" value=""></td><td><input type="number" id="qty_1" value=""></td><td><input type="number" id="unit_total" value=""></td><td><button class="btnx">x</button></td></tr>'
    var gate_row=main_table.insertRow(1)
    gate_row.innerHTML='<tr><th>Door</th><td><input type="number"id="unit_price_1" value=""></td><td><input type="number" id="qty_1" value=""></td><td><input type="number" class="price_1" value=""></td><td><button class="btnx">x</button></td></tr>'
    var gate_row=main_table.insertRow(1)
    gate_row.innerHTML='<tr><th>Screw</th><td><input type="number"id="unit_price_1" value=""></td><td><input type="number" id="qty_1" value=""></td><td><input type="number" class="price_1" value=""></td><td><button class="btnx">x</button></td></tr>'
    var gate_row=main_table.insertRow(1)
    gate_row.innerHTML='<tr><th>Lock</th><td><input type="number"id="unit_price_1" value=""></td><td><input type="number" id="qty_1" value=""></td><td><input type="number" class="price_1" value=""></td><td><button class="btnx">x</button></td></tr>'
    console.log("function gate ends");//function gate ends
}


function new_row()
{
    console.log("function new row starts");//function new row starts
    var new_row1=main_table.insertRow(1)
    new_row1.innerHTML='<tr><td ><select name="Select an item" id="selet_accesory"><option value="" selected>Select an item</option><option value="Frame">frame</option><option value="Door">door</option><option value="Screw">Screw</option><option value="Lock">lock</option></select></td><td><input type="number"id="unit_price_1" value=""></td><td><input type="number" id="qty_1" value=""></td><td><input type="number" id="price" value=""></td><td><button class="btnx">x</button></td></tr>'
    console.log("row added") 
    console.log("function new row ends");//function new row ends
}

function select_accesory()
{
    console.log("function select accessory starts");//function select accessory starts
    var selected_value=document.getElementById("selet_accesory").value
    var selected_accesory=document.getElementById("selected_accesory")
    selected_accesory.innerHTML=selected_value
    console.log("function select accessory ends");//function select accessory ends
}

function add()
{
    unit_total.value.innerHTML=document.getElementById("unit_price_1").value*document.getElementById("qty_1").value
}
