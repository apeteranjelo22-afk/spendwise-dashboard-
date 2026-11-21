
// ==================================
// SPENDWISE BUDGET APPLICATION
// ==================================

// 1. Application Variables

const currency = "KSh";

console.log("Welcome to SpendWise!");

// 2. Function to Collect User Input

function getAmount(message) {
    let input = prompt(message);

    // Check if the user cancelled
    if (input === null) {
        return null;
    }

    let amount = Number(input);

    // Validate the entered amount
    if (input.trim() === "" ||
        !Number.isFinite(amount) ||
        amount < 0) {

        alert("Please enter a valid positive amount.");
        return null;
    }

    return amount;
}

// 3. Collect Budget and Expenses

let monthlyBudget = getAmount(
    "Enter your monthly budget in KSh:"
);

if (monthlyBudget !== null) {

    let totalExpenses = getAmount(
        "Enter your total expenses in KSh:"
    );

    if (totalExpenses !== null) {

        // 4. Function to Calculate Remaining Balance

        function calculateBalance(budget, expenses) {
            return budget - expenses;
        }

        // 5. Calculate Balance

        let remainingBalance = calculateBalance(
            monthlyBudget,
            totalExpenses
        );

        // 6. Display Results in Browser Console

        console.log("===== SPENDWISE BUDGET REPORT =====");

        console.log("Monthly Budget:", currency, monthlyBudget);

        console.log("Total Expenses:", currency, totalExpenses);

        console.log(
            "Remaining Balance:",
            currency,
            remainingBalance
        );

        if (remainingBalance >= 0) {
            console.log("Status: You are within your budget.");
        } else {
            console.log("Status: You have exceeded your budget.");
        }

        console.log("===== END OF REPORT =====");

        alert(
            "Your remaining balance is " +
            currency + " " + remainingBalance
        );
    }
}
