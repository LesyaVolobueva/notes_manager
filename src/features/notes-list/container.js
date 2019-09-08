import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';

import mapStateToProps from './selectors';
import { fetchNotes } from '../actions';

class NotesListContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <Container maxWidth="sm">
        {this.props.notes.map((note) => note.title)}
        <Link to="/new"> Add note</Link>
      </Container>
    );
  }
}

const withStore = connect(mapStateToProps, { fetchNotes });

NotesListContainer.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStore(NotesListContainer);
