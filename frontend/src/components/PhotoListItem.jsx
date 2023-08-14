import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { id, location, urls, user } = props.photosData;
  const { openModal, closeModal, ...state } = props; // Removed favPhotoIds from here

  const ClickHandler = () => {
    openModal(true);
    console.log("PhotoListItem ClickHandler", state.modalToggle);
  };

  return (
    <div className='photo-list__item'>
      <PhotoFavButton id={id} {...state} />
      <img className='photo-list__image' src={urls.regular} alt='Photo' onClick={ClickHandler} /> {/* Use ClickHandler here */}

      <footer className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={user.profile} alt='Profile' />

        <div className='photo-list__user-info'>
          {user.name}

          <div className='photo-list__user-location'>
            {location.city}, {location.country}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PhotoListItem;