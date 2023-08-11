import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { setModal, modalPhoto, photoData } = props;

  console.log('Photo =====================>', photoData)
  const photo = photoData.find((photo) => photo.id === modalPhoto);
  console.log(photo);

  const ClickHandler = () => setModal(false);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={ClickHandler} />
      </button>
      <div className="photo-details-modal__images">
        <img className="photo-details-modal__image" src={photo.urls.full} />
      </div>
    </div >
  )
};

export default PhotoDetailsModal;
