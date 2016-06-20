import React from 'react'

import api from '../api'
import Header from './Header'

export default React.createClass({
  render() {
    console.log('app component rendering');
    return (
          <div id='app-container'>
            <Header />
          </div>
      )
    }

})
