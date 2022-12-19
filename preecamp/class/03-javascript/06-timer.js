let isStarted = false;

let auth = () => {
    if(isStarted === false) {
        // 타이머가 작동 중이 아닐 떄
        isStarted = true
        document.getElementById("btn2").disabled = false
        let number = document.getElementById('number')
        let random = String(Math.floor(Math.random() * 1000000) ).padStart(6,"0")

        number.innerText = random;
        number.style.color = "#" + random;

        let time = 5
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
                console.log("타이머 작동중")
                clearInterval(timer)
            }
        }, 1000)
    } else {
        //타이머가 작동중일 떄
    }
}


// let time = 10

// let Onclick = () => {
//     let number = document.getElementById('number')
//     let random = String(Math.floor(Math.random() * 1000000) ).padStart(6,"0")
    
//     number.innerText = random;
//     number.style.color = "#" + random;

//     setInterval(clock, 1000);
// }



// function clock() {
//     if (time >= 0){
//         let min = Math.floor(time / 60);
//         let sec = String(time % 60).padStart(2, "0");
//         time = time - 1
//         document.getElementById("time").innerText = `${min} : ${sec}`;
//         // document.getElementById("btn").style.color = "#c4c4c4"
//     } else {
//             document.getElementById("btn2").disabled = true
//             isStarted = false 
//     }
// }











