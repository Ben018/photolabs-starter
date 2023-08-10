import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

//loop through the sampleDataForPhotoList array and render a PhotoListItem component for each item in the array
const PhotoList = (props) => {
  const { photosData } = props;
  return (
    <ul className="photo-list">
      {photosData.map((photoData, index) => (
        <PhotoListItem key={index} photosData={photoData} />
      ))}
    </ul>
  );
};

export default PhotoList;
