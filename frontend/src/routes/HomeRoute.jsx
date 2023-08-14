import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { topicsData, photosData, toggleModal, toggleFavorite, ...state } = props;

  console.log('photos data', photosData)

  return (
    <div className="home-route">
      <TopNavigation {...state} topicsData={topicsData} />
      <PhotoList {...state} photosData={photosData} toggleModal={toggleModal} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default HomeRoute;