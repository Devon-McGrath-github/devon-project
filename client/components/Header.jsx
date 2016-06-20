import React from 'react'

export default React.createClass({
  render() {
    console.log('header component rendering')
    return (
      <div id='header'>
        <h1>Hello</h1>

        <div id='todo_container'>
            <h2>To Do List:</h2>
            <table>
                <tr>
                    <th>placeholder</th>
                </tr>
                <tr>
                    <td>heres an item</td>
                </tr>
            </table>
        </div>

        <div id='weather_container'>
            <h2>Weather API</h2>
            <p>it'll go here</p>
        </div>

        <div class='footer'>
            <p>artist info</p>
        </div>
      </div>
    )
  }
})
