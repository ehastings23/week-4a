// reason to create a function is to give a name to a step - like TOC or book outline 
//PURE ORGANIZATION
function being() {
    console.log("IN THE BEGINING...")
}
function middle() {
    console.log("INTO THE HEART OF CODING...")
}
function end() {
    console.log("WRAPPING IT UP. Fini.")
}
//invoke or call 
being()
middle()
end()

//////////////////////////////////////////////////////
function greet(who, age) {
    console.log(`Howdy ${who}!!!`);
    if (age >= 18) {
        console.log("Gosh you are old")
    } else {
        console.log("All the time in the world.")
    }
}
greet("Eithan", 18)
greet("class", 30)

console.log(new Date(0));