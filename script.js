// JavaScript equivalent of the sanctum_distribution and calculate_split function

const sanctumDistribution = {
    taxes_percentage: 23,
    profits_percentage: 5,
    owners_comp_percentage: 45,
    investing_percentage: 5,
    expenses_percentage: 22
};

function calculateSplit(amount, distribution) {
    const taxes = amount * (distribution.taxes_percentage / 100);
    const profits = amount * (distribution.profits_percentage / 100);
    const ownersComp = amount * (distribution.owners_comp_percentage / 100);
    const expenses = amount * (distribution.expenses_percentage / 100);
    const investing = amount * (distribution.investing_percentage / 100);

    return { taxes, profits, ownersComp, expenses, investing };
}

function updateAndDisplayResults() {
    // Assume you have input fields with IDs amountInput, taxesInput, profitsInput, etc.
    const amount = parseFloat(document.getElementById('amountInput').value);
    const updatedDistribution = {
        taxes_percentage: parseFloat(document.getElementById('taxesInput').value),
        profits_percentage: parseFloat(document.getElementById('profitsInput').value),
        owners_comp_percentage: parseFloat(document.getElementById('ownersCompInput').value),
        investing_percentage: parseFloat(document.getElementById('investingInput').value),
        expenses_percentage: parseFloat(document.getElementById('expensesInput').value)
    };

    const results = calculateSplit(amount, updatedDistribution);

    // Display results - Assume you have span elements with IDs taxesOutput, profitsOutput, etc.
    document.getElementById('taxesOutput').textContent = `${updatedDistribution.taxes_percentage}% Taxes: $${results.taxes.toFixed(2)}`;
    document.getElementById('profitsOutput').textContent = `${updatedDistribution.profits_percentage}% Profits: $${results.profits.toFixed(2)}`;
    document.getElementById('ownersCompOutput').textContent = `${updatedDistribution.owners_comp_percentage}% Owner's Compensation: $${results.ownersComp.toFixed(2)}`;
    document.getElementById('expensesOutput').textContent = `${updatedDistribution.expenses_percentage}% Expenses: $${results.expenses.toFixed(2)}`;
    document.getElementById('investingOutput').textContent = `${updatedDistribution.investing_percentage}% Investing: $${results.investing.toFixed(2)}`;
}

// Call updateAndDisplayResults when the user submits the form or changes any of the input values.
