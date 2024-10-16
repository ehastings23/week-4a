eilish = "billie" //global scope variable - accesible anywhere

function classRoom(){//start block 
    let firstName = "Kevin" //block scope - created here and exist or 
    console.log(firstname + "is a nerd")
    console.log(firstname + " likes to listen to" + eilish)
}//end block

console.log(eilish + "has infectious beats.")

classRoom();

//firstname does not exist in the global scopy
console.log(firstname + " is our teacher.")//



//global
//local
//function/block scope {{ nesting like russian doll}}

function add(a,b){
    let output = a * b
    return output;
}
function mult(a,b){
    let output = a * b
    return output;
}

console.log(mult(6,7))
console.log(add(6,7))

console.log(output); //what would we export