
function validateForm() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const profession = document.getElementById("profession").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const elements = document.querySelectorAll('.text-sm');

    elements.forEach(field => {
        field.style.display = 'none';
    });

    if (fname === "") {
        document.getElementById("err-fname").style.display ="block"
        return;
    } else if (lname === "") {
        document.getElementById("err-lname").style.display ="block"
        return;
    } else if (dob === "") {
        document.getElementById("err-dob").style.display ="block"
        return;
    } else if (country === "notChoosed") {
        document.getElementById("err-country").style.display ="block"
        return;
    } else if (profession === "") {
        document.getElementById("err-pro").style.display ="block"
        return;
    } else if (!gender) {
        document.getElementById("err-gender").style.display ="block"
        return;
    } else if (email === "") {
        document.getElementById("err-email").style.display ="block"
        return;
    } else if (phone === "") {
        document.getElementById("err-phone").style.display ="block"
        return;
    } else {
        displayFormValues();
    }
}


function displayFormValues() {
    document.getElementById("modal-fname").textContent = document.getElementById("fname").value;
    document.getElementById("modal-lname").textContent = document.getElementById("lname").value;
    document.getElementById("modal-dob").textContent = document.getElementById("dob").value;
    document.getElementById("modal-country").textContent = document.getElementById("country").value;
    document.getElementById("modal-profession").textContent = document.getElementById("profession").value;
    const genderValue = document.querySelector('input[name="gender"]:checked');
    document.getElementById("modal-gender").textContent = genderValue ? genderValue.value : "";
    document.getElementById("modal-email").textContent = document.getElementById("email").value;
    document.getElementById("modal-phone").textContent = document.getElementById("phone").value;

    $('#myModal').modal('show');
}

function resetForm() {
    document.getElementById("myForm").reset();
}