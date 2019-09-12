import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

import Form from 'features/note-form';
import async from 'core/async';

const EditNote = (props) => (
  props.isLoading ? (
    <CircularProgress />
  ) : (
    <Form
      title="Edit note"
      buttonTitle="Update"
      note={props.note}
      onSubmit={props.editNote} />
  )
);

EditNote.propTypes = {
  note: PropTypes.object.isRequired,
  editNote: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const withAsync = async();

export default withAsync(EditNote);
