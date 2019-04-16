import React, { Component } from 'react';

import Selector from './Selector';
import Item, { MessageItem } from './Item';
import Swap from './../shared/icons/swap.svg';
import translations from './../shared/translations';
import locales, { ENGLISH } from './../shared/locales';

import styles from './Translate.module.scss';

class Translate extends Component {
  state = {
    nativeLocale: ENGLISH,
    translationLocale: ENGLISH,
  }

  handleLocaleChange = targetLocale => event => {
    const selectedLocale = locales
      .find(locale => locale.value === event.target.value);

    this.setState({ [targetLocale]: selectedLocale });
  }

  swapLocales = () => this.setState({
    nativeLocale: this.state.translationLocale,
    translationLocale: this.state.nativeLocale,
  });

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
          <button
            type="button"
            onClick={this.swapLocales}
          >
            <img
            className={styles.swap}
            src={Swap}
            alt="Swap languages"
            />
          </button>
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

export default Translate;
