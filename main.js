let bill = 0
 let tipPercentage = 0
 let numberOfPeople = 0
 
 let billInput = document.querySelector("#bill")
 billInput.addEventListener("input", recieveBillValue)
 
 function recieveBillValue(){
     bill = billInput.valueAsNumber
     calculate()
 }
 
 let numberOfPeopleInput = document.querySelector("people")
 numberOfPeopleInput.addEventListener("input", recieveNumberOfPeople)
 
 function recieveNumberOfPeople(){
     numberOfPeople = numberOfPeopleInput.valueAsNumber
     calculate()
 }
 
 function recieveTipPencentage(value){
     let buttonPercentage = document.querySelector()
 }
 
 function calculate(){
     if(bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0){
         console.log("calcular")
     }else{
         console.log("não é possivel calcular")
     }
 }