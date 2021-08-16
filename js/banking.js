/* -------------------------------------------- */
//    step-1 : Add Click Event on deposit Button
/* -------------------------------------------- */
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // step-2 :get the input field

    const depositInput = document.getElementById("deposit-input");
    // step-2.1 : set inputted value in const variable

    const newDepositAmountText = depositInput.value;
    // step-2.2 : parse the inputted text value to float.

    const newDepositAmount = parseFloat(newDepositAmountText);

    // Update Deposit Total

    // step-3 : Get the Deposit  amount Info

    const depositTotal = document.getElementById("deposit-total");

    // step-4 : set the Deposit amount Info in const variable

    const previousDepositTotalText = depositTotal.innerText;
    // step-4.1 : parse the Deposit amount in Float

    const previousDepositTotal = parseFloat(previousDepositTotalText);
    // step-5 : Get the sum of total Deposit Amount

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // step-6 : Set/store the total Deposit Amount in  Deposit Amount Info

    depositTotal.innerText = newDepositTotal;

    // Update Balance Total

    const previousBalance = document.getElementById("balance-total");
    const previousBalanceText = previousBalance.innerText;
    const balanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = balanceTotal + newDepositAmount;
    previousBalance.innerText = newBalanceTotal;

    // clear deposit input field
    depositInput.value = "";
  });
// Update Total Withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const withdrawNewAmount = parseFloat(withdrawInputText);
    // console.log(withdrawNewAmount);
    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotalText);

    const newWithdrawTotal = previousWithdrawAmount + withdrawNewAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // Update Balance Total After Withdraw

    const previousBalance = document.getElementById("balance-total");
    const previousBalanceText = previousBalance.innerText;
    const balanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = balanceTotal - newWithdrawTotal;
    previousBalance.innerText = newBalanceTotal;

    withdrawInput.value = "";
  });
