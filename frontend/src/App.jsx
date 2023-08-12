import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplication from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    photosData,
    topicsData,
    modal,
    setModal,
    modalPhotoID,
    setModalPhotoID,
    favourite,
    setFavourite
  } = useApplication();

  return (
    <div className="App">
      <HomeRoute photosData={photosData} topicsData={topicsData} setModal={setModal} setModalPhotoID={setModalPhotoID} favourite={favourite} setFavourite={setFavourite} />
      {modal && <PhotoDetailsModal setModal={setModal} photosData={photosData} modalPhotoID={modalPhotoID} favourite={favourite} setFavourite={setFavourite} />}
    </div>
  );
};

export default App;
