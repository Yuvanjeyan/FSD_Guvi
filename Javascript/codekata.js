//766. Equilateral Triangle Area
// var a = 20;
// var area = (a/2)*(Math.sqrt(3)*a/2);
// console.log(area.toFixed(2));

// 768. Leap Year Check-2


function checkYear(n) {
    if (n % 4 === 0) {
        if (n % 100 === 0) {
            return n % 400 === 0;
        }
        return true;
    }
    return false;
}
let year = 2000;
if (checkYear(year)) {
    console.log("true");
} else {
    console.log("false");
}