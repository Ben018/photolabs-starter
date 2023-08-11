import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photoData from './mocks/photos';
import topicData from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <HomeRoute photosData={photoData} topicsData={topicData} modal={modal} setModal={setModal} />
      {modal && <PhotoDetailsModal setModal={setModal} />}
    </div>
  );
};

export default App;
