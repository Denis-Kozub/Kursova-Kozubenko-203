document.getElementById("donatebtn").addEventListener("click", function() {
    window.location.href = "donation.html";
});

function validateEmail() {
    var emailInput = document.getElementById('emailInput');
    var emailValue = emailInput.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailValue)) {
        alert('Ближчим часом на пошту прийде лист від оператора!');
    } else {
        emailInput.classList.add('error');
        alert('Неправильный email');
    }
}
  
