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
    document.getElementById("dipositeMoney").style.display = "none";
}

//displays the page where the users can change their spending limit
function setLimit(){
    document.getElementById("withdraw").style.display = "none";
    document.getElementById("details").style.display = "none";
    document.getElementById("setLimit").style.display = "block";
    
    document.getElementById("dipositeMoney").style.display = "none";

}

//displays the page that the users will see once they log in or click on the accounts tab
//is where users can withdraw their money
function withdraw(){
    document.getElementById("withdraw").style.display = "block";
    document.getElementById("details").style.display = "none";
    document.getElementById("setLimit").style.display = "none";
    
    document.getElementById("dipositeMoney").style.display = "none";
}

//shows the page where you deposite money
function deposite(){
    document.getElementById("withdraw").style.display = "none";
    document.getElementById("details").style.display = "none";
    document.getElementById("setLimit").style.display = "none";
    document.getElementById("dipositeMoney").style.display = "block";
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

//checks that passwords match
//checks bank acount info is valid
function validateForm() {
  let x = document.forms["myForm"]["p1"].value;
  let y =  document.forms["myForm"]["p2"].value;
  if (x != y) {
    alert("Passwords must match");
    return false;
  }

  let l = (document.forms["myForm"]["acNum"].value).toString();;
    let check1 = l.slice(0, 2);
    if (check1 == "11"){
       alert ("bank account not valid");
    }
    
    let top = l.length;
    let bottom = (l.length) - 2;
    let check = l.slice(bottom, top);
    if (check == "02"){
       alert ("you are not old enough");
    }
} 

//simulates checking the bank account to see if they are old enough
//since we are not looking at real account we just see if the last numbers are 02
//if they are 01 then they are underage
//simulates checking if bank details are valid
//if it starts in 11 then the account isn't valid
function checkAge() {
    let x = (document.forms["bank"]["acNum"].value).toString();;
    let check1 = x.slice(0, 2);
    if (check1 == "11"){
       alert ("bank account not valid");
    }
    
    let top = x.length;
    let bottom = (x.length) - 2;
    let check = x.slice(bottom, top);
    if (check == "02"){
       alert ("you are not old enough");
    }
}

//pop up asking if they user want to delete their account
const popDelete= new Popup({
    id: "delete",
    title: "a",
    hideTitle: true,
    widthMultiplier: 0.7,
    backgroundColor: "#031204",
    titleColor: "#1ac426",
    textColor: "#1ac426",
    closeColor: "#1ac426",
    borderWidth: "2px",
    borderColor: "#1ac426",
    borderRadius: 0,
    font: "Courier New",
    loadCallback: () => {
        const button = document.querySelector(".popup-button");
        button.addEventListener("click", () => {
            popDelete.hide();
            popADelete.show();
        });
    },
    content: `
         are you sure you want to delete your account
         any money not withdrawn will be lost
          {btn-popup-button}[Confirm]`,
     css: `
        .popup.delete .popup-content .popup-button{
            background-color: #1ac426 !important;
            border-radius: 0px !important;
            border-color: #21b82c !important;
        }`,
});

//pop up telling the user their account has been deleted
const popADelete= new Popup({
    id: "my-popup",
    title: " ",
    hideTitle: true,
    widthMultiplier: 0.5,
    backgroundColor: "#031204",
    titleColor: "#1ac426",
    textColor: "#1ac426",
    closeColor: "#1ac426",
    borderWidth: "2px",
    borderColor: "#1ac426",
    borderRadius: 0,
    font: "Courier New",
    content: `
         account deleted`,
});
