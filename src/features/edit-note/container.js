import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  createNote,
  setError,
  getNoteById,
  updateNoteRequest,
} from 'features/actions';

import EditNote from './component';
import mapStateToProps from './selectors';

class AddNoteContainer extends Component {
  componentDidMount() {
    try {
      this.props.getNoteById(this.props.match.params.id);
    } catch (error) {
      console.error(error);
    }
  }

  editNote = async (note) => {
    try {
      const updatedNote = {
        ...note,
        id: this.props.match.params.id,
      };

      await this.props.updateNote(updatedNote);

      this.props.history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <EditNote
        note={this.props.note}
        editNote={this.editNote}
        isLoading={this.props.isLoading}
        error={this.props.error} />
    );
  }
}

AddNoteContainer.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  note: PropTypes.object.isRequired,
  getNoteById: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
};

AddNoteContainer.defaultProps = {
  error: undefined,
};

const withStore = connect(mapStateToProps, {
  createNote,
  setError,
  getNoteById,
  updateNote: updateNoteRequest,
});

export default withStore(AddNoteContainer);
