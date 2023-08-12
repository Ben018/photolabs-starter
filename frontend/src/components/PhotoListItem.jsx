import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { id, location, urls, user } = props.photosData;
  const { setModal, favourite, setFavourite, setModalPhotoID } = props;

  const ClickHandler = () => {
    setModal(true);
    setModalPhotoID(id)
  };

  return (
    <div className='photo-list__item'>
      <PhotoFavButton id={id} favourite={favourite} setFavourite={setFavourite} />
      <img className='photo-list__image' src={urls.regular} alt='Photo' onClick={ClickHandler} />

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
