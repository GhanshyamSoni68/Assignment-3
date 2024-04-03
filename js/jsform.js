document.addEventListener("DOMContentLoaded", function () {
  // Form validation
  const form = document.getElementById("reservation_form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    function $(selector) {
      return document.querySelector(selector); 
    }
    const arrivalDate = document.getElementById("arrival_date").value.trim();
    const nights = document.getElementById("nights").value.trim();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    let isValid = true;

    // Validate arrival date (presence)
    if (!arrivalDate) {
    //   alert("Please enter an arrival date.");
      $('#arrival_date_error').innerHTML = " * Please enter an arrival date.";
      isValid = false;
    }
    else {
        $("#arrival_date_error").innerHTML = '';; 
      }

    // Validate nights (presence and numeric)
    if (!nights || isNaN(nights) || parseInt(nights) <= 0) {
    //   alert("Please enter a valid number of nights (positive number).");
      $('#nights_error').innerHTML = " * Please enter a valid number of nights (positive number).";
      isValid = false;
    }
    else{
        $('#nights_error').innerHTML = '';
    }
    // Validate name (presence)
    if (!name) {
    //   alert("Please enter your name.");
      $('#name_error').innerHTML = " * Please enter your name.";
      isValid = false;
    }
    else{
        $('#name_error').innerHTML = '';
    }

    // Validate email (presence and format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
    //   alert("Please enter a valid email address.");
      $('#email_error').innerHTML = " * Please enter a valid email address.";
      
      isValid = false;
    }
    else{
        $('#email_error').innerHTML = "";
    }
    // Validate phone (presence)
    if (!phone) {
    //   alert("Please enter your phone number.");
      $('#phone_error').innerHTML = " * Please enter your phone number.";
      
      isValid = false;
    }
    else{
        $('#phone_error').innerHTML = "";
    }

    // Submit the form if all fields are valid
    if (isValid) {
      form.submit();
    }
  });

  // Focus on arrival date on page load
  document.getElementById("arrival_date").focus();
});
