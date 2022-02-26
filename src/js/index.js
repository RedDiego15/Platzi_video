import addCarouselNode from '@templates/carousel.js';
import {fetchPopular, fetchHighestRated,fetchTrending} from '@js/api.js';
import '@styles/styles.css';
import modalListener from './modal/index'


window.addEventListener('DOMContentLoaded', async () => {
    
    
  const trending = await fetchTrending();
  const popular = await fetchPopular();
  const highestRated = await fetchHighestRated();

 
  addCarouselNode({itemList:trending},'Trending');
  addCarouselNode({itemList:popular},'Popular');
  addCarouselNode({itemList:highestRated},'HighestRated');
    
  
   
  
    document.body.addEventListener('click',(event)=>{
      const name_class = event.target.tagName;
      console.log(name_class);
  
      if(name_class!== 'IMG') return;
  
      modalListener(event)
  
  
    });
  
    
  })
  



