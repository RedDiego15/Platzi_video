import ModalVideo from 'modal-video';
import 'modal-video/css/modal-video.min.css'

export const openModal = (videoId) => {

    const button = document.createElement('BUTTON');
    button.dataset.videoId = videoId;
    console.log(button);
    new ModalVideo([button])
    button.click(); // le digo que luego de que cargo se ejecute
}