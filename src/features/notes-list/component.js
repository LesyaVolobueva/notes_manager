import React from 'react';
import PropTypes from 'prop-types';
import { Container, Fab, makeStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import Note from 'features/note';
import async from 'core/async';

const useStyles = makeStyles(() => ({
  addIcon: {
    position: 'fixed',
    bottom: '5px',
    right: '18px',
  },
}));

const NotesList = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      {
        props.notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onEdit={props.onEdit}
            onDelete={props.onDelete} />
        ))
      }
      <Fab color="primary" className={classes.addIcon} onClick={props.onAdd}>
        <Add />
      </Fab>
    </Container>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

const withAsync = async();

export default withAsync(NotesList);
