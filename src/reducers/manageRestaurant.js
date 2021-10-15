import cuid from 'cuid';

export default function manageRestaurants(state = { restaurants: [], reviews: []}, action) {

    switch(action.type){
        case "ADD_RESTAURANT":
            const restaurant = {text: action.text, id: cuid()}
            // return {...state,
            //     restaurants: [...state.restaurants, action.restaurant]
            // }
            return {...state,
                restaurants: [...state.restaurants, restaurant]
            }
        case "REMOVE_RESTAURANT":
            const restaurants = state.restaurants.filter(rest => rest.id !== action.id)
            return {...state, 
                restaurants}
        case "ADD_REVIEW":
            debugger
            const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuid()}
            return {...state,
            reviews: [...state.reviews, review]}
        case "REMOVE_REVIEW":
            const reviews = state.reviews.filter(review => review.id !== action.restaurantId)
            return {...state, reviews}
        default:
            return state
    }

}
