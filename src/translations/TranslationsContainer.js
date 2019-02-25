import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import translations from './../shared/translations';
import { ENGLISH, SPANISH } from './../shared/locales';

class TranslationsContainer extends Component {
  state = {
    // TODO: make dynamic
    selectedLocale: SPANISH,
  }

  translate = (native, selected) => translations[native][selected];

  render() {
    const { nativeLocale } = this.props;
    const { selectedLocale } = this.state;
    const translated = this.translate(nativeLocale, selectedLocale);

    return (
      <div>
        {
          translated.map(({ context, translation }) =>
            <Item
              context={context}
              translation={translation}
            />
          )
        }
      </div>
    );
  }
}

// TODO: Use context
TranslationsContainer.propTypes = {
  nativeLocale: PropTypes.string,
};

TranslationsContainer.defaultProps = {
  nativeLocale: ENGLISH,
};

export default TranslationsContainer;
