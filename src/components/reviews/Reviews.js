import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    // const reviews = this.props
    const { reviews, restaurantId, deleteReview } = this.props;
    // debugger
    // console.log({reviews})
    const restReviews = reviews.filter(review => review.restaurantId === restaurantId)
    const reviewList = restReviews.map( (review, index) => < Review key={index} review={review}  deleteReview={deleteReview}/>)
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;