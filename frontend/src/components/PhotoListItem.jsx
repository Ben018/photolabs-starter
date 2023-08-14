import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { id, location, urls, user } = props.photosData;
  const { photoData, toggleModal, toggleFavorite, ...state } = props;

  const clickHandler = () => {
    toggleModal(state.photosData.id);
    console.log("toggleModal", state.photosData.id);
  };

  return (
    <div className='photo-list__item'>
      <PhotoFavButton id={state.photosData.id} toggleFavorite={toggleFavorite} {...state} />
      <img className='photo-list__image' src={state.photosData.urls.regular} alt='Photo' onClick={clickHandler} />

      <footer className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={state.photosData.user.profile} alt='Profile' />

        <div className='photo-list__user-info'>
          {state.photosData.user.name}

          <div className='photo-list__user-location'>
            {state.photosData.location.city}, {state.photosData.location.country}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PhotoListItem;