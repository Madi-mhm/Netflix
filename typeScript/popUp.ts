
export function createPopUp(backgroundImage, getFilmTitle, getFilmDescription){
    const filmSection = document.querySelector(".filmSectionscontainer")

    const popUpContainer = document.createElement("div") 
    popUpContainer.classList.add("popUpContainer")
    filmSection?.append(popUpContainer)
    popUpContainer.style.backgroundImage = `url(${backgroundImage})`

    const insideContainer = document.createElement("div")
    insideContainer.classList.add("insideContainer")
    popUpContainer.append(insideContainer)


    const filmTitleDiv = document.createElement("div")
    insideContainer.append(filmTitleDiv)
    filmTitleDiv.classList.add("filmTitleDiv")
    
    const filmTitle = document.createElement("p")
    filmTitle.classList.add("filmTitle")
    filmTitleDiv.append(filmTitle)

    filmTitle.innerHTML = getFilmTitle


    const filmDescriptionDiv = document.createElement("div")
    insideContainer.append(filmDescriptionDiv)
    filmDescriptionDiv.classList.add("filmDescriptionDiv")

    const filmDescription = document.createElement("p")
    filmDescriptionDiv.append(filmDescription)
    filmDescription.classList.add("filmDescription")
    filmDescription.innerText = getFilmDescription

    const popUpCancelButtonDiv = document.createElement("div")
    popUpContainer.append(popUpCancelButtonDiv)
    popUpCancelButtonDiv.classList.add('popUpCancelButtonDiv')


    const popUpIcon = document.createElement("i")
    popUpIcon.classList.add("fa-solid")
    popUpIcon.classList.add("fa-xmark")
    popUpIcon.setAttribute("id", "popUpX")
    popUpCancelButtonDiv.append(popUpIcon)

    const popUpX = document.getElementById("popUpX")

    popUpX?.addEventListener("click", ()=>{
        
        const popUpBody = document.querySelector(".popUpContainer")
        popUpBody?.remove()
    })


}