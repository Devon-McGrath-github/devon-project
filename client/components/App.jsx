import React from 'react'

import api from '../api'
import TopLeft from './TopLeft'
import TopRight from './TopRight'
import CenterAbove from './CenterAbove'
import Center from './Center'
import CenterBelow from './CenterBelow'
import BottomLeft from './BottomLeft'
import Bottom from './Bottom'
import BottomRight from './BottomRight'

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

    return (
        <div style={backgroundImg} id='backgroundImage' className='fadein'>
            <TopLeft />
            <TopRight />
            <CenterAbove />
            <Center />
            <CenterBelow />
            <BottomLeft />
            <Bottom />
            <BottomRight />
        </div>
    )
  }
})
