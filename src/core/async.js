import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

import ErrorNotification from 'shared/error-notification';

const loadingStyles = {
  position: 'fixed',
  top: '49%',
  left: '49%',
};

const async = () => (WrappedComponent) => {
  const Async = (props) => {
    if (props.isLoading) {
      return <CircularProgress style={loadingStyles} />;
    } else if (props.error) {
      return <ErrorNotification />;
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  Async.propTypes = {
    error: PropTypes.object,
    isLoading: PropTypes.bool.isRequired,
  };

  Async.defaultProps = {
    error: {},
  };

  return memo(Async);
};

export default async;
