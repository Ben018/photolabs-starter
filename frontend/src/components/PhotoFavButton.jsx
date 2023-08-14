import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { favourite, photoFavourites, setFavourite } = props; // Use setFavourite to update state
  const [selected, setSelected] = useState(false);

  const ClickHandler = () => {
    setSelected((prevSelected) => !prevSelected);

    if (selected) {
      setFavourite((prevFavourites) => prevFavourites.filter(photo => photo.id !== props.id));
    } else {
      setFavourite((prevFavourites) => [...prevFavourites, { id: props.id }]);
    }
  };

  return (
    <div className="photo-list__fav-icon" onClick={ClickHandler}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;