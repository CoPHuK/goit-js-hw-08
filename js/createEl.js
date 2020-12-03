import galleryItems from '../gallery-items.js'
//import galleryList from '../gallery-items'
const galleryRef = document.querySelector('.js-gallery')
console.dir(galleryRef);
console.log(galleryItems);
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
console.log(elements);
galleryRef.append(...elements)

