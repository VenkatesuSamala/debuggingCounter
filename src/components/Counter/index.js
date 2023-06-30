import Component from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <button className="button" type="button">
          Increase
        </button>
        <button className="button" type="button">
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
