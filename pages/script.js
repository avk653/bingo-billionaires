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
    document.getElementById("setLimit").style.display = "none";
}

//displays the page where the users can change their spending limit
function setLimit(){
    document.getElementById("withdraw").style.display = "none";
    document.getElementById("details").style.display = "none";
    document.getElementById("setLimit").style.display = "block";

}

//displays the page that the users will see once they log in or click on the accounts tab
//is where users can withdraw their money
function withdraw(){
    document.getElementById("withdraw").style.display = "block";
    document.getElementById("details").style.display = "none";
    document.getElementById("setLimit").style.display = "none";
}

//displays a message saying the user has withdrawn their money
//probably add other code so that it affects the database
//need to check if the user had any money to withdraw
function withdrawMoney(){
    window.alert("Your Money has been withdrawn");
}

//displpays the page where the user can change their personal details
function changePersonal(){
 document.getElementById("changePersonal").style.display = "block";
    document.getElementById("changebankDetails").style.display = "none";
    document.getElementById("changePassword").style.display = "none";   
}

//dispkays the page where the user can change their password
function changePWord(){
 document.getElementById("changePersonal").style.display = "none";
    document.getElementById("changebankDetails").style.display = "none";
    document.getElementById("changePassword").style.display = "block";   
}

//will display the page where the user can change their bank details
function changeBank(){
 document.getElementById("changePersonal").style.display = "none";
    document.getElementById("changebankDetails").style.display = "block";
    document.getElementById("changePassword").style.display = "none";   
}

//a pop up that displays the instuctions
function instructions(){
    window.alert("You will see two grids. The one on the left is your numbers, these will not change and you will need to look out for them. The grid on the right is hwere numbers wil pop up. If these numbers match the ones on your grid click them. If you get all the numbers before the time runs out you win and get that money you desperatly need");
}

//pop up that is more stylalised to show instructions
const myPopup = new Popup({
    id: "my-popup",
    title: "Instructions",
    widthMultiplier: 0.7,
    backgroundColor: "#031204",
    titleColor: "#1ac426",
    textColor: "#1ac426",
    closeColor: "#1ac426",
    borderWidth: "5px",
    borderColor: "#1ac426",
    font: "Courier New",
    content: `
        add instructions for game here
        click on the numbers when you see them
        if they match the one on your grid.`,
});