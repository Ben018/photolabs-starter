import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { setModal, setModalPhotoID, favourite, setFavourite } = props;

  return (
    <div className="home-route">
      <TopNavigation topicsData={props.topicsData} favourite={favourite} />
      <PhotoList photosData={props.photosData} favourite={favourite} setFavourite={setFavourite} setModal={setModal} setModalPhotoID={setModalPhotoID} />
    </div>
  );
};

export default HomeRoute;