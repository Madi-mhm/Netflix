
export function createCards(){
    const sliderElement = document.querySelector(".slider")

    const card = document.createElement("div")
    card.classList.add("cards")
    sliderElement?.append(card)
}



