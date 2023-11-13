const arrow = document.querySelector(".arrow")
const h3 = document.querySelector("h3")
const h4 = document.querySelector("h4")

h3.addEventListener("click" , () => {
    h4.classList.toggle("active")
    arrow.classList.toggle("rotate")
    h3.classList.toggle("different")
})