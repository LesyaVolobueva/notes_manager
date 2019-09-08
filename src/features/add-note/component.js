import React from 'react';
import PropTypes from 'prop-types';

import Form from 'features/note-form';

const AddNote = (props) => (
  <Form
    title="Create note"
    buttonTitle="Save"
    onSubmit={props.createNote} />
);

AddNote.propTypes = {
  createNote: PropTypes.func.isRequired,
};

export default AddNote;
