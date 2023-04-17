import { myKey } from "./dataKey";
import { createFilmSection } from "./filmSection";
import { createCards } from "./cards";
import { baseImgULR } from "./trendingSection";

export async function popularMovieAPI() {
    try {
        
        const response = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${myKey}&language=en-US&page=1`)
        const dataFromApi = await response.json()
        const data = dataFromApi.results
        

        createFilmSection("Popular", "popularSectionSlider")

        for (let i = 0; i < data.length; i++) {
            
            const getBackgroundImg = data[i].backdrop_path
            createCards(`${baseImgULR}${getBackgroundImg}`)
           
        }
        

    } catch (error) {
        console.log("error");
        
    }
}
