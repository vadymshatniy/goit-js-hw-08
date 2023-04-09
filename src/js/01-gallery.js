// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryGrid = document.querySelector(".gallery");

const pictureItems = galleryItems.map((galleryItem) => {
  const listItem = document.createElement('li');
  listItem.classList.add("gallery__item");
  listItem.innerHTML = `<a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      alt="${galleryItem.description}"
    />
  </a>`;
  return listItem;
});

galleryGrid.append(...pictureItems);

const gallery = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});


console.log(galleryItems);
