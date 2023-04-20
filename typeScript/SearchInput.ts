import { myKey } from "./dataKey"
export function searchInput(){

    const searchIcon = document.querySelector(".fa-magnifying-glass")
    const searchInput = document.getElementById("searchInput")
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
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=en-US&page=1&include_adult=false`)
            const dataFromApi = await response.json()
            const data = dataFromApi.results

            console.log(data);
            

            
        } catch (error) {}
    }

   

    


}