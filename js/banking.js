// Creat Function getInputValue --1
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValueText = inputField.value;
  const inputAmount = parseFloat(inputValueText);
  // clear input Field
  inputField.value = "";
  // return Amount
  return inputAmount;
}
// Creat Function Total --2

function getTotal(totalId, NewAmount) {
  const getTotalId = document.getElementById(totalId);
  const totalAmountText = getTotalId.innerText;
  const newTotalAmount = parseFloat(totalAmountText);
  getTotalId.innerText = newTotalAmount + NewAmount;
}
//Function --3
function getCurrentBalance() {
  const previousBalance = document.getElementById("balance-total");
  const previousBalanceText = previousBalance.innerText;
  const balanceTotal = parseFloat(previousBalanceText);
  return balanceTotal;
}
// Update Balance Total --4

function getTotalBalance(amount, isAdd) {
  const previousBalance = document.getElementById("balance-total");
  if (isAdd == true) {
    previousBalance.innerText = getCurrentBalance() + amount;
  } else {
    previousBalance.innerText = getCurrentBalance() - amount;
  }
}

/* -------------------------------------------- */
//    step-1 : Add Click Event on deposit Button
/* -------------------------------------------- */
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // step-2 :get the input field

    /*      const depositInput = document.getElementById("deposit-input");
    // // step-2.1 : set inputted value in const variable

     const newDepositAmountText = depositInput.value;
    // // step-2.2 : parse the inputted text value to float.

    const newDepositAmount = parseFloat(newDepositAmountText); */
    const newDepositAmount = getInputValue("deposit-input");
    if (newDepositAmount > 0) {
      getTotal("deposit-total", newDepositAmount);

      getTotalBalance(newDepositAmount, true);
    }

    // Update Deposit Total

    // step-3 : Get the Deposit  amount Info

    /*    const depositTotal = document.getElementById("deposit-total");

    // step-4 : set the Deposit amount Info in const variable

    const previousDepositTotalText = depositTotal.innerText;
    // step-4.1 : parse the Deposit amount in Float

    const previousDepositTotal = parseFloat(previousDepositTotalText); */
    // const previousDepositTotal = getTotal("deposit-total");
    // step-5 : Get the sum of total Deposit Amount
    // step-6 : Set/store the total Deposit Amount in  Deposit Amount Info
    // depositTotal.innerText = previousDepositTotal + newDepositAmount;
    /*    getTotal("deposit-total", newDepositAmount);

    getTotalBalance(newDepositAmount, true); */
    // const previousBalance = document.getElementById("balance-total");
    // const previousBalanceText = previousBalance.innerText;
    // const balanceTotal = parseFloat(previousBalanceText);

    // previousBalance.innerText = balanceTotal + newDepositAmount;

    // clear deposit input field
    /* depositInput.value = ""; */
  });
// Update Total Withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    /*const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const withdrawNewAmount = parseFloat(withdrawInputText); */

    const withdrawNewAmount = getInputValue("withdraw-input"); //--1
    if (withdrawNewAmount > 0 && withdrawNewAmount < getCurrentBalance()) {
      getTotal("withdraw-total", withdrawNewAmount); //--2
      getTotalBalance(withdrawNewAmount, false);
    }

    /*  
    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawAmount + withdrawNewAmount; */
    // getTotal("withdraw-total", withdrawNewAmount); //--2

    // Update Balance Total After Withdraw

    /*     const previousBalance = document.getElementById("balance-total");
    const previousBalanceText = previousBalance.innerText;
    const balanceTotal = parseFloat(previousBalanceText);

    previousBalance.innerText = balanceTotal - withdrawNewAmount;
    */
    /* previousBalance.innerText = balanceTotal - withdrawNewAmount;
     */
    // getTotalBalance(withdrawNewAmount, false);

    /*  withdrawInput.value = ""; */
  });
