import React from 'react'

import api from '../api'
import CenterContent from './CenterContent'
import Todo_component from './Todo'
import Weather from './Weather'

export default React.createClass({
  render() {
    let bgimage = 'https://static.pexels.com/photos/1029/landscape-mountains-nature-clouds.jpg'

    let  backgroundImg = {
        height: '100%',
        backgroundImage: 'url(' + bgimage + ')',
        backgroundColor: 'transparent',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    console.log('app component rendering')
    return (
        <div style={backgroundImg} id='backgroundImage' className='fadein'>
            {/* <div className='fadein'> */}
                <img width="200px" src={bgimage}></img>
                <Weather />
                <CenterContent />
                <Todo_component />

                <div className='footer'>
                    <h2>artist info</h2>
                </div>
            {/* </div> */}
        </div>
    )
  }
})
