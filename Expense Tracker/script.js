// Select Elements
const form = document.getElementById("inputForm");

const expenseNameInput = document.getElementById("expenseName");
const amountInput = document.getElementById("amount");
const categorySelect = document.getElementById("category");

const expenseList = document.getElementById("expenseList");
const totalAmountDisplay = document.getElementById("totalAmount");

// Expenses Array
let expenses = [];

// Form Submit Event
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Create Expense Object
  const expense = {
    name: expenseNameInput.value.trim(),
    amount: Number(amountInput.value),
    category: categorySelect.value
  };

  // Add to Array
  expenses.push(expense);

  // Display Updated List
  displayExpenses();

  // Reset Form
});

// Display Expenses Function
function displayExpenses() {
  expenseList.innerHTML = "";

  // Show Each Expense (map)
  expenses.map((exp) => {
    const item = document.createElement("div");
    item.classList.add("expense-item");

    item.innerHTML = `
      <span>${exp.name} (${exp.category})</span>
      <span>₹${exp.amount}</span>
    `;

    expenseList.appendChild(item);
  });

  // Calculate Total (reduce)
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  // Update Total UI
  totalAmountDisplay.textContent = `₹${total}`;
}
