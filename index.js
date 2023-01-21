let nameInput = document.getElementById('fname');
let emailInput = document.getElementById('femail');
let passwordInput = document.getElementById('password');
let confirmpasswordInput = document.getElementById('confirmpassword');
let button = document.getElementById('btn');
let message = document.getElementById('message');

// let loginEmail=document.getElementById('eml');
// let loginPassword=document.getElementById('psw');
// let loginButton=document.getElementById('button');

// let arr=[];

// let id=1



function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}
function validatePassword(password) {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
    return re.test(password);
}


button.addEventListener("click", function (event) {
    event.preventDefault()

})
button.addEventListener("click", validate)

function validate(e) {
    let name = nameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    let confirmpassword = confirmpasswordInput.value;

    if (name.length >= 2) {
        if (ValidateEmail(email)) {

            if (validatePassword(password)) {
                if (password === confirmpassword) {
                    // arr.push({
                    //     id:id++,
                    //     name:name,
                    //     email:email,
                    //     password:password,
                    //     char:char
                    //})
                    console.log("go ahead")
                    message.innerText = "go ahead";
                    message.style.color = "green";
                }
            }
            else {
                message.innerText = "validation failed";
                message.style.color = "red";
                console.log("validation failed")
            }
 

        }
    }
}
    function redirect(){
     window.location ="login.html";
     console.log(redirect);
}
 loginButton.addEventListener("click",compare)
 function compare(){
    let email=loginEmail.value;
    let password=loginPassword.value;
    console.log(email);
    console.log(password);
 }
 

// function makeid(length) {
//     var result           = '';
//   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//    var charactersLength = characters.length;
//    for ( var i = 0; i < 10; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//    }
//    return result;

// }
// makeid(10);

// let char=(makeid);

