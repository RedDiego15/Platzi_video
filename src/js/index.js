console.log("pruba");

import {addWholeTemplate} from './carousel';
import {fetchPopular, fetchHighestRated,fetchTrending} from './api';


window.addEventListener('DOMContentLoaded', async () => {
    
    
    const trending = await fetchTrending()
    const popular = await fetchPopular()
    const highestRated = await fetchHighestRated()

    console.log(trending)
    addWholeTemplate({itemList:trending},'Trending')
    
  
   
  
    document.body.addEventListener('click',(event)=>{
      const name_class = event.target.tagName;
  
      if(name_class!== 'IMG') return;
  
      modalListener(event)
  
  
    });
  
    
  })
  



