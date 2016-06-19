import React from 'react'

import api from '../api'
import Header from './Header'
import Scrollbar from './Scrollbar'

export default React.createClass({
  render() {
    console.log('app component rendering');
    return (
        <div>
          <img id='image' src={"https://drscdn.500px.org/photo/119711361/m%3D2048/ee95ce594ec9561c5e54ebd30ab7926d"}>
          </img>

          <Header />
        </div>
      )
    }

})
