import React from 'react';
import PropTypes from 'prop-types';

import styles from './Selector.module.scss';

const Selector = ({
  selected,
  options,
  onChange,
}) => (
  <select
    className={styles.container}
    value={selected && selected.value}
    onChange={onChange}
  >
    {
      options.map(({ value, display }) =>
        <option value={value}>
          {display}
        </option>
      )
    }
  </select>
);

Selector.propTypes = {
  options: PropTypes.array,
};

Selector.defaultProps = {
  options: [],
};

export default Selector;
