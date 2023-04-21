import { createPopUp } from "./popUp";

export function createCards(backgroundImg, movieTitle, movieDescription){

    const sliderElement = document.querySelectorAll(".slider")

    const card = document.createElement("div")
    card.classList.add("cards")
    card.style.backgroundImage = `url(${backgroundImg})`;

    card.addEventListener("click",()=>{

        const popUpContainer = document.querySelector(".popUpContainer")
        

        if(popUpContainer != null){
            popUpContainer.remove()
            createPopUp(backgroundImg, movieTitle, movieDescription)
            console.log(popUpContainer);
                    
        }else if(popUpContainer == null){
            createPopUp(backgroundImg, movieTitle, movieDescription)  
                  
            console.log(popUpContainer);
            
        }

    })


    for (let i = 0; i < sliderElement.length; i++) {
        if(sliderElement[i].contains(document.getElementById("trendingSectionSlider"))){

            sliderElement[i].append(card)
        }else if(sliderElement[i].contains(document.getElementById("popularSectionSlider"))){
        sliderElement[i].append(card)
    } 
    }
}



