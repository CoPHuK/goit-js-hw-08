import galleryItems from '../gallery-items.js'
const galleryRef = document.querySelector('.js-gallery')
const createElement = (element) =>
{ 
    const galleryItem = document.createElement('li')
    galleryItem.setAttribute('class', 'gallery__item')
    
    const galleryLink = document.createElement('a')
    galleryLink.setAttribute('class', 'gallery__link')

    const galletyImg = document.createElement('img')
    galletyImg.setAttribute('class', 'gallery__image')

    galletyImg.setAttribute('alt', element.description)
    galletyImg.setAttribute('src', element.preview)
    galletyImg.setAttribute('data-source', element.original)
    galletyImg.setAttribute('data-index', galleryItems.indexOf(element))
    galleryLink.appendChild(galletyImg)
    galleryItem.appendChild(galleryLink)

    return galleryItem
    
}

const elements = galleryItems.map(createElement)
galleryRef.append(...elements)

