//  getInputValue
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValueText = inputField.value;
  const inputAmount = parseFloat(inputValueText);
  inputField.value = "";
  return inputAmount;
}
//  getTotal

function getTotal(totalId, NewAmount) {
  const getTotalId = document.getElementById(totalId);
  const totalAmountText = getTotalId.innerText;
  const newTotalAmount = parseFloat(totalAmountText);
  getTotalId.innerText = newTotalAmount + NewAmount;
}

// get previous total Balance
function getPreviousBalance() {
  const previousBalance = document.getElementById("balance-total");
  const previousBalanceText = previousBalance.innerText;
  const balanceTotal = parseFloat(previousBalanceText);
  return balanceTotal;
}

// get total balance

function getTotalBalance(amount, isAdd) {
  const previousBalance = document.getElementById("balance-total");

  if (isAdd == true) {
    previousBalance.innerText = getPreviousBalance() + amount;
  } else {
    previousBalance.innerText = getPreviousBalance() - amount;
  }
}

// Update total deposit
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const newDepositAmount = getInputValue("deposit-input");
    if (newDepositAmount > 0) {
      getTotal("deposit-total", newDepositAmount);
      // Update Balance Total After Deposit
      getTotalBalance(newDepositAmount, true);
    }
  });
// Update Total Withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawNewAmount = getInputValue("withdraw-input");
    if (withdrawNewAmount > 0 && withdrawNewAmount < getPreviousBalance()) {
      getTotal("withdraw-total", withdrawNewAmount);
      // Update Balance Total After Withdraw
      getTotalBalance(withdrawNewAmount, false);
    }
  });
