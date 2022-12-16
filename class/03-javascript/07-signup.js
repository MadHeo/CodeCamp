const checkValidation = function() {

    let email = document.getElementById("email").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value
    
//value로 값을 가져오면 string으로 받기 때문에 공백으로 조건문을 판별할 수 있음
//그렇기 때문에 if문에 공백, 즉 빈문자열이 아닐 때라는 조건문을 사용할 수 있음
//if (email !== "")
//하지만 현재는 값이 있냐 없냐로 판별하기 떄문에 아래와 같이 쓰면 true false로 판변가능
    if(email&&pw1&&pw2){
        //모든 input이 비어있지 않을 떄
        document.getElementById("submit").disabled = false
    } else{
        //하나라도 비어있을 때
        document.getElementById("submit").disabled = true
    }

}