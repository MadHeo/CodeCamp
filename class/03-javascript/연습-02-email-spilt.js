const email = "codecamp@gamil.com"
// undefined
email.includes("@")
// true
email.split("@")
// (2) ['codecamp', 'gamil.com']
email.split("@")[0]
// 'codecamp'
email.split("@")[1]
// 'gamil.com'
let userMail = email.split("@")[0]
// undefined
userMail
// 'codecamp'
// let company = email.split("@)[1]
// VM2349:1 Uncaught SyntaxError: Invalid or unexpected token
let company = email.split("@")[1]
// undefined
company
// 'gamil.com'
let maskingMail = []
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail
// (4) /['c', 'o', 'd', 'e']
maskingMail.push("*")
// 5/
maskingMail.push("*")
// 6/
maskingMail.push("*")
// 7/
maskingMail.push("*")
// 8/
maskingMail
// (8/) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingMail.join("")
// 'code*/***'
maskingMail.join("") + "@" + company
// 'code****@gamil.com'
let result = maskingMail.join("") + "@" + company
// undefined
result