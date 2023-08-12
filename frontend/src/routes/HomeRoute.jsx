import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { modal, setModal, modalPhotoID, setModalPhotoID, favourite, setFavourite } = props;

  // console.log("Length of Favourites", favourite.length);
  // console.log("Length of Favourites", favourite);

  return (
    <div className="home-route">
      <TopNavigation topicsData={props.topicsData} favourite={favourite} />
      <PhotoList photosData={props.photosData} favourite={favourite} setFavourite={setFavourite} modal={modal} setModal={setModal} modalPhotoID={modalPhotoID} setModalPhotoID={setModalPhotoID} />
    </div>
  );
};

export default HomeRoute;