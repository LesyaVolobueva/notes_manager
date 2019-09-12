import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { equals } from 'ramda';

import styles from './component.css';

const NoteForm = (props) => {
  const [note, setNote] = useState(props.note);

  const handleChange = (name) => (event) => {
    setNote({ ...note, [name]: event.target.value });
  };

  return (
    <Container maxWidth="sm">
      <h2 className={styles.title}>{props.title}</h2>
      <form className={styles.form}>
        <TextField
          label="Title"
          name="title"
          value={note.title}
          className={styles.field}
          onChange={handleChange('title')}
          variant="outlined"
          margin="normal"
          required />
        <TextField
          label="Content"
          name="content"
          value={note.content}
          className={styles.field}
          onChange={handleChange('content')}
          variant="outlined"
          multiline
          rowsMax={6}
          margin="normal" />
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          onClick={() => props.onSubmit(note)}
          disabled={!note.title || equals(props.note, note)}>
          {props.buttonTitle}
        </Button>
      </form>
    </Container>
  );
};

NoteForm.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

NoteForm.defaultProps = {
  note: {
    title: '',
    content: '',
  },
};

export default NoteForm;
