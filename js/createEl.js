//import galleryList from '../gallery-items'
//console.log(galleryList);
const createElement = (element) =>
{ 
    const galleryItem = document.createElement('li')
    galleryItem.setAttribute('class', 'gallery-item')
    
    const galleryLink = document.createElement('a')
    galleryLink.setAttribute('class', 'gallery-link')

    const galletyImg = document.createElement('img')
    galletyImg.setAttribute('class', 'gallery-img')

    galletyImg.setAttribute('alt', element.description)
    galletyImg.setAttribute('src', element.preview)
    galletyImg.setAttribute('dara-source', element.original)

    
}

createElement()