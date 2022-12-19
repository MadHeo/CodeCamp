let isStarted = false;

let auth = () => {
    document.getElementById("button_signup").disabled = true;
    document.getElementById("btn").disabled = true
    if(isStarted === false) {
        // 타이머가 작동 중이 아닐 떄
        isStarted = true
        document.getElementById("btn2").disabled = false
        document.getElementById("btn2").style.backgroundColor = 'blue'
        document.getElementById("btn2").style.color = 'white'
        document.getElementById("btn2").style.border = 'solid blue'
        let number = document.getElementById('number')
        let timer_number = document.getElementById('time')
        let random = String(Math.floor(Math.random() * 1000000) ).padStart(6,"0")

        number.innerText = random;
        number.style.color = "#0068FF"
        

        let time = 3
        let timer

        timer = setInterval(function() {
            if (time >= 0){
                let min = Math.floor(time / 60);
                let sec = String(time % 60).padStart(2, "0");
                document.getElementById("time").innerText = `${min} : ${sec}`;
                time = time - 1
            } else {
                document.getElementById("btn2").disabled = true
                
                isStarted = false
                clearInterval(timer)
                document.getElementById("btn").disabled = false;
                number.innerText = "000000"
                timer_number.innerText = "3:00"
            }
        }, 1000)
    } else {
        //타이머가 작동중일 떄
    }
}

const changeFocus1 = () => {
    let phone1 = document.getElementById("p1").value
    if(phone1.length === 3){
        document.getElementById("p2").focus()
    }
}

const changeFocus2 = () => {
    let phone1 = document.getElementById("p2").value
    if(phone1.length === 4){
        document.getElementById("p3").focus()
    }
}

const changeFocus3 = () => {
    let phone1 = document.getElementById("p3").value

    if(phone1.length === 4){
        document.getElementById("btn").disabled = false;
        document.getElementById("btn").style.color = '#0068FF'
        document.getElementById("btn").style.backgroundColor = 'white'
        document.getElementById("btn").style.border = "solid blue"
    }
}

function confirm(){
    alert("인증이 완료되었습니다.");
    let signupBtn = document.getElementById("button_signup")
    signupBtn.disabled = false;
    signupBtn.style.backgroundColor = 'white'
    signupBtn.style.color = 'blue'
    signupBtn.style.border = 'solid blue'

    document.getElementById("btn2").innerText = "인증완료"
}

function InputState() {
    OnSignupButton();

}

function OnSignupButton() {
    let signupBtn = document.getElementById('button_signup');
    let emailInput = document.getElementById('email_input');
    let emailError = document.getElementById('email_error');
    let nameError = document.getElementById('name_error');
    let nameInput = document.getElementById('name_input');
    let pw1Error = document.getElementById('pw1_error');
    let pw1Input = document.getElementById('pw1_input');
    let pw2Error = document.getElementById('pw2_error');
    let pw2Input = document.getElementById('pw2_input');
    let selectError = document.getElementById('select_error');
    let selectInput = document.getElementById('select_input');
    let checkError = document.getElementById('check_error');
    let check1Input = document.getElementById('check1_input');
    let check2Input = document.getElementById('check2_input');

    if (emailInput.value === "" || emailInput.value.indexOf('@') === -1) {
        emailError.style.visibility = "visible"
    } 
    if (nameInput.value === "") {
        nameError.style.visibility = "visible"
    } 
    if (pw1Input.value === "" || pw2Input.value !== pw1Input.value) {
        pw1Error.style.visibility = "visible"
    }
    if (pw2Input.value === "" || pw2Input.value !== pw1Input.value) {
        pw2Error.style.visibility = "visible"
    }
    if (selectInput.value === '지역을 선택하세요') {
        selectError.style.visibility = "visible"
    }
    if (check1Input.checked === false && check2Input.checked === false) {
        checkError.style.visibility = "visible"
    } 
}

