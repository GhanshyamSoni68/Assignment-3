function $(selector) {
    return document.querySelector(selector);
  }
  
  function processEntry() {
    const amountDue = parseInt($("#amount-due").value);
  
    if (isNaN(amountDue) || amountDue < 0 || amountDue > 99) {
      alert("Please enter a valid amount between 0 and 99.");
      return;
    }
  
    makeChange(amountDue);
  }
  
  function makeChange(amount) {
    const quarters = Math.floor(amount / 25);
    const remaining = amount % 25;
  
    const dimes = Math.floor(remaining / 10);
    const remainingDime = remaining % 10;
  
    const nickels = Math.floor(remainingDime / 5);
    const pennies = remainingDime % 5;
  
    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    $("#calculate-change").addEventListener("click", processEntry);
  });
  