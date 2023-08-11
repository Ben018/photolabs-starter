import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { favourite, setFavourite } = props;
  const [selected, setSelected] = useState(false);

  const ClickHandler = () => {
    setSelected(selected ? false : true)

    if (selected) {
      setFavourite(prev => prev.filter(photo => photo.id !== props.id));
    } else {
      setFavourite(prev => [...prev, { id: props.id }]);
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