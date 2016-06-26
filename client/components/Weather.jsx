import React from 'react'

export default React.createClass({
  render() {
    console.log('weather component rendering')
    return (
        <div id='weather_container'>
            <h2 style={this.props.font} className='weather_heading'>Weather API</h2>
            <p style={this.props.font}>it'll go here</p>
        </div>
    )
  }
})
