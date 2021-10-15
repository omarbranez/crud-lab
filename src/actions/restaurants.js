export const addRestaurant = text => {
    return {
        type: "ADD_RESTAURANT",
        text
    }
}

export const deleteRestaurant = id => {
    return {
        type: "REMOVE_RESTAURANT",
        id
    }
}