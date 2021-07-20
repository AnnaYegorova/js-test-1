//Task 3
// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show 
//“I don't know any users having name length less than 4 symbols”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// 	If it’s another string – then show “I don’t know you”.
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: 
  // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening

const userLogin = prompt("Enter your login:");
if (userLogin && userLogin.trim()) {
    if (userLogin.length < 4) {
        alert("I don't know any users having name length less than 4 symbols");
    } else {
        if (userLogin === 'User' || userLogin === 'Admin') {
            const userPassword = prompt("Enter your password:");
            if (userPassword && userPassword.trim()) {
                if (userLogin === 'User' && userPassword === "UserPass" ||
                    userLogin === 'Admin' && userPassword === "RootPass") {
                    let date = new Date().getHours();
                    let timeNow;
                    if (date > 5 && date < 20) { timeNow = "day"} else { timeNow = "evening"}
                    alert(`Good ${timeNow}, dear ${userLogin}!`);
                } else { alert("Wrong password");}
            } else {alert("Canseled User or Admin"); }
        } else { alert("I don’t know you"); }
    } 
} else {
    alert("Canceled");
}