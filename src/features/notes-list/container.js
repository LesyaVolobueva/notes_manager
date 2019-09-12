import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NotesList from './component';
import mapStateToProps from './selectors';
import { fetchNotes } from '../actions';

class NotesListContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  handleDelete = () => {};

  handleEdit = (id) => {
    this.props.history.push(`notes/${id}`);
  };

  handleAdd = () => {
    this.props.history.push('/notes/new');
  };

  render() {
    return (
      <NotesList
        notes={this.props.notes}
        onAdd={this.handleAdd}
        onEdit={this.handleEdit}
        onDelete={this.handleDelete}
        isLoading={this.props.isLoading}
        error={this.props.error} />
    );
  }
}

const withStore = connect(mapStateToProps, { fetchNotes });

NotesListContainer.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
};

NotesListContainer.defaultProps = {
  error: undefined,
};

export default withStore(NotesListContainer);
