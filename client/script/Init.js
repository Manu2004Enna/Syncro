const buttonRegister = document.getElementById("RegisterButton")
const buttonLogin = document.getElementById("LogInButton")
const buttonSubmit = document.getElementById("submitButton")
const inputpassword = document.getElementById("passwordInput")
const imgButtonPassword = document.getElementById("imgButtonPassword");

let login_or_register = "login"

let timeAddInputPassword = 0;

buttonLogin.addEventListener("click",()=>{
    buttonLogin.style.backgroundColor = "rgb(215, 240, 250)"
    buttonRegister.style.backgroundColor = "white"
    buttonSubmit.textContent = "Sign in"
    login_or_register = "login"
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
    buttonSubmit.textContent = "Create account"
    login_or_register = "register"

    if(timeAddInputPassword < 1)
    {
        let inputGroup = document.createElement("div")
        inputGroup.id = "divInputConfirm"
        inputGroup.classList.add("input-group")
        let label = document.createElement("repeatPassword");
        label.setAttribute("for", "repeatPassword");
        label.textContent = "Confirm your password";
        let input = document.createElement("input");
        input.type = "password";
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
let hiddenpasswordInput = true
imgButtonPassword.addEventListener("click",()=>{
    let imgPasswordInput = document.getElementById("imgPasswordInput")
    let passwordInput = document.getElementById("passwordInput")
    let confirmInput = document.getElementById("confirmPassword")
    if(hiddenpasswordInput == true){
        imgPasswordInput.src = "img/eye-open.svg"
        hiddenpasswordInput = false
        passwordInput.setAttribute("type","text")
        if(confirmInput){
            confirmInput.setAttribute("type","text")
        }
        
    }
    else{
        imgPasswordInput.src = "img/eye-closed.svg" 
        passwordInput.setAttribute("type","password")
        hiddenpasswordInput = true
        if(confirmInput){
            confirmInput.setAttribute("type","password")
       }
    }
    
})

buttonSubmit.addEventListener("click",()=>{
    if(login_or_register = "register"){
        if(document.getElementById("confirmPassword").value != document.getElementById("passwordInput").value){
            alert("Le password devono coincidere")
        }
        document.getElementById("confirmPassword").value = ""
    }
    document.getElementById("nicknameInput").value = ""
    inputpassword.value = ""
    
})