import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { setModal, modalPhotoID, photoData } = props;

  const photo = photoData.find((photo) => photo.id === modalPhotoID);
  const similarPhotos = Object.values(photo.similar_photos);
  console.log('Photo =====================>', photo)
  console.log("Similar Photos", similarPhotos);
  console.log(typeof similarPhotos);
  console.log("Normal Data", photoData);

  const ClickHandler = () => setModal(false);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={ClickHandler} />
      </button>
      <div className="photo-details-modal__images">
        <img className="photo-details-modal__image" src={photo.urls.full} />
        <header className="photo-details-modal--header">Similar Photos</header>
        <PhotoList photosData={similarPhotos} />
      </div>
    </div >
  )
};

export default PhotoDetailsModal;
