import React from 'react'

import api from '../api'
import Header from './Header'
import Todo_component from './Todo'

export default React.createClass({
  render() {
    console.log('app component rendering');
    return (
          <div id='app-container'>
            <Header />
            <Todo_component />

            <div id='weather_container'>
                <h2>Weather API</h2>
                <p>it'll go here</p>
            </div>

            <div class='footer'>
                <p>artist info</p>
            </div>
          </div>
      )
    }
})
