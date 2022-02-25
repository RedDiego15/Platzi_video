const observer = new IntersectionObserver((entries) =>{
    entries.map((entry)=> {
        if(entry.isIntersecting){
            lazyCharge(entry);
        }
    })
})

const lazyCharge = (entry) =>{
    const image = entry.target.firstElementChild;
    const URL = image.dataset.src;
    image.src = URL;
    observer.unobserve(entry.target)

}

export const registerImage = (image) => {
    observer.observe(image);
}