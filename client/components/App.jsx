import React from 'react'

import api from '../api'
import CenterContent from './CenterContent'
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
        backgroundRepeat: 'no-repeat',
    }

    console.log('app component rendering')
    return (
        <div style={backgroundImg} id='backgroundImage'>
            <Weather />
            <CenterContent />
            <Todo_component />

            <div className='footer'>
                <h2>artist info</h2>
            </div>
        </div>
    )
  }
})
