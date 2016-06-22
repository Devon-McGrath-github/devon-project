import React from 'react'

import api from '../api'
import Header from './Header'
import Todo_component from './Todo'
import Weather from './Weather'

export default React.createClass({
  render() {
    var backgroundImg = {
        height: '100%',
        backgroundImage: 'url(' + 'https://static.pexels.com/photos/1029/landscape-mountains-nature-clouds.jpg' + ')',
        backgroundColor: 'transparent',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    console.log('app component rendering')
    return (
        <div style={backgroundImg} id='app-container'>

            <Header />
            <Todo_component />
            <Weather />

            <div className='footer'>
                <h2>artist info</h2>
            </div>
        </div>
    )
  }
})
