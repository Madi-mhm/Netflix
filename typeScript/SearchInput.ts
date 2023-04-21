

import { myKey } from "./dataKey"

export function searchInput(){

    const searchIcon = document.querySelector(".fa-magnifying-glass")
    const searchInput = document.getElementById("searchInput") as HTMLInputElement
    const headerNavbarLinks = document.querySelectorAll(".headerNavbarLinks ul li")
    const searchInputButton: HTMLElement | null = document.querySelector(".searchInputButton")
    
    // Disply the search input and hide the navbar links
        searchIcon?.addEventListener("click",()=>{
        searchInput?.classList.remove("hide")
        searchInputButton?.classList.remove("hide")
        searchIcon.classList.add("hide")
        headerNavbarLinks.forEach(element => {
        element.classList.add("hide")
        });
        })
    



    // Search by search button
    searchInputButton?.addEventListener("click",searchFunction)
    
    async function searchFunction(){
        const searchResultSection = document.querySelector(".searchResultSection")
        searchResultSection?.remove()
        
        try {
            const searchValue =  searchInput.value.trim()

            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=en-US&page=1&include_adult=false&query=${searchValue}`)
            const dataFromApi = await response.json()
            const data = dataFromApi.results                

            const homeSection = document.querySelector(".homeSection")
            const filmSectionscontainer = document.querySelector(".filmSectionscontainer")
            const headerContainer = document.querySelector(".headerContainer") as HTMLElement

            
            
            // Oraganisation of search value 
            // You have to write a valid value otherwise it execute the following code
            if(data != ""){
                homeSection?.classList.add("hide")
                filmSectionscontainer?.classList.add("hide")
                headerContainer.classList.add("searchResultatPageNavBar")
                displayFunction()                

            }else{
                
                if(homeSection?.classList.contains("hide") || filmSectionscontainer?.classList.contains("hide") || headerContainer?.classList.contains("searchResultatPageNavBar") ){

                    homeSection?.classList.remove("hide")
                    filmSectionscontainer?.classList.remove("hide")
                    headerContainer.classList.remove("searchResultatPageNavBar")
                }else{
                    alert("don't fk with me")
                }
            }
                   
            // Create a page for the search resultal
            function displayFunction(){
                const filmSection = document.querySelector(".filmSection")

                const searchResultSection = document.createElement("div")
                filmSection?.append(searchResultSection)
                searchResultSection.classList.add("searchResultSection")

                const searchResultContainer = document.createElement("div")
                searchResultSection?.append(searchResultContainer)
                searchResultContainer.classList.add("searchResultContainer")  
                createSearchResultatCards(data.length / 10 , 10)

            }  
            
            // page count for display in search result 
            const totalPageNumber = Math.ceil(data.length / 10)
            
            let currentPageNumber = 1


            // Create a card and inject the data from the api for each data it has
            function createSearchResultatCards(pageNumber: number , cardsPerPage: number){
                const startIndex = (pageNumber - 1) * cardsPerPage
                const endIndex = startIndex + cardsPerPage - 1

                const searchResultContainer = document.querySelector(".searchResultContainer")

                if(searchResultContainer != null){
                    searchResultContainer.innerHTML= ""
                }

                for (let i = startIndex; i < endIndex && data.length; i++) {

                    const movie = data[i]
                    const searchResultMoviesCard = document.createElement("div")
                    searchResultMoviesCard.classList.add("searchResultMoviesCard")
                    const posterPath = movie.backdrop_path
                    
                    if(posterPath != null){
                        searchResultContainer?.append(searchResultMoviesCard)
                    }
                    const baseImgULR = "https://image.tmdb.org/t/p/original"                  
                    
                    searchResultMoviesCard.style.backgroundImage = `url(${baseImgULR}${posterPath})`
                }
            }

            // Search Display buttons for navigate between pages 
            function searchDisplayButtons(totalPages , currentPage){

                const searchResultSection = document.querySelector(".searchResultSection")
                const pageButtonsContainer = document.createElement("div")
                searchResultSection?.append(pageButtonsContainer)
                pageButtonsContainer.classList.add("pageButtonsContainer")                

                const leftButton = document.createElement("button")
                leftButton.classList.add("leftButton")
                leftButton.innerText ="<"
                pageButtonsContainer.append(leftButton)

                const pageActuelleNumber = document.createElement("p")
                pageActuelleNumber.innerText = `${currentPage} / ${totalPages}`
                pageActuelleNumber.classList.add("pageActuelleNumber")
                pageButtonsContainer.append(pageActuelleNumber)

                const rightButton = document.createElement("button")
                rightButton.classList.add("rightButton")
                rightButton.innerText =">"
                pageButtonsContainer.append(rightButton)
                
                rightButton.addEventListener("click", ()=>{
                    if(currentPage < totalPages){
                        currentPageNumber += 1
                        createSearchResultatCards(currentPageNumber, 10)
                        pageActuelleNumber.innerText = `${currentPageNumber} / ${totalPages}`
                        
                    }else{
                        console.log("not more page");
                    }
                })
                leftButton.addEventListener("click", ()=>{
                    if(currentPage < 1){
                        currentPageNumber -= 1
                        createSearchResultatCards(currentPageNumber, 10)
                        pageActuelleNumber.innerText = `${currentPageNumber} / ${totalPages}`
                    }else{
                        console.log("not more page");
                        
                    }
                })    
            }
            createSearchResultatCards( currentPageNumber ,10)
            searchDisplayButtons(totalPageNumber, currentPageNumber)
            
            
        } catch (error) {}
    }
}