//
// const formExpense = document.getElementById("formExpense");
// const formExpense = document.querySelector("css selector");
// const formExpense = document.querySelector("main > form > input:eq(1)");

// const inputAll = document.querySelectorAll("input");
// const inputOne = document.querySelector("input");

const formExpense = document.querySelector("#formExpense");
const descriptionInput = document.querySelector("#description");
const amountInput = document.querySelector("#amount");
const totalAmount = document.querySelector("#totalAmount");
const expenseTableBody = document.querySelector("#expenseTableBody");



//event handling
formExpense.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log(e);
})