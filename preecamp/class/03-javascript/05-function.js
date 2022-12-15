let Onclick = () => {
    let number = document.getElementById('number')
    let random = String(Math.floor(Math.random() * 1000000) ).padStart(6,"0")

    number.innerText = random;
    number.style.color = "#" + random;
    
    // Math.floor(Math.random() * 0xffffff).toString(16);
 
}