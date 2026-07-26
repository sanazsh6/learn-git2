// tamrin 1
var number = 15;
if (number % 2 === 0){
    console.log("number is even");
} else {
    console.log("number is odd");
}

// tamrin 2
var cart = [
    {
        name: "mobile",
        price: 85,
    },
    {
        name: "laptop",
        price: 150,
    },
    {
        name: "muse",
        price: 25,
    },
];
var sumprice = cart[0].price + cart[1].price + cart[2].price;
console.log(sumprice);
if (sumprice >100){
    console.log("discount applied");
} else{
    console.log("no discount");
}

// tamrin 3
var weakday =5;
switch (weakday){
    case 3:
    case 4:
        console.log("soon weakend");
        break;
    case 5:
    case 6:
        console.log("weakend");
        break;
    default:
        console.log("looking for weakend");
}