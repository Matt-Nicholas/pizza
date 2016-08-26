var pizzasOrdered = [];
// New Pizza Constructor
function PizzaMaker(size, style, selectedToppings){
    this.pSize = size;
    this.pStyle = style;
    this.toppings = selectedToppings;
    // this.flavoredCrust = flavoredCrust; Coming Soon
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
// User Logic
$(document).ready(function(){
    var numOfToppingsAvailable = 28;
    $('#custom-pizza').submit(function(event){
        var selectedToppings = [];
        event.preventDefault();
        // Get Custom Pizza Info
        var size =  $("input:radio[name=size]:checked").val();
        var type =  $("input:radio[name=type]:checked").val();
        for (var i = 0; i < numOfToppingsAvailable; i++) {
            if(document.getElementById(i).checked){
                selectedToppings.push($('#' + i).val());
            }
        }
        // Add Pizza To Order
        var pizza = new PizzaMaker(size, type, selectedToppings);
        addPizza(pizza);
        $('#another-pizza').show();
        $('.checkout-button').show();

    });
    // Specialty Pizzas
    $('.specialty-pizza').submit(function(event){
        event.preventDefault();
        var clicked = event.target.id;
        if(clicked === 'miss-marple'){
            var selectedToppings = ['Anchovies', 'Pickles', 'Smoked Oysters','Pneapple', 'Broccoli'];
        }else if(clicked === 'bbq-chick'){
            var selectedToppings = ['Bacon', 'Onion', 'Chicken'];
        }else if(clicked === 'blt'){
            var selectedToppings = ['Bacon', 'Lettuce', 'Tomatoe'];
        }else if(clicked === 'meat-lovers'){
            var selectedToppings = ['Pepperoni', 'Bacon', 'Ground Beef', 'Italian Sausage', 'Prosciutto', 'Spicy Salami'];
        }else if(clicked === 'hawaiian'){
            var selectedToppings = ['Bacon', 'Pineapple', 'Ham'];
        }else{
            var selectedToppings = ['Artichoke', 'Spinach', 'Tomatoe', 'Garlic Cloves', 'Wild Mushrooms'];
        }
        var size =  $("input:radio[name=size]:checked").val();
        var type =  $("input:radio[name=type]:checked").val();
        var pizza = new PizzaMaker(size, type, selectedToppings)
        addPizza(pizza);
        $('#another-pizza').show();
        $('.checkout-button').show();

        var total = totalCostCalculator();
        // $('#create-order').hide();
        // $('#checkout').show();
        console.log(total);
        // // console.log(pizzasOrdered);
    });



    // Calculate Total
    $('.btn-success').click(function(){
        var total = totalCostCalculator();
        // $('#create-order').hide();
        // $('#checkout').show();
        console.log(total);
    });
});
