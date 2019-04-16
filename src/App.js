import React, { Component } from 'react';

import Translate from './translate/Translate';
import Footer from './shared/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Translate />
        <Footer />
      </div>
    );
  }
}

export default App;
