let time =180

function clock() {
    if (time >= 0){
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        time = time - 1
        console.log(sec);
        document.getElementById("time").innerText = `${min} : ${sec}`;
        document.getElementById("btn").style.color = "#c4c4c4"
    } else {
            document.getElementById("btn2").disabled = true
    }
}

let Onclick = () => {
    let number = document.getElementById('number')
    let random = String(Math.floor(Math.random() * 1000000) ).padStart(6,"0")
    
    number.innerText = random;
    number.style.color = "#" + random;

    setInterval(clock, 1000);
}






