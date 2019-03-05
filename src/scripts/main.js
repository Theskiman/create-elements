

let section1 = document.createElement("section")
section1.textContent = "Don't be a bully"
section1.classList.add("message")


let section2 = document.createElement("section")
section2.textContent = "Don't be a jerk"
section2.classList.add("message")

let section3 = document.createElement("section")
section3.textContent = "Just be nice"
section3.classList.add("message")

let section4 = document.createElement("section")
section4.textContent = "You don't have to be that guy"
section4.classList.add("message")

let section5 = document.createElement("section")
section5.textContent = "Don't be a dick!!"
section5.classList.add("message")

let append = document.querySelector("#message")

append.appendChild(section1)
append.appendChild(section2)
append.appendChild(section3)
append.appendChild(section4)
append.appendChild(section5)