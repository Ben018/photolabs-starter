import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

//loop through the sampleDataForPhotoList array and render a PhotoListItem component for each item in the array
export const PhotoList = (props) => {
  const { photosData, favourite, setFavourite, setModal, setModalPhotoID } = props;

  return (
    <ul className="photo-list">
      {photosData.map((photoData, index) => (
        <PhotoListItem key={index} photosData={photoData} favourite={favourite} setFavourite={setFavourite} setModal={setModal} setModalPhotoID={setModalPhotoID} />
      ))}
    </ul>
  );
};

export default PhotoList;
