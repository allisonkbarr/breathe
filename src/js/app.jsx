
import '../sass/main.scss'

import React from 'react'

var Header = React.createClass({

  render() {
    return (

      <header>
        <h1>My Mantra Maker</h1>
        <h2>Customizable Relaxation Animations</h2>
      </header>
    )
  }
})


var Animation = React.createClass({

  render() {
    return (

      <div id="container">
        <div id="animation">
        </div>
        <div id="mantra">
          <p id="mantra1">Breathe in peace</p>
          <p id="mantra2">Breathe out love</p>
        </div>
      </div>
    )
  }
})

var Form = React.createClass({

  render() {
    return (

      <div id="form">
        <h2>Customize it!</h2>
        <form>
          <div>
            <label>Your mantra</label>
            <input type="text" name="mantra-line1"></input>
            <input type="text" name="mantra-line2"></input>
          </div>
          <div>
            <label htmlFor="color1">Color #1</label>
            <select name="color1">
              <option value="red">red</option>
              <option value="orange">orange</option>
              <option value="yellow">yellow</option>
              <option value="green">green</option>
              <option value="blue">blue</option>
              <option value="purple">purple</option>
            </select>
          </div>
          <div>
            <label htmlFor="color2">Color #2</label>
            <select name="color2">
              <option value="red">red</option>
              <option value="orange">orange</option>
              <option value="yellow">yellow</option>
              <option value="green">green</option>
              <option value="blue">blue</option>
              <option value="purple">purple</option>
            </select>
          </div>
          <div>
            <button>Make my mantra!</button>
          </div>
        </form>
      </div>
    )
  }
})

var Body = React.createClass({

  render() {
    return (
      <div>
        <Animation />
        <Form />
      </div>
    )
  }
})


var App = React.createClass({

  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    )
  }
})


function render(state) {
  console.log(state)
  React.render(<App />, document.getElementById('app'))
}

render({})
