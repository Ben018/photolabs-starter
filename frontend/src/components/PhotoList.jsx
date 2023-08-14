import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { openModal, closeModal, favPhotoIds, photosData, ...state } = props;

  return (
    <ul className="photo-list">
      {photosData.map((photoData) => (
        <PhotoListItem key={photoData.id} {...state} photosData={photoData} openModal={openModal} closeModal={closeModal} favPhotoIds={favPhotoIds} />
      ))}
    </ul>
  );
};

export default PhotoList;