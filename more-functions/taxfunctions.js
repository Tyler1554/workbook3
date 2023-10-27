let grossPay= 10000;
let withholdCode0;
let withholdCode1;
let withholdCode2;
let withholdCode3;
let withholdCode4;

function getSocSecTax (grossPay) {
return grossPay * 0.062;
}

function getMedicareTax(grossPay) {
return grossPay*.0145
}

function getFederalTax(grossPay){
if (grossPay<=1000){
    withholdCode0 = grossPay * .23
}
else if (grossPay>1000){
    withholdCode1 = grossPay * .21
}
else if (grossPay){
    withholdCode2 = grossPay * .195
}
else if (withholdCode3){
    grossPay * .185
}
else if (withholdCode4){
    grossPay * .18
}
else {
    grossPay * .175 
}

}

console.log("Social Security Tax:", getSocSecTax(100000));
console.log("Medicare Tax:",getMedicareTax(100000));
console.log("Person 1", getFederalTax(withholdCode0));
