const modalListener = (event) => { 
    const link = event.target.parentNode.parentNode
    
    const videoId = link.dataset.videoId;
    debugger;
    if(link && link.classList.contains('details__icon')){
        //lazy load
        event.preventDefault();
        import( /* webpackChunkName: "modal-lib" */ './open-modal').then(({openModal}) => {
            openModal(videoId);
        })
        
    }

}

export default modalListener