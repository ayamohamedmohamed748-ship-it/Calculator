let num1 =document.getElementById("num1")
let num2 =document.getElementById("num2") 
let result =document.getElementById("result")
function add() {
    result.innerHTML="result"+(Number(num1.value)+Number(num2.value))
    
}
function subtact(){
result.innerHTML="result"+(Number(num1.value)-Number(num2.value))



}
function multiply(){

result.innerHTML="result"+(Number(num1.value)*Number(num2.value))


}
function divide (){
result.innerHTML="result"+(Number(num1.value)/Number(num2.value))


}



let text=document.getElementById("text")
function Hide (){

    text.style.display="none"
}
function show (){

    text.style.display="block"
}






