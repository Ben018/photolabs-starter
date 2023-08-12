import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { setModal, modalPhotoID, photoData, favourite, setFavourite } = props;

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
        <PhotoFavButton id={photoData.id} favourite={favourite} setFavourite={setFavourite} />
        <img className="photo-details-modal__image" src={photo.urls.full} />
        <header className="photo-details-modal__header">Similar Photos</header>
        <PhotoList photosData={similarPhotos} favourite={favourite} setFavourite={setFavourite} />
      </div>
    </div >
  )
};

export default PhotoDetailsModal;
