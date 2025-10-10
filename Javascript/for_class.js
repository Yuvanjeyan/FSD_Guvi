// for(let i=0;i<=10;i++){
//     console.log("number : "+i);
// }

// for(let i=5;i>0;i--){
//     console.log(i);
// }

//0,2,4,6,8
// for(let i=0;i<=10;i++){
//     //console.log(i);
//     // if(i%2==0){
//     //     console.log(i);
//     // }

//     if(!(i%2==0)){
//         continue;
//     }
//     console.log(i);
// }

// let arr1 = ["red","white","black"];
// for(let i=0;i<arr1.length;i++){
//     console.log("position "+i+" has "+arr1[i]);
// }


// cart total
// const arr = [2,3,5];
// let total = 0;

// for (let i=0;i<arr.length;i++){
//     total+=arr[i];
// }
// console.log("total items in the cart = "+total);


// attendance

// const student = ["deepan","ani","praksh","mohan"];
// const status = [true,false,true,true];

// for (let i=0;i<student.length;i++){
//     if(status[i]){
//         console.log(student[i]+" is present");
//     }
//     else{
//         console.log(student[i]+" is absent");
//     }
// }


//cart
// const items = ["biriyani","burger","fries"];
// const count = [2,3,4];
// let total = 0;
// for(let i=0;i<items.length;i++){
//     console.log(items[i]+ " has "+count[i]);
//     total+=count[i];
// }
// console.log(total);

//for..in
// const items = {
//     mobile:"iphone",
//     price:30000,
//     instock:true
// }

// for(let key in items){
//     console.log(key," : ",items[key])
// }

// const att = {
//     ram:"present",
//     venkat:"absent",
//     john:"present"
// }

// for(let student in att){
//     console.log(student,":",att[student]);
// }

// for(let student in att){
//     if(att[student]==="present"){
//         console.log(student," : present")
//     }
//     else{
//         console.log(student, ": absent")
//     }
// }


const order={
    biriyani :2,
    burger : 3,
    fries : 6
}

//order summary
console.log("Your Summary")
for (let item in order){
    console.log(item,":", order[item]);
}

const price=[200,300,800];
let total = 0;
//for in
for(let cost of price){
    total+=cost;
}
console.log("Your total",total);