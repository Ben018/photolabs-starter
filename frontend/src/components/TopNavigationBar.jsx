//TopNavigationBar.jsx

import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topicsData, fetchPhotosByTopic, ...state } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicsData={topicsData} fetchPhotosByTopic={fetchPhotosByTopic} />
      {state.photoFavourites.length > 0 ? <FavBadge isFavPhotoExist={state.photoFavourites} /> : <FavBadge />}
    </div>
  )
}

export default TopNavigation;



// const TopNavigation = (props) => {
//   const { topicsData, fetchPhotosByTopic, ...state } = props;

//   console.log("TopicsData ============>", topicsData)

//   const clickHandler = () => {
//     fetchPhotosByTopic(topicsData);
//     console.log('clickHandler =============>', topicsData);
//   };

//   return (
//     <div className="top-nav-bar">
//       <span className="top-nav-bar__logo">PhotoLabs</span>
//       <div onClick={clickHandler}>
//         <TopicList topicsData={topicsData} />
//       </div>
//       {state.photoFavourites.length > 0 ? <FavBadge isFavPhotoExist={state.photoFavourites} /> : <FavBadge />}
//     </div>
//   )
// }

// export default TopNavigation;