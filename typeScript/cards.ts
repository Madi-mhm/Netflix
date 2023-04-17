
export function createCards(backgroundImg){

    const sliderElement = document.querySelectorAll(".slider") 

    const card = document.createElement("div")
    card.classList.add("cards")
    card.style.backgroundImage = `url(${backgroundImg})`;

    for (let i = 0; i < sliderElement.length; i++) {
        if(sliderElement[i].contains(document.getElementById("trendingSectionSlider"))){

            sliderElement[i].append(card)
        }else if(sliderElement[i].contains(document.getElementById("popularSectionSlider"))){
        sliderElement[i].append(card)
    } 
    }
}



