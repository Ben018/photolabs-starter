//App.jsx

import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplication from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    toggleModal,
    closeModal,
    toggleFavorite,
    ...state
  } = useApplication();

  console.log("app.js", state.modalPhotoID)
  console.log("app.js faveSelected", state.favSelected)
  console.log("photoFavourites", state.photoFavourites)

  return (
    <div className="App">
      <HomeRoute {...state} toggleModal={toggleModal} closeModal={closeModal} toggleFavorite={toggleFavorite} />
      {state.modalToggle && <PhotoDetailsModal {...state} photosData={state.photosData} toggleModal={toggleModal} closeModal={closeModal} toggleFavorite={toggleFavorite} />}
    </div>
  );
};

export default App;
