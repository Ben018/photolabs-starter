import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { closeModal, toggleModal, photosData, favourite, toggleFavorite, ...state } = props;

  console.log("PhotoDetailsModal", photosData)
  const photo = photosData.find((photo) => photo.id === state.modalPhotoID);
  console.log("PhotoDetailsModal Photos", photo);
  const similarPhotos = Object.values(photo.similar_photos);
  console.log("PhotoDetailsModal Similar Photos", similarPhotos)

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={closeModal} />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton id={photo.id} toggleFavorite={toggleFavorite} {...state} />
        <img className="photo-details-modal__image" src={photo.urls.full} alt="Full" />

        <footer className="photo-details-modal__photographer-details">
          <img className='photo-list__user-profile' src={photo.user.profile} alt='Profile' />

          <div className='photo-list__user-info'>
            {photo.user.name}

            <div className='photo-list__user-location'>
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </footer>

        <header className="photo-details-modal__header">Similar Photos</header>
        <PhotoList photosData={similarPhotos} toggleFavorite={toggleFavorite} {...state} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;