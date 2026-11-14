const UpContainerButton = document.getElementById("UpContainerButton")
const buttonUp = UpContainerButton.querySelectorAll("button");

buttonUp.forEach((bottone) => {
    bottone.addEventListener("click", () => {
        // Rimuove la classe da tutti i bottoni del gruppo
        buttonUp.forEach((bnt) => {
            bnt.classList.remove("selectedButton");
        });
        
        // Aggiunge la classe solo al bottone cliccato
        bottone.classList.add("selectedButton");
    })
})

const bottomContainerBotton = document.getElementById("bottomContainerBotton")
const buttonBottom = bottomContainerBotton.querySelectorAll("button");

buttonBottom.forEach((bottone) => {
    
    bottone.addEventListener("click", () => {
        // Rimuove la classe da tutti i bottoni del gruppo
        
        buttonBottom.forEach((bnt) => {
            bnt.classList.remove("selectedButton");
            
        });
        
        // Aggiunge la classe solo al bottone cliccato
        bottone.classList.add("selectedButton")
    })
})

