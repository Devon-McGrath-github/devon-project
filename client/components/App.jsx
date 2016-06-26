import React from 'react'

import api from '../api'
import CenterContent from './CenterContent'
import Todo_component from './Todo'
import Weather from './Weather'

export default React.createClass({
  render() {
    let bgimage = 'https://drscdn.500px.org/photo/115449731/q%3D80_m%3D2000/c2da49bfa2da078ea2a3d2a9dfa8bff1'

    {/* -----------------------------------------------------------------------

        see how there are a tonne of let objects, they can all be inside a single object if you want
        i.e
        let styles = {
          backgroundImg = {
           .............
          },
          myfont = {
          ..............
          }
        }

      ---------------------------------------------------------------------- */}

    let  backgroundImg = {
        height: '100%',
        backgroundImage: 'url(' + bgimage + ')',
        backgroundColor: 'transparent',
        webkitBackgroundSize: 'cover',  /* webkit based browsers like chrome/safari */
        mozBackgroundSize: 'cover',     /* mozilla */
        oBackgroundSize: 'cover',       /* opera */
        backgroundSize: 'cover',        /* the fall back command, and IE support */
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    let myfont = {
      color: 'white',
      fontFamily: 'verdana',
    }

    let centered = {
      textAlign: 'center',
      display: 'block',
    }

    return (
        <div style={backgroundImg} id='backgroundImage' className='fadein'>
            {/* <div className='fadein'> */}
                <Weather font={myfont} />
                <CenterContent font={myfont} />
                <Todo_component font={myfont} />

                <div className='footer'>
                    <h2 style={myfont}>artist info</h2>
                </div>
            {/* </div> */}
        </div>
    )
  }
})
