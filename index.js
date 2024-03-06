
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const phonenumberInput = document.getElementById("phonenumber");
    const errorNodes=document.
    function validateForm()
     {
        clearMessages();

        let errorFlag = false;
    if (nameInput.value.length < 3) {
        nameError.innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if (!emailIsValid(emailInput.value)) {
        emailError.innerText = "Invalid email";
        emailInput.classList.add("error-border");
        errorFlag = true;
    }

    if (passwordInput.value.length < 8) {
        passwordError.innerText = "Password must be at least 8 characters";
        passwordInput.classList.add("error-border");
        errorFlag = true;
    }

    if (phonenumberInput.value.length < 10) {
        phonenumberError.innerText = "Invalid phone number";
        phonenumberInput.classList.add("error-border");
        errorFlag = true;
    }

    if (!errorFlag) {
        alert("Registration Successful");
    }

     }
function clearMessages() 
{
   
}

