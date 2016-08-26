function PizzaMaker(size, style, flavoredCrust){
    this.pSize = size;
    this.pStyle = style;
    this.toppings = ['pep', 'sausaage', 'onion', 'anchovie'];
    this.flavoredCrust = flavoredCrust;
}



PizzaMaker.prototype.toppingsCharge = function(){
    var toppingsCharge = 0;
    for (var i = 0; i < pizza.toppings.length; i++) {
        toppingsCharge += 0.5;
    }
    if(pizza.pSize === 'md'){
        toppingsCharge *= 1.5;
    }else if (pizza.pSize === 'lg') {
        toppingsCharge *= 2;
    }
    return toppingsCharge;
}
var selectedToppings = ['sausage', 'pepperoni', 'onion', 'greenPepper'];
var toppins = [];

function addToppings(){
for (var i = 0; i < selectedToppings.length; i++) {
    pizza.toppings.push(selectedToppings[i]);
}
}
