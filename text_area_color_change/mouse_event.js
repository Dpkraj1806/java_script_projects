const inputtext=document.getElementById("add_color")
const button=document.getElementById("btn")
inputtext.addEventListener("click",input_text);
function input_text(){
    let x=inputtext.style.color
    let y=document.getElementById("add_color").value
    document.getElementById("add_color").style.color=`${y}`
}   