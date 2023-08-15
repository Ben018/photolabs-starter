import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { favourite, photoFavourites, setFavourite, toggleFavorite, ...state } = props;

  const ClickHandler = () => {
    toggleFavorite(state.id);
  };

  return (
    <div className="photo-list__fav-icon" onClick={ClickHandler}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={photoFavourites && photoFavourites.find(photo => photo.id === state.id) ? "selected" : null} />
      </div>
    </div>
  );
};

export default PhotoFavButton;