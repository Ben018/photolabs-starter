import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { favourite, photoFavourites, setFavourite, toggleFavorite, ...state } = props; // Use setFavourite to update state
  const [selected, setSelected] = useState(false);

  const ClickHandler = () => {
    toggleFavorite(state.id);
    console.log('toggleFavorite', state.id);
    console.log('photoFavourites', photoFavourites);
    console.log('Photo Includes', photoFavourites.includes(state.id));
  };

  return (
    <div className="photo-list__fav-icon" onClick={ClickHandler}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={photoFavourites && photoFavourites.find(photo => photo.id === state.id) ? "selected" : null} />
      </div>
    </div>
  );
}

export default PhotoFavButton;