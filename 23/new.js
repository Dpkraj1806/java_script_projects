var button1=document.getElementById("one")
button1.addEventListener("click",array)
var button2=document.getElementById("two")
button2.addEventListener("click",array)
var button3=document.getElementById("three")
button3.addEventListener("click",array)
var button4=document.getElementById("four")
button4.addEventListener("click",array)
var button5=document.getElementById("five")
button5.addEventListener("click",array)
var button6=document.getElementById("six")
button6.addEventListener("click",array)
var button7=document.getElementById("seven")
button7.addEventListener("click",array)
var button8=document.getElementById("eight")
button8.addEventListener("click",array)
var button9=document.getElementById("nine")
button9.addEventListener("click",array)
var button0=document.getElementById("zero")
button0.addEventListener("click",array)

function shuffle() {
    var arr = [1,2,3,4,5,6,7,8,9,0];
    let currentIndex = arr.length,randomIndex;
    console.log("currentIndex=",currentIndex,"arr.length=",arr.length,"randomIndex=",randomIndex)
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
        console.log("currentIndex=",currentIndex,"randomIndex=",randomIndex,"array value=",arr[currentIndex])
    }
  
    return arr;
    
  }
  function array(){
    arr=shuffle()
    console.log(arr);
    button1.value=arr[0]
    button2.value=arr[1]
    button3.value=arr[2]
    button4.value=arr[3]
    button5.value=arr[4]
    button6.value=arr[5]
    button7.value=arr[6]
    button8.value=arr[7]
    button9.value=arr[8]
    button0.value=arr[9]
      
  }

  
