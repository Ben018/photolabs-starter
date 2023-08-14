//App.jsx

import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplication from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    openModal,
    closeModal,
    favPhotoIds,
    ...state
  } = useApplication();

  return (
    <div className="App">
      <HomeRoute {...state} openModal={openModal} closeModal={closeModal} favPhotoIds={favPhotoIds} />
      {state.modalToggle && <PhotoDetailsModal {...state} photosData={state.photosData} openModal={openModal} closeModal={closeModal} favPhotoIds={favPhotoIds} />}
    </div>
  );
};

export default App;
