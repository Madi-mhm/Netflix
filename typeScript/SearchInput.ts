export function searchInput(){

    const searchIcon = document.querySelector(".fa-magnifying-glass")
    const searchInput = document.getElementById("searchInput")

    searchIcon?.addEventListener("click",()=>{

        if(searchInput?.classList.contains("hide")){
            searchInput.classList.remove("hide")
        }else{
            searchInput?.classList.add("hide")
        }
    })

}