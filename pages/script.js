//displays the page where users can log in
function logIn(){
    document.getElementById("base").style.display = "none";
    document.getElementById("signIn").style.display = "block";
    document.getElementById("createAccount").style.display = "none";
}

//dispays the page where the user can create an account
function createAccount(){
    document.getElementById("base").style.display = "none";
    document.getElementById("signIn").style.display = "none";
    document.getElementById("createAccount").style.display = "block";
}

//displays the page where the users can see their details
function details(){
    document.getElementById("withdraw").style.display = "none";
    document.getElementById("details").style.display = "block";
}

//displays the page that the users will see once they log in or click on the accounts tab
//is where users can withdraw their money
function withdraw(){
    document.getElementById("withdraw").style.display = "block";
    document.getElementById("details").style.display = "none";
}

//displays a message saying the user has withdrawn their money
//probably add other code so that it affects the database
//need to check if the user had any money to withdraw
function withdrawMoney(){
    window.alert("Your Money has been withdrawn");
}