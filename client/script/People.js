const bottomContainerBotton = document.getElementById("bottomContainerBotton")
const buttonBottom = bottomContainerBotton.querySelectorAll("button");

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

