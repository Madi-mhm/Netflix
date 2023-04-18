
export function createPopUp(backgroundImage, getFilmTitle){
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
    console.log(getFilmTitle);
    
    
    


    // const filmDescriptionDiv = document.createElement("div")
    // const filmDescription = document.createElement("p")
    // filmDescriptionDiv.append(filmDescription)
    // insideContainer.append(filmDescriptionDiv)







}