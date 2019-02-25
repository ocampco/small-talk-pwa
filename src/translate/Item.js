import React from 'react';
import PropTypes from 'prop-types';

import styles from './Item.module.scss';

const Item = ({
  context,
  translation,
}) => (
  <li className={styles.container}>
    <p>{context}</p>
    <p>{translation}</p>
  </li>
);

Item.propTypes = {
  context: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
};

export default Item;
