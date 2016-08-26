var pizzasOrdered = [];
// New Pizza Constructor
function PizzaMaker(size, style, selectedToppings, flavoredCrust){
    this.pSize = size;
    this.pStyle = style;
    this.toppings = selectedToppings;
    this.flavoredCrust = flavoredCrust;
}
// Topping Cost Calculator
PizzaMaker.prototype.toppingsCharge = function(j){
    var toppingsCharge = 0;
    for (var i = 0; i < pizzasOrdered[j].toppings.length; i++) {
        toppingsCharge += 0.5;
    }
    if(pizzasOrdered[j].pSize === 'md'){
        toppingsCharge *= 1.5;
    }else if (pizzasOrdered[j].pSize === 'lg') {
        toppingsCharge *= 2;
    }
    return toppingsCharge;
}

function addToppings(n){
    for (var i = 0; i < selectedToppings.length; i++) {
        // pizzasOrdered[n].toppings.push(selectedToppings[i]);

    }
}
// function addPizza(){
//     var pizza = new PizzaMaker('lg', 'deep', 'garlic');
//     return pizza;
// }
function addPizza(pizza){
    pizzasOrdered.push(pizza);
}

// Total Cost Calculator
function totalCostCalculator(){
    var charges = 0;
    for (var i = 0; i < pizzasOrdered.length; i++) {
        if(pizzasOrdered[i].pSize === "sm"){charges += 10}
        else if(pizzasOrdered[i].pSize === "md"){charges += 15}
        else if(pizzasOrdered[i].pSize === "lg"){charges += 20}

        charges += pizzasOrdered[i].toppingsCharge(i);
    }
    return charges;
}
function specialtyPizza(pizza, size, type, flavoredCrust){
    var pizza = new PizzaMaker(size, type, flavoredCrust);
    if(pizza === 'hawaiian'){
        selectedToppings = ['cheese', 'ham', 'pineapple', 'bacon'];
    }
    var pos = pizzasOrdered.length;
    pizzasOrdered.push(pizza);
    addToppings(pos);
    addPizza();
}
$(document).ready(function(){
    var numOfToppingsAvailable = 28;
    $('#custom-pizza').submit(function(event){
        var selectedToppings = [];

        event.preventDefault();
        // Get Pizza Info
        var size =  $("input:radio[name=size]:checked").val();
        var type =  $("input:radio[name=type]:checked").val();
        for (var i = 0; i < numOfToppingsAvailable; i++) {
            if(document.getElementById(i).checked){
                selectedToppings.push($('#' + i).val());
            }
        }
        // Add Pizza To Order
        var pizza = new PizzaMaker(size, type, selectedToppings, 'plain');
        addPizza(pizza);
        console.log(pizzasOrdered);
        $('#another-pizza').show();
    });
});
