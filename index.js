let bill = prompt ("Enter you bill amount");
let tipOneP = 0.15;
let tipTwoP = 0.2;
let tipOne = bill * tipOneP;
let tipTwo = bill * tipTwoP;
let tip = (bill >= 50 && bill <=300) ? tipOne : tipTwo;
let totalBill = Number(bill) + Number(tip);
alert(`Your total bill is ${totalBill}`)
