const mapStateToProps = (state) => ({
  notes: state.notes,
  error: state.error,
  isLoading: state.isLoading,
});

export default mapStateToProps;
