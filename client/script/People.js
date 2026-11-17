const bottomContainerBotton = document.getElementById("bottomContainerBotton")
const buttonBottom = bottomContainerBotton.querySelectorAll("button");

const inputResearch = document.getElementById("inputResearch")

buttonBottom.forEach((bottone,index) => {  
    bottone.addEventListener("click", () => {
        // Rimuove la classe da tutti i bottoni del gruppo
        buttonBottom.forEach((bnt) => {
            bnt.classList.remove("selectedButton");
        });
        switch(index){
            case 0:
                window.location.replace("Chat.html")
                break
            case 1:
                window.location.replace("Call.html")
                break
            case 2:
                window.location.replace("People.html")
                break
            case 3:
                window.location.replace("Settings.html")
                break
        }
        // Aggiunge la classe solo al bottone cliccato
        bottone.classList.add("selectedButton")
    })
})

inputResearch.addEventListener("keyup",()=>{
    containerPeople.replaceChildren()
    if(inputResearch.value){
        searchPeople(inputResearch.value)
    }

})

async function searchPeople(nick) {
    try{
        const risposta = await fetch('http://localhost:3000/users/' + nick,{
            method : 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await risposta.json()
        for(let i = 0; i < data.length; i++){
            createDivPeople(data[i]["nickName"],"null")
        }
        
    }
    catch(error){
        console.log("errore: " + err)
    }
}

const containerPeople = document.getElementById("containerPeople")

function createDivPeople(username,urlImage){
    
    let box = document.createElement("div")
    box.classList.add("div-person")

    let img = document.createElement("img")
    img.src = "img/profile.svg"
    img.alt = "icon profile"
    img.classList.add("img-profile")
    img.width = 50
    img.height = 50
    box.appendChild(img)

    let textContainer = document.createElement("div")
    box.appendChild(textContainer)
    
    textContainer.textContent = username
    containerPeople.appendChild(box)
}