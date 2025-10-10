// var age=45;
// if(age>=65){
//     console.log("You get your income from your pension");
// }
// else if(age>=18 && age<65){
//     console.log("Each month you get a salary");
// }
// else if(age<18){
//     console.log("You get an allowance");
// }
// else{
//     console.log("The value of the age variable is not numerical");
// }


// let username = "yuvan";
// let password = "tricky@123";

// if(username === "yuvn" && password==="tricky@123"){
//     console.log("login successfully");
// }
// else{
//     console.log("Login attempt failed");
// }

let color = prompt("Enter the color : ");

switch (color) {
    case "red":
        console.log("Red : Wait");
        break;
    case "yellow":
        console.log("Yellow : ready");
        break;
    case "green":
        console.log("Green : Goo!");
        break;
    default:
        console.log("Invalid color code");
}