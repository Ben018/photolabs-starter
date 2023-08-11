import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [favourite, setFavourite] = useState([]);

  return (
    <div className="home-route">
      <TopNavigation topicsData={props.topicsData} favourite={favourite} />
      <PhotoList photosData={props.photosData} favourite={favourite} setFavourite={setFavourite} />
    </div>
  );
};

export default HomeRoute;
