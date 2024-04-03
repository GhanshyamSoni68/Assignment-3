function $(selector) {
    return document.querySelector(selector);
  }
  
  function processEntry() {
    const taxableIncome = parseFloat($("#taxable-income").value);
  
    if (isNaN(taxableIncome) || taxableIncome <= 0) {
      alert("Please enter a valid taxable income greater than zero.");
      $("#taxable-income").focus();
      return;
    }
  
    const incomeTax = calculateTax(taxableIncome);
    $("#income-tax").value = incomeTax.toFixed(2);
    $("#taxable-income").focus();
  }
  
  function calculateTax(income) {
    if (income <= 9875) {
      return income * 0.10; // 10% tax rate for the first bracket
    } else if (income <= 40125) {
      return 987.50 + (income - 9875) * 0.12; // 12% tax rate for the second bracket
    } else if (income <= 85525) {
      // Third tax bracket
      return 4617.50 + (income - 40125) * 0.22; // 22% tax rate for the third bracket
    } else if (income <= 163300) {
      // Fourth tax bracket
      return 14605.50 + (income - 85525) * 0.24; // 24% tax rate for the fourth bracket
    } else if (income <= 207350) {
      // Fifth tax bracket
      return 33271.50 + (income - 163300) * 0.32; // 32% tax rate for the fifth bracket
    } else if (income <= 518400) {
      // Sixth tax bracket
      return 47367.50 + (income - 207350) * 0.35; // 35% tax rate for the sixth bracket
    } else {
      // Seventh tax bracket
      return 156235.00 + (income - 518400) * 0.37; // 37% tax rate for the seventh bracket
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    $("#calculate-tax").addEventListener("click", processEntry);
  });
  