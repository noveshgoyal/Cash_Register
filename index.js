const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes =[2000,500,100,50,20,10,5,1];
const givenCash = document.getElementById('given-cash'); 

givenCash.style.display = "none";
billAmount.addEventListener('input', () => givenCash.style.display = 'block')

checkButton.addEventListener("click", function validateamount(){
    if(billAmount.value > 0){
        if(parseInt(cashGiven.value) >= parseInt(billAmount.value)){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
            showMessage("Collect the remaining cash");
        }
        else{
            showMessage("The cash given should be atleast equal to billamount");
        }
    }
    else{
        showMessage("Invalid Bill Amount");
    }
}); 

function calculateChange(amountToBeReturned){
    for(let i=0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMessage(msg){
    message.innerText = msg;
}
