const observer = new IntersectionObserver((entries) =>{
    entries.map((entry)=> {
        if(entry.isIntersecting){
            lazyCharge(entry);
        }
    })
})

const lazyCharge = (entry) =>{
    const image = entry.target.firstElementChild;
    let URL = image.dataset.src;
    const url_background = image.dataset.backgroundImg
    image.style.backgroundImage = `url(${url_background})`;
    image.src = URL;
    observer.unobserve(entry.target)

}

const registerImage = (image) => {
    observer.observe(image);
}
export default registerImage;