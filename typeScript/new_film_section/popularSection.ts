import { myKey } from "../dataKey";
import { createFilmSection } from "../filmSection";
import { createCards } from "../cards";
import { baseImgULR } from "./trendingSection";

export async function popularMovieAPI() {
    try {
        
        const response = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${myKey}&language=en-US&page=1`)
        const dataFromApi = await response.json()
        const data = dataFromApi.results
        

        createFilmSection("Popular", "popularSectionSlider", "popularButtons")

        for (let i = 0; i < data.length; i++) {

            // const getId = data[i].id
            const getDescription = data[i].overview
            const getBackgroundImg = data[i].backdrop_path
            const getName = data[i].title

            createCards(`${baseImgULR}${getBackgroundImg}`, getName, getDescription)
           
        }

    } catch (error) {
        console.log("error");
        
    }
}
