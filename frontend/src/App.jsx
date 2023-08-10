import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

// const photos = new Array(3).fill(sampleDataForPhotoListItem);
// console.log(photos);

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;

      // <PhotoListItem key={sampleDataForPhotoListItem.id} sampleData={sampleDataForPhotoListItem} />
      // <div className='photo-list'>
      //   {photos.map((photoData, index) => (
      //     <PhotoListItem key={index} sampleData={photoData} />
      //   ))}
      // </div>
