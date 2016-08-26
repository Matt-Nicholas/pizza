function PizzaMaker(size, style, toppings, flavoredCrust){
    this.pSize = size;
    this.pStyle = style;
    this.toppings = [];
    this.flavoredCrust = flavoredCrust;
}
// Topping Cost Calculator
PizzaMaker.prototype.toppingsCharge = function(j){
    var toppingsCharge = 0;
    for (var i = 0; i < pizza.toppings.length; i++) {
        toppingsCharge += 0.5;
    }
    if(pizzasOrdered[j].pSize === 'md'){
        toppingsCharge *= 1.5;
    }else if (pizzasOrdered[j].pSize === 'lg') {
        toppingsCharge *= 2;
    }
    return toppingsCharge;
}

var selectedToppings = ['sausage', 'pepperoni', 'onion', 'greenPepper'];
function addToppings(){
    for (var i = 0; i < selectedToppings.length; i++) {
        pizza.toppings.push(selectedToppings[i]);
    }
}
var pizzasOrdered = [];
// function addPizza(){
//     var pizza = new PizzaMaker('lg', 'deep', 'garlic');
//     return pizza;
// }
function addPizzas(pizza){
    pizzasOrdered.push(pizza);
}

// Total Cost Calculator
function totalCostCalculator(){
    var charges = 0;
    for (var i = 0; i < pizzasOrdered.length; i++) {
        charges += 10;
        if(pizzasOrdered[i].pSize === "md"){charges += 5}
        else if(pizzasOrdered[i].pSize === "lg"){charges += 10}
        charges += pizzasOrdered[i].toppingsCharge(i);
    }
    return charges;
}

var hawaiian
