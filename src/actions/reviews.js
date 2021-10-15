export const addReview = review => {
    debugger
    return {
        type: "ADD_REVIEW",
        review    
    }
}

export const deleteReview = restaurantId => {
    return {
        type: "REMOVE_REVIEW",
        restaurantId
    }
}