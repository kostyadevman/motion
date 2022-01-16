import React from 'react';
import PropTypes from 'prop-types';
import IconsSVG from './icons.svg';

const Icon = ({name, color, width, height, className}) => {
  return (
    <svg className={`icon icon-${name} ${className}`} fill={color} stroke={color} width={width} height={height}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Icon;
