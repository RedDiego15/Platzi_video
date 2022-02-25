
const templateCarouselItem = ({ itemList = [] }) =>{
    const nodes = itemList.map(({
        attributes: {titles,posterImage,slug,youtubeVideId,startDate}
    }) => {
        let japanTitle = titles.ja_jp;
        if(japanTitle == undefined)
            japanTitle = titles.en;         
        
        const template =
         `<div class="carousel-item">
            <figure class="item__img">
                <img src=${posterImage.medium} alt="img-movie">
            </figure>
            <div class="carousel-item__details">
                <div class="carousel-item__details--iconos">
                    <a href="${youtubeVideId}" class="details__icon">
                        <figure >
                            <img src="../src/assets//play-icon.png" alt="img-movie">
                        </figure>
                    </a>
                    <a href="${slug}" class="details__icon">
                        <figure >
                            <img src="../src/assets/plus-icon.png" alt="img-movie">
                        </figure>
                    </a>
                    
                </div>
                <p class="carousel-item__details--title">${titles.en}</p>
                <p class="carousel-item__details--sub-title">${japanTitle}</p>
                <p class="carousel-item__details--date">Realized date: ${startDate}</p>
            </div>
        </div>`
        const node = createCarousel_itemTemplate(template)
        return node;
    })
    return nodes
   
    
}

const createCarousel_itemTemplate = (stringHtml) => {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = stringHtml;
    return html.body.children[0];
}

export function addWholeTemplateCarousel_container({itemList}) {
    const $carousel_container__carousel = document.createElement('div');
    $carousel_container__carousel.classList.add('carousel-container__carousel');
    const nodes =templateCarouselItem({itemList:itemList});
    nodes.map((nodo)=>{
        $carousel_container__carousel.appendChild(nodo);
    })
    
    return $carousel_container__carousel;
}