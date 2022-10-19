// step-1 get the btn-deposit clicked
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // s-2 get the value of withdraw field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // s-3 get the current withdraw amount
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
    
    // s-4 adding
    const withdrawTotalAmount = newWithdrawAmount + previousWithdrawAmount;
    withdrawTotalElement.innerText = withdrawTotalAmount;

    // s-5 get current total balance
    const totalBalance = document.getElementById('balance-total');
    const previousBalanceAmountString = totalBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);

    // // minus
    const newBalanceAmount = previousBalanceAmount - withdrawTotalAmount;
    totalBalance.innerText = newBalanceAmount;

    // s-7 clear thw withdraw amount
    withdrawField.value = '';
})