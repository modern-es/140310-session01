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



// //event handling
// formExpense.addEventListener("submit", function (e) {
//     e.preventDefault();

//     //
// });

formExpense.addEventListener("submit", (e) => {
    e.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = +amountInput.value.trim();

    // parseInt("10") // ->10
    // parseInt("10xyz") // -> 10
    // parseInt("10xyz2000") // -> 10
    // 1+2
    // +2
    // -2


    //snippet, clg
    console.log(description, amount)


});