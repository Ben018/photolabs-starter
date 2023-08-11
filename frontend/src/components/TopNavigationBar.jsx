import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicsData={props.topicsData} />
      {props.favourite.length > 0 ? <FavBadge isFavPhotoExist={props.favourite} /> : <FavBadge />}
    </div>
  )
}

export default TopNavigation;