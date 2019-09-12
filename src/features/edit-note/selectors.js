const mapStateToProps = (state) => ({
  note: state.noteToEdit,
  isLoading: state.isLoading,
  error: state.error,
});

export default mapStateToProps;
