import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { addReview, deleteReview } from '../actions/reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} restaurantId={this.props.restaurant.id}/>
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => {
  return {reviews}
}


export default connect(mapStateToProps, { addReview, deleteReview })(ReviewsContainer);
