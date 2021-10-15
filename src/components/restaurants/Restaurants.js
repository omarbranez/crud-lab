import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const restaurants = this.props.restaurants.map( restaurant => < Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)
    // debugger
    // console.log({restaurants})
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;