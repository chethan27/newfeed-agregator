import React, { Component } from 'react';

import Newspage from './containers/newspage';


class App extends Component {

  render() {
    document.body.style = 'background: #ECEFF1;';
    return (
      <div>
          <Newspage  />
      </div>
    );
  }
}

export default App;
