// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCardsSet = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryCardsSet);

function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" 
            data-source="${original}"
            alt="${description}">
          </a>
        </li>
      `;
    })
    .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
