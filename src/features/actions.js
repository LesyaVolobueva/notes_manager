import axios from 'axios';

import * as types from './types';

const setLoading = () => ({
  type: types.SET_LOADING,
});

export const setError = (error) => ({
  type: types.SER_ERROR,
  payload: error,
});

const setNotes = (notes) => ({
  type: types.GET_NOTES,
  payload: notes,
});

export const fetchNotes = () => (dispatch) => {
  dispatch(setLoading());

  return axios.get('notes')
    .then((response) => dispatch(setNotes(response.data.notes)))
    .catch((error) => dispatch(setError(error)));
};

export const createNote = (note) => (dispatch) => {
  dispatch(setLoading());

  return axios.post('notes', note);
};

const setNoteToEdit = (note) => ({
  type: types.SET_NOTE_TO_EDIT,
  payload: note,
});

export const getNoteById = (id) => (dispatch) => {
  dispatch(setLoading());

  return axios.get(`notes/${id}`)
    .then((response) => dispatch(setNoteToEdit(response.data)))
    .catch((error) => dispatch(setError(error)));
};

const updateNote = () => ({
  type: types.UPDATE_NOTE,
});

export const updateNoteRequest = (note) => (dispatch) => {
  dispatch(setLoading());

  return axios.patch(`notes/${note.id}`, note)
    .then(() => dispatch(updateNote()))
    .catch((error) => dispatch(setError(error)));
};
