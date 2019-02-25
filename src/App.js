import React, { Component } from 'react';

import TranslateContainer from './translate/TranslateContainer';
import Footer from './shared/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <TranslateContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
