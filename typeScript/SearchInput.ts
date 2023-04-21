
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
                
                createSearchResultatCards()
                

            }  
            
             
            // Create a card and inject the data from the api for each data it has
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