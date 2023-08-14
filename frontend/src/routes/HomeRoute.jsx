import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { topicsData, photosData, openModal, closeModal, favPhotoIds, ...state } = props;

  return (
    <div className="home-route">
      <TopNavigation {...state} topicsData={topicsData} />
      <PhotoList {...state} photosData={photosData} openModal={openModal} closeModal={closeModal} favPhotoIds={favPhotoIds} />
    </div>
  );
};

export default HomeRoute;