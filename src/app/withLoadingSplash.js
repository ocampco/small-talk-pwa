import React, { Component } from 'react';

import Translate from './../shared/icons/translate.svg';

import styles from './withLoadingSplash.module.scss';

const LoadingSplash = () => (
  <div className={styles.container}>
    <img
      className={styles.icon}
      src={Translate}
      alt="Logo"
    />
    <h1 className={styles.heading}>
      small talk
    </h1>
    <p className={styles.caption}>the tiny phrasebook for travellers</p>
  </div>
);

const withLoadingSplash = (WrappedComponent) => {
  return class extends Component {
    state = { isLoading: true }
    toggleIsLoading = () => { this.setState({ isLoading: !this.state.isLoading }); }
    componentDidMount() { setTimeout(this.toggleIsLoading, 2000); }

    render() {
      return (
        this.state.isLoading
          ? <LoadingSplash />
          : <WrappedComponent {...this.props} />
      );
    }
  };
}


export default withLoadingSplash;
