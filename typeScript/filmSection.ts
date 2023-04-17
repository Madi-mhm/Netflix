import { createCards } from "./cards"


export let sliderDiv:HTMLElement;

export function createFilmSection(type: string, sliderNewId){

    const filmSectionContainer = document.querySelector(".filmSectionscontainer")
    const sectionContainer = document.createElement("div")

    if(filmSectionContainer != null){
        filmSectionContainer.append(sectionContainer)
    }

    // create Title for section
    const filmSectionTitle = document.createElement("p")
    filmSectionTitle.innerText = type
    sectionContainer.append(filmSectionTitle)

    // the new film section that includ buttons and slider
    const newFilmSection = document.createElement("div")
    newFilmSection.classList.add("newFilmSection")
    sectionContainer.append(newFilmSection)

    // left Button for film section
    const leftButtonElement = document.createElement("button")
    leftButtonElement.classList.add("handel")
    leftButtonElement.classList.add("leftButton")
    newFilmSection.append(leftButtonElement)

    // Left arrow icon for leftButton
    const leftArrowIcon = document.createElement("i")
    leftArrowIcon.classList.add("fa-solid")
    leftArrowIcon.classList.add("fa-arrow-left")
    leftButtonElement.append(leftArrowIcon)

    // Slider div that hold all cards
    const sliderDiv = document.createElement("div")
    sliderDiv.classList.add("slider")
    sliderDiv.setAttribute("id", sliderNewId)
    newFilmSection.append(sliderDiv)


    // Right button for film section 
    const rightButtonElement = document.createElement("button")
    rightButtonElement.classList.add("handel")
    rightButtonElement.classList.add("rightButton")
    newFilmSection.append(rightButtonElement)

    // Right arrow icon for rightButton
    const rightArrowIcon = document.createElement("i")
    rightArrowIcon.classList.add("fa-solid")
    rightArrowIcon.classList.add("fa-arrow-right")
    rightButtonElement.append(rightArrowIcon)

      
    

}


