import React from 'react'

import api from '../api'
import Header from './Header'
import Todo_component from './Todo'
import Weather from './Weather'

export default React.createClass({
  render() {
    console.log('app component rendering');
    return (
          <div id='app-container'>
            <Header />
            <Todo_component />
            <Weather />

            <div class='footer'>
                <p>artist info</p>
            </div>
          </div>
      )
    }
})
