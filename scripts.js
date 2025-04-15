document.getElementById("button-sort").addEventListener("click", generateNumber)

function generateNumber() {

    let min = Math.ceil(document.getElementById("input-min").value)
    let max = Math.floor(document.getElementById("input-max").value)
    let res = document.getElementById("res")

    if (!min || !max) {
        alert("Valores inválidos!")
    } else {
        res.style.display = "initial"
        let random_number = Math.floor(Math.random() * (max - min +1) + min)
        res.innerHTML = "Resultado: " + random_number
    }

}