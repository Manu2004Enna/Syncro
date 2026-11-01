const buttonRegister = document.getElementById("RegisterButton")
const buttonLogin = document.getElementById("LogInButton")
const buttonSubmit = document.getElementById("submitButton")
const inputpassword = document.getElementById("passwordInput")

let timeAddInputPassword = 0;

buttonLogin.addEventListener("click",()=>{
    buttonLogin.style.backgroundColor = "rgb(215, 240, 250)"
    buttonRegister.style.backgroundColor = "white"
    buttonSubmit.textContent = "Sign in"
    let divConfirmButton = document.getElementById("divInputConfirm")
    if(divConfirmButton){
        divConfirmButton.remove()
        timeAddInputPassword = 0
    }
    inputpassword.placeholder = "Enter your password"
})

buttonRegister.addEventListener("click",()=>{
    buttonLogin.style.backgroundColor = "white"
    buttonRegister.style.backgroundColor = "rgb(215, 240, 250)"
    buttonSubmit.textContent = "Create account  "

    if(timeAddInputPassword < 1)
    {
        let inputGroup = document.createElement("div")
        inputGroup.id = "divInputConfirm"
        inputGroup.classList.add("input-group")
        let label = document.createElement("repeatPassword");
        label.setAttribute("for", "repeatPassword");
        label.textContent = "Confirm your password";
        let input = document.createElement("input");
        input.type = "text";
        input.id = "confirmPassword";

        input.placeholder = "Confirm your password";
        inputGroup.appendChild(label);
        inputGroup.appendChild(input);

        let container = document.getElementById("container");
        container.appendChild(inputGroup);
        timeAddInputPassword = timeAddInputPassword + 1
        inputpassword.placeholder = "Create your password"

    }


})