import addCarouselNode from '@templates/carousel.js';
import {fetchPopular, fetchHighestRated,fetchTrending} from '@js/api.js';
import '@styles/styles.css';


window.addEventListener('DOMContentLoaded', async () => {
    
    
  const trending = await fetchTrending();
  const popular = await fetchPopular();
  const highestRated = await fetchHighestRated();

 
  addCarouselNode({itemList:trending},'Trending');
  addCarouselNode({itemList:popular},'Popular');
  addCarouselNode({itemList:highestRated},'HighestRated');
    
  
   
  
    document.body.addEventListener('click',(event)=>{
      const name_class = event.target.tagName;
  
      if(name_class!== 'IMG') return;
  
      modalListener(event)
  
  
    });
  
    
  })
  



