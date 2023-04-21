
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
        try {
            const searchValue =  searchInput.value.trim()

            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=en-US&page=1&include_adult=false&query=${searchValue}`)
            const dataFromApi = await response.json()
            const data = dataFromApi.results           

            const homeSection = document.querySelector(".homeSection")
            const filmSectionscontainer = document.querySelector(".filmSectionscontainer")
            const headerContainer = document.querySelector(".headerContainer") as HTMLElement

            homeSection?.classList.add("hide")
            filmSectionscontainer?.classList.add("hide")
            headerContainer.classList.add("searchResultatPageNavBar")
            
            


            function displayFunction(){
                const filmSection = document.querySelector(".filmSection")

                const searchResultSection = document.createElement("div")
                filmSection?.append(searchResultSection)
                searchResultSection.classList.add("searchResultSection")

                const searchResultContainer = document.createElement("div")
                searchResultSection?.append(searchResultContainer)
                searchResultContainer.classList.add("searchResultContainer")
                
                createSearchResultatCards()
                

            }  
            displayFunction()  
             
            
            function createSearchResultatCards(){
                const searchResultContainer = document.querySelector(".searchResultContainer")

                data.forEach(movie => {
                    const searchResultMoviesCard = document.createElement("div")
                    searchResultMoviesCard.classList.add("searchResultMoviesCard")

                    const posterPath = movie.backdrop_path

                    if(posterPath != null){
                        searchResultContainer?.append(searchResultMoviesCard)
                    }

                    const baseImgULR = "https://image.tmdb.org/t/p/original"                  
                    
                    searchResultMoviesCard.style.backgroundImage = `url(${baseImgULR}${posterPath})`
    
                });                
            }

            
        } catch (error) {}
    }

    


}