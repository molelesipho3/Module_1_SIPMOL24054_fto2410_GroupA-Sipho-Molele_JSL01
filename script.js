function validateSyntax() {
    // Get the input value
    let input = document.getElementById('petInput').value;

    // Check if the input starts with "pet_", followed by 4 digits (year), and then alphanumeric characters
    const isValid = /^pet_\d{4}[a-zA-Z0-9]+$/.test(input);

    // Set the result message and style based on validation
    let result = isValid ? "Valid Syntax ✅" : "Invalid Syntax ❌";
    document.getElementById('result').innerText = result;
    document.getElementById('result').className = isValid ? 'valid emoji' : 'invalid emoji';
}
