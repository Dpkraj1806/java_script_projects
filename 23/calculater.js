// var button1=document.getElementById("one")
// button1.addEventListener("click",one)

// var button2=document.getElementById("two")
// button2.addEventListener("click",two)

// var button3=document.getElementById("three")
// button3.addEventListener("click",three)

// var button4=document.getElementById("four")
// button4.addEventListener("click",four)

// var button5=document.getElementById("five")
// button5.addEventListener("click",five)

// var button6=document.getElementById("six")
// button6.addEventListener("click",six)

// var button7=document.getElementById("seven")
// button7.addEventListener("click",seven)

// var button8=document.getElementById("eight")
// button8.addEventListener("click",eight)

// var button9=document.getElementById("nine")
// button9.addEventListener("click",nine)

// var buttond=document.getElementById("point")
// buttond.addEventListener("click",point)

// var button0=document.getElementById("zero")
// button0.addEventListener("click",zero)

// var buttonr=document.getElementById("reset")
// buttonr.addEventListener("click",reset)

var input_text=document.getElementById("text_input")
// input_text.addEventListener("input",ip_text)

function ip_text(x){
    input_text.value+=`${x}`
}

function dot(){
    var x="."
    input_text.value+=`${x}`
}
function reset(){
    input_text.value=" "
}