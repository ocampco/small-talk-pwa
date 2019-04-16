import React, { Component } from 'react';

import Selector from './Selector';
import Item, { MessageItem } from './Item';
import translations from './../shared/translations';
import locales, { ENGLISH } from './../shared/locales';

import styles from './TranslateContainer.module.scss';

class TranslateContainer extends Component {
  state = {
    nativeLocale: ENGLISH,
    translationLocale: ENGLISH,
  }

  handleLocaleChange = targetLocale => event => {
    const selectedLocale = locales
      .find(locale => locale.value === event.target.value);

    this.setState({ [targetLocale]: selectedLocale });
  }

  translateLocales = (primary, secondary) =>
    translations[primary.value][secondary.value]

  render() {
    const {
      nativeLocale,
      translationLocale,
    } = this.state;
    const isSameLocale = nativeLocale === translationLocale;
    const translations = !isSameLocale
      ? this.translateLocales(nativeLocale, translationLocale)
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
            selected={translationLocale}
            options={locales}
            onChange={(e) => this.handleLocaleChange('translationLocale')(e)}
          />
        </div>
        { translations
          ? translations.map(({ context, translation, pronounciation }) =>
            <Item
              context={context}
              translation={translation}
              pronounciation={pronounciation}
            />
          )
          : <MessageItem>Select a translation</MessageItem>
        }
      </div>
    );
  }
}

export default TranslateContainer;
