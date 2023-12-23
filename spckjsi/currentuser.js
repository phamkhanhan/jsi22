let login_btn = document.getElementById("login_btn")
let logout_btn = document.getElementById("logout_btn")
login_btn.addEventListener("click", function(){
    window.location.href = "index.html"
})

logout_btn.addEventListener("click", function () {
    localStorage.removeItem("name")
    window.location.reload

})

let current_user = localStorage.getItem("name")

let ten = document.getElementById("ten")
if (current_user != null) {
    ten.innerText = current_user
    logout_btn.style.display = "block"
    login_btn.style.display = "none"
} else {
    logout_btn.style.display = "none"
    login_btn.style.display = "block"
}



