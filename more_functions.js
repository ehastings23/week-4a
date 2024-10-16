
function add(a,b){
    let result = a + b;
    return result;
}

const result = add(6,7)
console.log(result);

function getReceipt(amountPaid, changeDue){
  //  const text =String(amountPaid) + ", " + String (changeDue)
  const text ='
  AMOUNT PAID amountPaid: $(amountPaid)
  CHANGE DUE: $(changeDue)
   

  return text;
}

console.log(getReceipt(10,3));
