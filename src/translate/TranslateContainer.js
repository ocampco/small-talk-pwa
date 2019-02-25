import React, { Component } from 'react';

import Selector from './Selector';
import Item from './Item';
import translations from './../shared/translations';
import locales, { ENGLISH } from './../shared/locales';

import styles from './TranslateContainer.module.scss';

class TranslateContainer extends Component {
  state = {
    // TODO: make dynamic
    nativeLocale: ENGLISH,
    selectedLocale: null,
  }

  handleLocaleChange = target => event => {
    const locale = locales.find(locale =>
      locale.value === event.target.value
    );

    this.setState({
      [target]: locale,
    });
  }

  translateLocales = (native, selected) =>
    selected
      ? translations[native.value][selected.value]
      : translations[native.value]

  render() {
    const {
      nativeLocale,
      selectedLocale,
    } = this.state;
    const sameLocale = nativeLocale !== selectedLocale;
    const translated = selectedLocale && sameLocale
      ? this.translateLocales(nativeLocale, selectedLocale)
      : null;

    return (
      <div className={styles.container}>
        <div className={styles.selectors}>
          <Selector
            selected={nativeLocale}
            options={locales}
            onChange={(e) => this.handleLocaleChange('nativeLocale')(e)}
          />
          <Selector
            selected={selectedLocale}
            options={locales}
            onChange={(e) => this.handleLocaleChange('selectedLocale')(e)}
          />
        </div>
        {
          translated &&
          translated.map(({ context, translation, pronounciation }) =>
            <Item
              context={context}
              translation={translation}
              pronounciation={pronounciation}
            />
          )
        }
      </div>
    );
  }
}

export default TranslateContainer;
