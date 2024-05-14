//user greeting and display error message if incorrect input
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    //assume authentication logic here, if successful:
    document.getElementById('greeting').innerText = "Hello, " + username;
    document.getElementById('greeting').style.display = "block";

    //assume authentication logic here, if unsuccessful:
    document.getElementById('error').innerText = "Incorrect username or password.";
    document.getElementById('error').style.display = "block";

    //clear id and password fields
    document.getElementById('username').value = "";   
    document.getElementById('password').value = "";
}

//dropdown list (different form fields)
function showFields() {
    let selectedType = document.getElementById('ticketType').value;
    document.getElementById('computerFields').style.display = "none";
    document.getElementById('softwareFields').style.display = "none";
    document.getElementById('networkFields').style.display = "none";
    if (selectedType === 'computer') {
        document.getElementById('computerFields').style.display = "block";
    } else if (selectedType === 'software') {
        document.getElementById('softwareFields').style.display = "block";
    } else if (selectedType === 'network') {
        document.getElementById('networkFields').style.display = "block";
    }
}

//validate form info
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let errorMessages = "";
    if (name.trim() === "") {
        errorMessages += "<li>Name cannot be empty.</li>";
    }
    if (email.trim() === "") {
        errorMessages += "<li>Email cannot be empty.</li>";
    } else if (!isValidEmail(email)) {
        errorMessages += "<li>Invalid email format.</li>";
    }
    if (errorMessages !== "") {
        document.getElementById('errorMessages').innerHTML = errorMessages;
        return false; //prevent form submission
    }
    return true; //proceed with form submission
}

//email regular expression
function isValidEmail(email) {
    let emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
