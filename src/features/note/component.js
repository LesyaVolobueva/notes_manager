import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardContent, IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

import styles from './component.css';

const Note = (props) => (
  <Card key={props.note.id} className={styles.root}>
    <CardContent>
      <h3>{props.note.title}</h3>
      <div>{props.note.content}</div>
    </CardContent>
    <CardActions className={styles.actions} disableSpacing>
      <IconButton onClick={() => props.onEdit(props.note.id)}>
        <Edit />
      </IconButton>
      <IconButton onClick={() => props.onDelete(props.note.id)}>
        <Delete />
      </IconButton>
    </CardActions>
  </Card>
);

Note.propTypes = {
  note: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Note;
