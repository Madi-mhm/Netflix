
export let newFilms; 

export function createSection(sectionTitle: string){
    const filmSectionscontainer = document.querySelector(".filmSectionscontainer")

    const filmSection = document.createElement("div")
    filmSection.classList.add("newFilmSection")
    filmSectionscontainer?.append(filmSection)

    // Create the title of the new section 
    const sectionType = document.createElement("p")
    sectionType.innerText = sectionTitle
    filmSection?.append(sectionType)


    newFilms = document.createElement("div")
    newFilms.classList.add("filmBar")
    filmSection.append(newFilms)

}

// <!-- <div class="newFilmSection">
//                         <p>Trending</p>
//                         <div class="filmBar">
//                             <div class="cards"></div>
//                             <div class="cards"></div>
//                             <div class="cards"></div>
//                             <div class="cards"></div>
//                         </div>
//                     </div>
//                     <div>
//                         <p>Popular</p>
//                         <div class="filmBar">
//                             <div class="cards"></div>
//                             <div class="cards"></div>
//                             <div class="cards"></div>
//                             <div class="cards"></div>
//                         </div>
//                     </div>
//                     <div class="action">
//                         <p>Action</p>
//                         <div class="filmBar">
//                             <div class="cards"></div>
//                             <div class="cards"></div>
//                             <div class="cards"></div>
//                             <div class="cards"></div>
//                         </div>
//                     </div>
//                     <div class="aeries">
//                         <p>Series</p>
//                         <div class="filmBar">
//                             <div class="cards"></div>
//                             <div class="cards"></div>
//                             <div class="cards"></div>
//                             <div class="cards"></div>
//                         </div>
//                     </div> -->