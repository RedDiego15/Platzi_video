import registerImage from '@js/lazy.js'

const templateCarouselItem = ({ itemList = [] }) =>{
    const nodes = itemList.map(({
        attributes: {titles,posterImage,slug,youtubeVideoId,startDate}
    }) => {
        let japanTitle = titles.ja_jp;
        if(japanTitle == undefined)
            japanTitle = titles.en;
        
        const template =
         `<div class="carousel-item">
            <figure class="item__img">
                <img data-src=${posterImage.medium} data-background-img= ../src/assets/carousel-item-placeholder.png  data-src-tiny=${posterImage.tiny} alt="img-movie">
            </figure>
            <div class="carousel-item__details">
                <div class="carousel-item__details--iconos">
                    <a href="https://www.youtube.com/watch?v=${youtubeVideoId}"
                    data-video-id= ${youtubeVideoId}
                    class="details__icon">
                        <figure >
                            <img src="../src/assets//play-icon.png" alt="img-movie">
                        </figure>
                    </a>
                    <a href="https://kitsu.io/explore/anime${slug}" class="details__icon">
                        <figure >
                            <img src="../src/assets/plus-icon.png" alt="img-movie">
                        </figure>
                    </a>
                    
                </div>
                <p class="carousel-item__details--title">${titles.en}</p>
                <p class="carousel-item__details--sub-title">${japanTitle}</p>
                <p class="carousel-item__details--date">Released date: ${startDate}</p>
            </div>
        </div>`
        const node = createCarousel_itemTemplate(template)
        const image = node.children[0];
        registerImage(image);
        return node;
    })
    return nodes
   
    
}

const createCarousel_itemTemplate = (stringHtml) => {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = stringHtml;
    return html.body.children[0];
}

 function addCarouselContainerNode({itemList}) {
    const $carousel_container__carousel = document.createElement('div');
    $carousel_container__carousel.classList.add('carousel-container__carousel');
    const nodes =templateCarouselItem({itemList:itemList});
    nodes.map((nodo)=>{
        $carousel_container__carousel.appendChild(nodo);
    })
    
    return $carousel_container__carousel;
}

export default addCarouselContainerNode;