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
};

export const ACTIONS = {
  MODAL_TOGGLE: 'modalToggle',
  SET_FAVOURITES: 'setFavourite',
  FAVOURITE_TOGGLE: 'favouriteToggle',
}

const ClickHandler = () => {
  setSelected(selected ? false : true)

  if (selected) {
    setFavourite(prev => prev.filter(photo => photo.id !== props.id));
  } else {
    setFavourite(prev => [...prev, { id: props.id }]);
  }
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MODAL_TOGGLE:
      return { ...state, modalToggle: action.payload };
    case ACTIONS.SET_FAVOURITES:
      return { ...state, photoFavourites: action.payload };
    case ACTIONS.FAVOURITE_TOGGLE:
      const { id } = action.payload;
      if (photoFavourites[id]) {
        return {
          ...state, photoFavourites: { ...state.photoFavourites, [id]: !state.photoFavourites[id] }
        };
      };
      return {
        ...state, photoFavourites: { ...state.photoFavourites, [id]: true }
      };

    default:
      return state;
  }
};

const useApplication = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL, payload: false });
    console.log('close modal');
    console.log(state.modal);
  };

  const favPhotoIds = (id) => {
    dispatch({ type: ACTIONS.FAVOURITE_TOGGLE, payload: { id } });
  };

  return {
    ...state,
    openModal,
    closeModal,
    favPhotoIds,
  };
};

export default useApplication;

// Separation of Concerns
// Our useApplicationData Hook will return an object with four keys representing the following items:

// The state object will contain the entire state of the application.
// The updateToFavPhotoIds action can be used to set the favourite photos.
// The setPhotoSelected action can be used when the user selects a photo.
// The onClosePhotoDetailsModal action can be used to close the modal.