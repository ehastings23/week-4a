text = "Now os the time for all good people..."
index = text.indexOf(" ")
console.log(index)
console.log(text.length)
firstDot = text.indexOf(".")
console.log(firstDot)

nPosition = text.indexOf("N")
console.log(nPosition)

zPosition = text.indexOf("z")
console.log(zPosition) // -1 not found
console.log(text.charCodeAt(0))

console.log(String.fromCharCode(66)) //? B

console.log("E".charCodeAt(0))
console.log("I".charCodeAt(0))
console.log("")