function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const depositAmounttext = inputField.value;
    const amountValue = parseFloat(depositAmounttext);
 // deposit clear input field 

 inputField.value = '';
 return amountValue;
}

function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal =  parseFloat(totalText);
    totalElement.innerText = previousTotal +  amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(totalAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    previousBalanceTotal = getCurrentBalance();
    if (isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + totalAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - totalAmount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function(){
   const depositAmount = getInputValue('deposit-input');
   if (depositAmount > 0) {
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);
   }
}); 

document.getElementById('withdraw-button').addEventListener('click',function(){
const withdrawAmount = getInputValue('withdraw-input');
const currentBalance = getCurrentBalance();
if (withdrawAmount >= 0 && withdrawAmount <= currentBalance) {
  updateTotalField('withdraw-total', withdrawAmount);
  updateBalance(withdrawAmount, false);
}


if (withdrawAmount < currentBalance)
{
console.log('You do not have enough balance');
}
});

//    const errorMessage = document.getElementById('withdraw-input').innerHTML='You do not have enough balance';
// console.log(errorMessage);
