import { createCards } from "./cards"
import { createFilmSection } from "./filmSection"


const myKey = "6d5b82f3d63757edb75a5ba63fb2990c"

export async function trendingMovieAPI(){
    try{
        // const response = await fetch(`${baseULR}/3/trending/movie/day?api_key=${myKey}`)
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${myKey}`)
        const dataFromApi = await response.json()
        const data = dataFromApi.results
        

        createFilmSection('Trending')


        for (let i = 0; i < data.length; i++) {
            createCards()
        }     



    }catch(error){
        console.log("Error")
    }
    
}