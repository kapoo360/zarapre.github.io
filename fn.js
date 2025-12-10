let emailInp = document.getElementById("emailInp")
let passInp = document.getElementById("passInp")
let btn = document.getElementById("btn")

btn.addEventListener("mousemove" ,function() {
    let randomNumber1 = Math.floor(Math.random()*301)
    let randomNumber2 = Math.floor(Math.random()*302)

    btn.style = `position:absolute ; top:${randomNumber1}px ; left:${randomNumber2}px; right:${randomNumber1}px bottom:${randomNumber2}px;; `
  }  
)