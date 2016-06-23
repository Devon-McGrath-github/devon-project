import React from 'react'

export default React.createClass({
  render() {
    console.log('header component rendering')
    return (
      <div id='header'>
        {/* plan to implement this for each user + good *Morning* will change
        depending on the time */}
        <h1>THE TIME</h1>
        <h2>Good Morning, Devon</h2>
      </div>
    )
  }
})
