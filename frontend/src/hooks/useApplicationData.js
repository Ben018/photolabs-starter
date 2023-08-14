//useApplicationData.js

import { useReducer } from 'react';
import photoData from '../mocks/photos';
import topicData from '../mocks/topics';

const initialState = {
  photosData: photoData,
  topicsData: topicData,
  modalToggle: false,
  modalPhotoID: null,
  photoFavourites: [],
  favSelected: false,
};

export const ACTIONS = {
  MODAL_TOGGLE: 'modalToggle',
  MODAL_CLOSE: 'modalClose',
  SET_FAVOURITES: 'setFavourite',
  FAVOURITE_TOGGLE: 'favouriteToggle',
  FAVOURITE_UNTOGGLE: 'favouriteUnToggle',
}

function reducer(state, action) {
  switch (action.type) {
    case 'modalToggle':
      return { ...state, modalToggle: true, modalPhotoID: action.payload };
    case 'modalClose':
      return { ...state, modalToggle: false };
    case 'favouriteToggle':
      return { ...state, photoFavourites: [...state.photoFavourites, action.payload] };
    case 'favouriteUnToggle':
      return { ...state, photoFavourites: state.photoFavourites.filter(Photo => Photo.id !== action.payload.id) };
    default:
      return state;
  }
};

const useApplication = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleModal = (similarPhotoID) => {
    dispatch({
      type: ACTIONS.MODAL_TOGGLE,
      payload: similarPhotoID
    });
    console.log('open modal', similarPhotoID);
  };

  const closeModal = () => {
    dispatch({
      type: ACTIONS.MODAL_CLOSE
    });
    console.log('close modal');
  };

  const toggleFavorite = (photoId) => {
    if (state.photoFavourites.find(photo => photo.id === photoId)) {
      dispatch({
        type: ACTIONS.FAVOURITE_UNTOGGLE,
        payload: { id: photoId }
      })
      console.log('Remove from favourites')
    } else {
      dispatch({
        type: ACTIONS.FAVOURITE_TOGGLE,
        payload: { id: photoId }
      })
      console.log('Add to favourites')
    }
  };

  return {
    toggleModal,
    closeModal,
    toggleFavorite,
    ...state,
  };
};

export default useApplication;

// Separation of Concerns
// Our useApplicationData Hook will return an object with four keys representing the following items:

// The state object will contain the entire state of the application.
// The updateToFavPhotoIds action can be used to set the favourite photos.
// The setPhotoSelected action can be used when the user selects a photo.
// The onClosePhotoDetailsModal action can be used to close the modal.