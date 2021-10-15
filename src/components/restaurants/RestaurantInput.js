import React, { Component } from 'react';
// import cuid from 'cuid'
// import { addRestaurant } from '../../actions/restaurants'
class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    // const restaurant = {...this.state, id: cuid()}
    // const restaurant = {...this.state}

    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
