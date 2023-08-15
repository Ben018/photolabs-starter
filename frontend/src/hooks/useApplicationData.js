import { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  photosData: [],
  topicsData: [],
  modalToggle: false,
  modalPhotoID: null,
  photoFavourites: [],
  favSelected: false,
};

const ACTIONS = {
  MODAL_TOGGLE: 'modalToggle',
  MODAL_CLOSE: 'modalClose',
  SET_FAVOURITES: 'setFavourite',
  FAVOURITE_TOGGLE: 'favouriteToggle',
  FAVOURITE_UNTOGGLE: 'favouriteUnToggle',
  SET_PHOTO_DATA: 'fetchPhotoData',
  SET_TOPIC_DATA: 'fetchTopicData',
  SET_PHOTO_BY_TOPIC: 'fetchPhotoByTopic',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MODAL_TOGGLE:
      return { ...state, modalToggle: true, modalPhotoID: action.payload };
    case ACTIONS.MODAL_CLOSE:
      return { ...state, modalToggle: false };
    case ACTIONS.FAVOURITE_TOGGLE:
      return { ...state, photoFavourites: [...state.photoFavourites, action.payload] };
    case ACTIONS.FAVOURITE_UNTOGGLE:
      return { ...state, photoFavourites: state.photoFavourites.filter(photo => photo.id !== action.payload.id), };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photosData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicsData: action.payload };
    case ACTIONS.SET_PHOTO_BY_TOPIC:
      return { ...state, photosData: action.payload };
    default:
      return state;
  }
};

const useApplication = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Toggle modal open
  const toggleModal = similarPhotoID => {
    dispatch({
      type: ACTIONS.MODAL_TOGGLE,
      payload: similarPhotoID,
    });
  };

  // Toggle modal close
  const closeModal = () => {
    dispatch({
      type: ACTIONS.MODAL_CLOSE,
    });
  };

  // Toggle favourite
  const toggleFavorite = photoId => {
    if (state.photoFavourites.find(photo => photo.id === photoId)) {
      dispatch({
        type: ACTIONS.FAVOURITE_UNTOGGLE,
        payload: { id: photoId },
      });
    } else {
      dispatch({
        type: ACTIONS.FAVOURITE_TOGGLE,
        payload: { id: photoId },
      });
    }
  };

  // Fetch photos from API based on topic
  const fetchPhotosByTopic = topicId => {
    axios.get(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then(response => {
        dispatch({
          type: ACTIONS.SET_PHOTO_BY_TOPIC,
          payload: response.data,
        });
      });
  };

  // fetch photos from API
  useEffect(() => {
    axios.get('http://localhost:8001/api/photos')
      .then((response) => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: response.data,
        });
      });
  }, []);

  // fetch topics from API
  useEffect(() => {
    axios.get('http://localhost:8001/api/topics')
      .then((response) => {
        dispatch({
          type: ACTIONS.SET_TOPIC_DATA,
          payload: response.data,
        });
      });
  }, []);

  return {
    toggleModal,
    closeModal,
    toggleFavorite,
    fetchPhotosByTopic,
    ...state,
  };
};

export default useApplication;