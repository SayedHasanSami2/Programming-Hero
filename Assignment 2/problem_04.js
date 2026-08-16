function topRatedRestaurant(restaurants) {
    // Write your code here
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }
    let maxRating = restaurants[0].rating;
    let desiredRestaurant = restaurants[0];
    for (let i = 0; i < restaurants.length; i++) {

        if (restaurants[i].rating > maxRating) {
            maxRating = restaurants[i].rating;
            desiredRestaurant = restaurants[i];
        }
    }
    return desiredRestaurant.name.toUpperCase();
}
