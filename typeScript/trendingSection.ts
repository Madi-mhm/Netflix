import { createCards } from "./cards"
import { createFilmSection } from "./filmSection"
import { myKey } from "./dataKey"

export const baseImgULR = "https://image.tmdb.org/t/p/original"


export async function trendingMovieAPI(){
    try{
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${myKey}`)
        const dataFromApi = await response.json()
        const data = dataFromApi.results
        


        createFilmSection('Trending', "trendingSectionSlider", "trendingButtons")


        for (let i = 0; i < data.length; i++) {

            const getBackgroundImg = data[i].backdrop_path
            createCards(`${baseImgULR}${getBackgroundImg}`)
            

        }     



    }catch(error){
        console.log("Error")
    }
    
}