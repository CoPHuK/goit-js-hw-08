const galleryRef = document.querySelector('.js-gallery')
const imgGalleryRef = document.querySelector('.gallery__image')
const lightboxRef = document.querySelector('.lightbox')
const closeBtnRef = document.querySelector('.lightbox__button')
const lightboxImgRef = document.querySelector('.lightbox__image')


galleryRef.addEventListener('click', onImgClick)
closeBtnRef.addEventListener('click', closeBtnClick)


function clearSrcLightBoxImg() { 
    lightboxImgRef.setAttribute('src', '')
}

function closeBtnClick(event) { 
    lightboxRef.classList.toggle('is-open')
    clearSrcLightBoxImg()
}

function keyEskDown(event) { 
    if (event.key === "Escape") {
        lightboxRef.classList.remove('is-open')
    }
    clearSrcLightBoxImg()
}

function onImgClick(event) {
    if (event.target.nodeName == `IMG`) {
        lightboxRef.classList.add('is-open')
        document.addEventListener('keydown', keyEskDown)
        lightboxImgRef.setAttribute('src', event.target.dataset.source)
     }
}







