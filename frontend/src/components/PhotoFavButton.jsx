import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton() {
  const [selected, setSelected] = useState(false);

  const ClickHandler = () => {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };

  return (
    <div className="photo-list__fav-icon" onClick={(ClickHandler)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;