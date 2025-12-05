const form = document.getElementById("login")

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

window.onload = function() {
    const savedEmail = getCookie("savedEmail");
    const savedPassword = getCookie("savedPassword");

    if (savedEmail) document.getElementById("email").value = savedEmail;
    if (savedPassword) document.getElementById("password").value = savedPassword;
};


form.addEventListener("submit", function(e) {
    e.preventDefault()

    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()

    const remember = document.getElementById("remember").checked

    if (email === "" ||
        email.includes (" ") ||
        !email.includes ("@") ||
        !email.includes (".") ||

        email.startsWith("@") ||
        email.startsWith(".") ||

        email.endsWith("@") ||
        email.endsWith(".")
    )
    {
        alert("Email salah")
        return
    }

    if (password < 4)
    {
        alert("Password salah")
        return
    }

    if (remember) {
        document.cookie = `savedEmail=${email}; max-age=604800; path=/`;
        document.cookie = `savedPassword=${password}; max-age=604800; path=/`;
    }

window.location.href = "login.html"
})