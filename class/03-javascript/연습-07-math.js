Math.floor(Math.random() * 1000000)
// 430016

//string으로 형 변환
String(Math.floor(Math.random() * 1000000) )
// '480088'
Math.floor(Math.random() * 1000000)
// 675714

//앞에 0이 오면 빠짐
Math.floor(Math.random() * 1000000)
// 63998

//padStart로 6번째 숫자 0도 스트링으로 인식
String(Math.floor(Math.random() * 1000000) ).padStart(6,"0")
// '502942'

let result = String(Math.floor(Math.random() * 1000000) ).padStart(6,"0")
// undefined
result
// '200308'
result
// '200308'

