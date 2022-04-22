window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let { amount, years, rate } = getCurrentUIValues(); 
  document.getElementById("loan-amount").value = amount;
  document.getElementById("loan-years").value = years; 
  document.getElementById("loan-rate").value = rate; 

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  let monthlyPayment = calculateMonthlyPayment(values); 
  updateMonthly(monthlyPayment); 
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let {amount, years, rate} = values; 
  if(amount === 0 || years === 0 || rate === 0){
    return false;
  }
  rate = (rate / 100) / 12; 
  years = years * 12; 

  let firstNum = rate * amount; 
  let secondNum = 1 - (1 + rate) ** -years; 

  return String((firstNum / secondNum).toFixed(2)); 
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  if (monthly === false){
    document.querySelector('#monthly-payment').innerText = "Please enter numbers."
  } else {
    document.querySelector('#monthly-payment').innerText = monthly; 
  }
}
