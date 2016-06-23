import React from 'react'

export default React.createClass({
  render() {
    console.log('todo component rendering')
    return (
        <div id='todo_container'>
            <h2>To Do List:</h2>
            <ul>
                <li>placeholder</li>
                <li>heres an item day</li>
            </ul>
        </div>
    )
  }
})
