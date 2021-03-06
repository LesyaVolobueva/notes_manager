import * as types from './types';

const notesReducer = (state, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case types.SER_ERROR:
      return {
        ...state,
        notes: [],
        isLoading: false,
        error: action.payload,
      };

    case types.GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        isLoading: false,
        error: null,
      };

    case types.SET_NOTE_TO_EDIT:
      return {
        ...state,
        noteToEdit: action.payload,
        isLoading: false,
        error: null,
      };

    case types.UPDATE_NOTE:
      return {
        ...state,
        noteToEdit: {},
        isLoading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default notesReducer;
