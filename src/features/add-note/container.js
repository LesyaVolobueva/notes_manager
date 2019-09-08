import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createNote, setError } from 'features/actions';

import AddNote from './component';

class AddNoteContainer extends Component {
  createNote = async (note) => {
    try {
      await this.props.createNote(note);

      this.props.history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <AddNote createNote={this.createNote} />
    );
  }
}

AddNoteContainer.propTypes = {
  history: PropTypes.object.isRequired,
  createNote: PropTypes.func.isRequired,
};

const withStore = connect(null, { createNote, setError });

export default withStore(AddNoteContainer);
