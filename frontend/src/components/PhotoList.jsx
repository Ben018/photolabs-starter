import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

//loop through the sampleDataForPhotoList array and render a PhotoListItem component for each item in the array
const PhotoList = (props) => {
  const { photosData, favourite, setFavourite, modal, setModal, modalPhoto, setModalPhoto } = props;
  return (
    <ul className="photo-list">
      {photosData.map((photoData, index) => (
        <PhotoListItem key={index} photosData={photoData} favourite={favourite} setFavourite={setFavourite} modal={modal} setModal={setModal} modalPhoto={modalPhoto} setModalPhoto={setModalPhoto} />
      ))}
    </ul>
  );
};

export default PhotoList;
