var text=""
var new_text="y"
var button1=document.getElementById("one")
button1.addEventListener("click",one)

var button2=document.getElementById("two")
button2.addEventListener("click",two)

var button3=document.getElementById("three")
button3.addEventListener("click",three)

var button4=document.getElementById("four")
button4.addEventListener("click",four)

var button5=document.getElementById("five")
button5.addEventListener("click",five)

var button6=document.getElementById("six")
button6.addEventListener("click",six)

var button7=document.getElementById("seven")
button7.addEventListener("click",seven)

var button8=document.getElementById("eight")
button8.addEventListener("click",eight)

var button9=document.getElementById("nine")
button9.addEventListener("click",nine)

var buttond=document.getElementById("point")
buttond.addEventListener("click",point)

var button0=document.getElementById("zero")
button0.addEventListener("click",zero)

var buttonr=document.getElementById("reset")
buttonr.addEventListener("click",reset)

var input_text=document.getElementById("text_input")
// input_text.addEventListener("input",ip_text)
console.log(text)

function ip_text(x){
    input_text.value=x
    console.log(x)
    text=x
}

function one(){
    let one=1
    new_text=one
    t=`${text}`+`${new_text}`
    ip_text(t)
}
function two(){
    let two=2
    new_text=two
    t=`${text}`+`${new_text}`
    ip_text(t)
}

function three(){
    let three=3
    new_text=three
    t=`${text}`+`${new_text}`
    ip_text(t)
}

function four(){
    let four=4
    new_text=four
    t=`${text}`+`${new_text}`
    ip_text(t)
}

function five(){
    var five=5
    new_text=five
    t=`${text}`+`${new_text}`
    ip_text(t)
}
function six(){
    var six=6
    new_text=six
    t=`${text}`+`${new_text}`
    ip_text(t)
}
function seven(){
    var seven=7
    new_text=seven
    t=`${text}`+`${new_text}`
    ip_text(t)
}
function eight(){
    var eight=8
    new_text=eight
    t=`${text}`+`${new_text}`
    ip_text(t)
}
function nine(){
    var nine=9
    new_text=nine
    t=`${text}`+`${new_text}`
    ip_text(t)
}
function point(){
    var point="."
    new_text=point
    t=`${text}`+`${new_text}`
    ip_text(t)
}
function zero(){
    var zero=0
    new_text=zero
    t=`${text}`+`${new_text}`
    ip_text(t)
}
function reset(){
    var reset=""
    new_text=reset
    t=reset
    ip_text(t)
}