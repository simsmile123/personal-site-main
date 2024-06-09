import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container">
    <img src={data.image} alt={data.title} />
    <h3>
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        {data.title}
      </a>
    </h3>
    <p>{data.description}</p>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
