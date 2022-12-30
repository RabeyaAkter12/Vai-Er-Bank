/**
 1. add event handler with the withdraw button
 2. get the  withdraw amount from the withdraw input field
 2.5. also make sure to convert the into a number by using parseFloat
 3. Get previous withdraw total

 4. calculate total withdraw amount
 4.5. set withdraw amount
 5. get the previous balance total
7. clear the input field
 * **/ 

//  step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString)
// console.log(newWithdrawAmount)


// step-3
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

 
 // step-5: get balance current total
 const balanceTotalElement = document.getElementById('balance-total');
 const previousBalanceTotalString = balanceTotalElement.innerText;
 const previousBalanceTotal = parseFloat(previousBalanceTotalString);

 withdrawField.value = '';
 
if(newWithdrawAmount > previousBalanceTotal){
    alert('Vai er bank e eto taka nai')
}

// step-4
const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
withdrawTotalElement.innerText = currentWithdrawTotal;

 // step-6: calculate current total balance
 const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
 // set the balance total
 balanceTotalElement.innerText = newBalanceTotal 

 // step-7: clear the deposit field
 
 
})