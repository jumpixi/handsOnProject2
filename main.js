function calculateCredit() { //Calculate credit funciton
    // Get input values
    var name = document.getElementById("name").value;
    var gpa = parseFloat(document.getElementById("gpa").value);

    // Check if GPA is a valid number
    if (isNaN(gpa) || gpa < 0 || gpa > 4) {
        alert("Please enter a valid GPA between 0 and 4.");
        return;
    }

    // Calculate bookstore credit
    var credit = gpa * 10;

    // Display result using DOM manipulation
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `
        <p>Hello ${name}!</p>
        <p>Your GPA is ${gpa.toFixed(2)}.</p>
        <p>You have earned a bookstore credit of $${credit.toFixed(2)}.</p>
    `;
}