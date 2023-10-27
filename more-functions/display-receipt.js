let totalDue=980;
let amountPaid=1200 ;


function receipt(totalDue, amountPaid){
let changeDue = amountPaid - totalDue;
console.log( "Total Due: $", totalDue);
console.log( "Amount Paid: $", amountPaid);
console.log( "Change: $", changeDue);
}

receipt( totalDue, amountPaid)