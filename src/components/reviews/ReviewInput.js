import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {

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
    const review = {...this.state, restaurantId: this.props.restaurantId}
    debugger
    this.props.addReview(review)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
