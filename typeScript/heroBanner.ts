import { myKey } from "./dataKey";
import { baseImgULR } from "./trendingSection";

export async function heroBanner(){

    try{

        const response = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${myKey}&language=en-US&page=1`)
        const newRespose = await response.json()
        const data = newRespose.results        

        let dataIndex = 0;
        

        let heroBannerImage; 
        let heroBannerTitle;

        
        function heroBannerInjection (){
         heroBannerImage = data[dataIndex].backdrop_path
         heroBannerTitle = data[dataIndex].title
          // Get image for heroBanner
         const homeSection = document.querySelector(".homeSection") as HTMLElement
         homeSection.style.backgroundImage = `URL(${baseImgULR}${heroBannerImage})`
         // get the heroBanner infos
         const heroBannerName = document.getElementById("heroBannerName") as HTMLElement
         heroBannerName.innerText = heroBannerTitle
        }       

        heroBannerInjection()
        
        setInterval(()=>{
            if(dataIndex < data.length){
                dataIndex += 1
                heroBannerInjection()
            }else if(dataIndex >= 20 ){
                dataIndex = 0
                heroBannerInjection()
            }      

        }, 5000)

    }catch(error){
        console.log("error");
        
    }
}