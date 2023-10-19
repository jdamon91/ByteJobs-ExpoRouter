import React from 'react';
import PropTypes from 'prop-types';
import { MotiView } from 'moti';

export const FadeInView = ({ children }) => (
  <MotiView
    from={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ type: 'timing', duration: 2500, delay: 3250 }}
  >
    {children}
  </MotiView>
);

FadeInView.propTypes = {
  children: PropTypes.node.isRequired,
};
