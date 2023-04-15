export function carouselHandle(){
    
    document.addEventListener("click", (e) => {

        let handel: Element | null;
        const element = e.target as Element
       
        if (e.target != null) {
          if (element.matches(".handel")) {
            handel = element;
          } else {
            handel = element.closest(".handel");
          };
    
          if(handel != null){
            onHandelClick(handel);
            }
        }
      });
      
    
      function onHandelClick(handel: Element): void {
        const slider = document.querySelector(".slider") as HTMLElement
        const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"));
      
    
        // Getting the number of cards and pages for stoping the handel click 
        const sliderItemCount = slider.children.length
        const itemPerScreen = parseInt(getComputedStyle(slider).getPropertyValue("--items-per-screen"))
        const sliderPageCount = sliderItemCount / itemPerScreen
    
        
    
        // Right handel click
        if (handel.classList.contains("rightButton")) {
    
          if(sliderIndex +1 >= sliderPageCount){
            slider?.style.setProperty("--slider-index", String(0));
    
          }else{
            slider?.style.setProperty("--slider-index", String(sliderIndex + 1));
    
          }
        }
    
        // Left handel click
        if (handel.classList.contains("leftButton")) {
    
          if(sliderIndex -1 <=  sliderPageCount){
          slider?.style.setProperty("--slider-index", String(0));
          }else{
            slider?.style.setProperty("--slider-index", String(sliderIndex - 1));
          }
        }
      
        
      }
      
}