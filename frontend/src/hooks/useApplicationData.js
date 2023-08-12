import { useState } from 'react';
import photoData from '../mocks/photos';
import topicData from '../mocks/topics';

const useApplication = () => {
  const photosData = photoData;
  const topicsData = topicData;
  const [modal, setModal] = useState(false);
  const [modalPhotoID, setModalPhotoID] = useState(null);
  const [favourite, setFavourite] = useState([]);

  const onClosePhotoDetailsModal = () => {
    setModal(true);
    setModalPhotoID(id)
  };

  const closeModal = () => {
    setModal(false);
    console.log("close modal");
    console.log(modal);
  };

  return {
    photosData,
    topicsData,
    modal,
    setModal,
    onClosePhotoDetailsModal,
    closeModal,
    modalPhotoID,
    setModalPhotoID,
    favourite,
    setFavourite
  };
};


export default useApplication;

// Separation of Concerns
// Our useApplicationData Hook will return an object with four keys representing the following items:

// The state object will contain the entire state of the application.
// The updateToFavPhotoIds action can be used to set the favourite photos.
// The setPhotoSelected action can be used when the user selects a photo.
// The onClosePhotoDetailsModal action can be used to close the modal.