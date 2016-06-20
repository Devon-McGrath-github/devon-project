import React from 'react'

export default React.createClass({
  render() {
    console.log('todo component rendering')
    return (
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
    )
  }
})
