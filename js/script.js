document.addEventListener('DOMContentLoaded', function () {
    const $ = selector => document.querySelector(selector);

    // Event handler for the Calculate button
    $('#calculate').addEventListener('click', processEntries);

    // Event handler for the Clear button
    $('#clear').addEventListener('click', clearFields);

    // Event handlers for Subtotal and Tax Rate text boxes
    $('#subtotal').addEventListener('click', clearField);
    $('#taxRate').addEventListener('click', clearField);

    // Move cursor to Subtotal field on page load
    $('#subtotal').focus();

    function processEntries() {
        const subtotal = parseFloat($('#subtotal').value);
        const taxRate = parseFloat($('#taxRate').value);

        if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
            alert('Subtotal must be > 0 and < 10000');
            return;
        }

        if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
            alert('Tax Rate must be > 0 and < 12');
            return;
        }

        const salesTax = subtotal * (taxRate / 100);
        const total = subtotal + salesTax;

        $('#salesTax').value = salesTax.toFixed(2);
        $('#total').value = total.toFixed(2);
    }

    function clearFields() {
        $('#subtotal').value = '';
        $('#taxRate').value = '';
        $('#salesTax').value = '';
        $('#total').value = '';
        $('#subtotal').focus();
    }

    function clearField(event) {
        event.target.value = '';
    }
});
