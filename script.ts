document.addEventListener("click", (e ) => {

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
  
    
    if (handel.classList.contains("leftButton")) {
      slider?.style.setProperty("--slider-index", String(sliderIndex - 1));
    }
  
    if (handel.classList.contains("rightButton")) {
      slider?.style.setProperty("--slider-index", String(sliderIndex + 1));
    }
   
    
  }
  