import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photoData from './mocks/photos';
import topicData from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

console.log(photoData);
console.log({ ...photoData });

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modal, setModal] = useState(false);
  const [modalPhotoID, setModalPhotoID] = useState(null);

  return (
    <div className="App">
      <HomeRoute photosData={photoData} topicsData={topicData} modal={modal} setModal={setModal} modalPhotoID={modalPhotoID} setModalPhotoID={setModalPhotoID} />
      {modal && <PhotoDetailsModal setModal={setModal} photoData={photoData} modalPhotoID={modalPhotoID} />}
    </div>
  );
};

export default App;
