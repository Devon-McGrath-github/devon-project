import React from 'react'

export default React.createClass({
  render() {
    console.log('header component rendering')
    return (
      <div id='header'>
        {/* plan to implement this for each user + good *Morning* will change
        depending on the time */}
        <div id='clock'>
          <h1>THE TIME</h1>
        </div>
        <div id='greeting'>
          <h2>Good Morning, Devon</h2>
        </div>
    </div>
    )
  }
})
