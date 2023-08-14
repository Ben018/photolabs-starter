import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { setModal, modalPhotoID, photosData, favourite, setFavourite } = props;

  const photo = photosData.find((photo) => photo.id === modalPhotoID);
  const similarPhotos = Object.values(photo.similar_photos);

  const ClickHandler = () => setModal(false);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={ClickHandler} />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton id={photo.id} favourite={favourite} setFavourite={setFavourite} />
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
        <PhotoList photosData={similarPhotos} favourite={favourite} setFavourite={setFavourite} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;