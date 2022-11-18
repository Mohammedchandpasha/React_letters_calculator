// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="app-container">
        <div className="home-container">
          <div className="cal-container">
            <h1>Calculate the Letters you enter</h1>
            <label htmlFor="My input">Enter the phrase</label>
            <br />
            <input
              type="text"
              value={searchInput}
              placeholder="Enter the phrase"
              onChange={this.onChangeSearchInput}
              className="search"
              id="My input"
            />

            <div className="count-container">
              <p>No.of Letters: {searchInput.length}</p>
            </div>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
