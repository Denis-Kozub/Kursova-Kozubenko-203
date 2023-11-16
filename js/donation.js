function updateDonateButton() {
    const donationAmountInput = document.getElementsByName("donationAmount")[0];
    const donateButton = document.getElementById("donateButton");

    donateButton.value = `DONATE $${donationAmountInput.value}`;
}


function showThankYouForm() {
    resetStyles();

    const thankYouForm = document.getElementById("thankYouForm");
    const donationAmountInput = document.getElementsByName("donationAmount")[0];
    const donationAmountMessage = document.getElementById("donationAmountMessage");

    var firstName = document.getElementsByName("firstName")[0];
    var lastName = document.getElementsByName("lastName")[0];
    var email = document.getElementsByName("email")[0];
    var donationAmount = document.getElementsByName("donationAmount")[0];
    var zipCode = document.getElementsByName("zipCode")[0];
    var cardNumber = document.getElementsByName("cardNumber")[0];
    var expMonth = document.getElementsByName("expMonth")[0];
    var expYear = document.getElementsByName("expYear")[0];
    var cvv = document.getElementsByName("cvv")[0];

    if (isEmpty(firstName) || isEmpty(lastName) || isEmpty(email) || isEmpty(donationAmount) || isEmpty(zipCode) || isEmpty(cardNumber) || isEmpty(expMonth) || isEmpty(expYear) || isEmpty(cvv)) {
        alert("Не всі поля заповнені");
    } else {
        donationAmountMessage.textContent = `Сума донату: $${donationAmountInput.value}`;
        thankYouForm.style.display = "block";
    
        const originalForm = document.querySelector('.container');
        originalForm.style.display = 'none';
    }
    function isEmpty(element) {
        var value = element.value.trim();
        if (value === "") {
            element.classList.add("error");
            return true;
        }
        return false;
    }

    function resetStyles() {
        var inputs = document.querySelectorAll("input, select");
        inputs.forEach(function (input) {
            input.classList.remove("error");
        });
    }

    
}

