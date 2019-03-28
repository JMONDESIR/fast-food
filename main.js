const restaurant = {
        name: "Bob's Burgers",
        placeOrder: function (meal) {
                return meal
        }
}

const chickenComboMeal = {
        sandwhich: "Classic grilled Chicken",
        fries: true,
        drink: "Coke"
}

const BBQBurger = {
        sandwhich: "BBQ Burger",
        fries: false,
        drink: "Pepsi"
}

// Place an order
console.log(restaurant.placeOrder(chickenComboMeal))
console.log(restaurant.placeOrder(BBQBurger))

    // Invoke the function to return the list of all orders

    // Output all orders to the console using console.table()