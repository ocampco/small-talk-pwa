import React from 'react';
import PropTypes from 'prop-types';

import styles from './Item.module.scss';

const Item = ({
  context,
  translation,
  pronounciation,
}) => (
  <li className={styles.container}>
    <div className={styles.left}>{context}</div>
    <div className={styles.right}>
      {translation}
      <p className={styles.caption}>
        {pronounciation}
      </p>
    </div>
  </li>
);

Item.propTypes = {
  context: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  pronounciation: PropTypes.string,
};

export default Item;
