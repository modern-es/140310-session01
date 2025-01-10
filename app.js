//
// const formExpense = document.getElementById("formExpense");
// const formExpense = document.querySelector("css selector");
// const formExpense = document.querySelector("main > form > input:eq(1)");

// const inputAll = document.querySelectorAll("input");
// const inputOne = document.querySelector("input");

const formExpense = document.querySelector("#formExpense");
const descriptionInput = document.querySelector("#description");
const amountInput = document.querySelector("#amount");
const totalAmountElem = document.querySelector("#totalAmount");
const expenseTableBody = document.querySelector("#expenseTableBody");

let expnese = [];

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
    // console.log(description, amount);
    //{k1:1, k2:2}
    // expnese.push({description:description, amount:amount});
    expnese.push({ description, amount });

    // descriptionInput.value = "";    
    // amountInput.value = "";
    formExpense.reset();
    render();
});


const render = () => {
    let totalAmount = 0;
    let body = '';
    for (let index = 0; index < expnese.length; index++) {
        totalAmount += expnese[index].amount;

        // body += "<tr><td>"+ expnese[i].description + "</td>" + ...;

        //string template / interpolation
        //` = backtick, ~ = tilda
        // win + .
        body += `<tr>
            <td>${expnese[index].description}</td>
            <td>${expnese[index].amount.toLocaleString("fa-IR")}</td>
            <td> <button onclick="removeExpense(${index})">❌</button> </td>
        </tr>
        `;

    }

    totalAmountElem.textContent = totalAmount.toLocaleString("fa-IR");
    expenseTableBody.innerHTML = body;
}

const removeExpense = (index) => {
    expnese = expnese.filter((_, i) => i !== index);
    render();
}