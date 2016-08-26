var pizzasOrdered = [];
// New Pizza Constructor
function PizzaMaker(pizzaType, size, style, selectedToppings){
    this.pizzaType = pizzaType;
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
function addPizza(pizza){
    pizzasOrdered.push(pizza);
}

// Total Cost Calculator
function totalCostCalculator(){
    var charges = 0;
    for (var i = 0; i < pizzasOrdered.length; i++) {
        if(pizzasOrdered[i].pSize === "Small"){charges += 10}
        else if(pizzasOrdered[i].pSize === "Medium"){charges += 15}
        else if(pizzasOrdered[i].pSize === "Large"){charges += 20}
        charges += pizzasOrdered[i].toppingsCharge(i);
    }
    return charges;
}
// User Logic
$(document).ready(function(){
    var numOfToppingsAvailable = 28;
    $('#custom-pizza').submit(function(event){
        var selectedToppings = [];
        event.preventDefault();
        // Get Custom Pizza Info
        var pizzaType = 'Custom Pizza';
        var size =  $("input:radio[name=size]:checked").val();
        var style =  $("input:radio[name=type]:checked").val();
        for (var i = 0; i < numOfToppingsAvailable; i++) {
            if(document.getElementById(i).checked){
                selectedToppings.push($('#' + i).val());
            }
        }
        // Add Pizza To Order
        var pizza = new PizzaMaker(pizzaType, size, style, selectedToppings);
        addPizza(pizza);
        $('#another-pizza').show();
        $('.checkout-button').show();

    });
    // Specialty Pizzas
    $('.specialty-pizza').submit(function(event){
        event.preventDefault();
        var clicked = event.target.id;
        if(clicked === 'miss-marple'){
            var style = 'Deep-Dish';
            var pizzaType = 'Miss Marple\'s Favorite';
            var selectedToppings = ['Anchovies', 'Pickles', 'Smoked Oysters','Pneapple', 'Broccoli'];
        }else if(clicked === 'bbq-chick'){
            var style = 'Hand Tossed';
            var pizzaType = 'Miss Marple\'s Favorite';
            var selectedToppings = ['Bacon', 'Onion', 'Chicken'];
        }else if(clicked === 'blt'){
            var style = 'Hand Tossed Round';
            var pizzaType = 'BBQ Chicken';
            var selectedToppings = ['Bacon', 'Lettuce', 'Tomatoe'];
        }else if(clicked === 'meat-lovers'){
            var style = 'Deep-Dish';
            var pizzaType = 'Meat Lovers';
            var selectedToppings = ['Pepperoni', 'Bacon', 'Ground Beef', 'Italian Sausage', 'Prosciutto', 'Spicy Salami<span class="hot">&#127798;</span>'];
        }else if(clicked === 'hawaiian'){
            var style = 'Thin Crust';
            var pizzaType = 'Hawaiian';
            var selectedToppings = ['Bacon', 'Pineapple', 'Ham'];
        }else{
            var style = 'Thin Crust';
            var pizzaType = 'Veggi-Deluxe';
            var selectedToppings = ['Artichoke', 'Spinach', 'Tomatoe', 'Garlic Cloves', 'Wild Mushrooms'];
        }
        var size =  $("input:radio[name=size]:checked").val();
        var pizza = new PizzaMaker(pizzaType, size, style, selectedToppings)
        addPizza(pizza);
        $('#another-pizza').show();
        $('.checkout-button').show();
        console.log(pizzasOrdered);
    });

    // Calculate Total
    $('.btn-success').click(function(){
        var total = totalCostCalculator();
        $('#create-order').hide();
        $('#checkout').show();
        for (var i = 0; i < pizzasOrdered.length; i++) {
            if(i > 0){$('#order-detail').append('<h6>and</h6>');}
            $('#order-detail').append('<h4><strong>A ' + pizzasOrdered[i].pSize + ' ' + pizzasOrdered[i].pStyle + ' ' + pizzasOrdered[i].pizzaType + ':</strong></h4>');
            if(pizzasOrdered[i].toppings.length > 0){
                $('#order-detail').append('<p><em>topped with</em> <br> <small>' + pizzasOrdered[i].toppings + '</small></p>')
            };
        };
        $('#order-total').append('<h4>Your total comes to $' + total + '</h4>');

    });
});
