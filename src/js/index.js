import {addWholeTemplate} from './carousel';
import {fetchPopular, fetchHighestRated,fetchTrending} from './api';


window.addEventListener('DOMContentLoaded', async () => {
    
    
  const trending = await fetchTrending();
  const popular = await fetchPopular();
  const highestRated = await fetchHighestRated();

 
  addWholeTemplate({itemList:trending},'Trending');
  addWholeTemplate({itemList:popular},'Popular');
  addWholeTemplate({itemList:highestRated},'HighestRated');
    
  
   
  
    document.body.addEventListener('click',(event)=>{
      const name_class = event.target.tagName;
  
      if(name_class!== 'IMG') return;
  
      modalListener(event)
  
  
    });
  
    
  })
  



