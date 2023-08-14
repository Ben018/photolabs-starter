//TopNavigationBar.jsx

import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { ...state } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicsData={props.topicsData} />
      {state.photoFavourites.length > 0 ? <FavBadge isFavPhotoExist={state.photoFavourites} /> : <FavBadge />}
    </div>
  )
}

export default TopNavigation;