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
    if(screen.width <600){
        URL = image.dataset.srcTiny;
    }
    
    image.src = URL;
    observer.unobserve(entry.target)

}

const registerImage = (image) => {
    observer.observe(image);
}
export default registerImage;