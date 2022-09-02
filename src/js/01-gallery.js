// Add imports above this line

import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector('.gallery');
const newImg = galleryItems
  .map(
    image =>
      `<a class="gallery__item" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
        data-source="${image.original}"                      
      alt="${image.description}"
    />
  </a>`
  )
  .join('');

list.insertAdjacentHTML('beforeend', newImg);
const lightbox = new SimpleLightbox('.gallery .gallery__item', {
  captionDelay: 250,
  captionsData: 'alt',
});
