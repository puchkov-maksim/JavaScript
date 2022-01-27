const cart = [
    ['Iphone', 79990], 
    ['AppleWatch', 35990], 
    ['Airpods', 15990],
];
const total = getTotalPrice(cart);
console.log(total);
function getTotalPrice(cart) {
    var result = 0;
    for (var item of cart) {
        result += item[1];
    }
    return result;
}
function getTotalPriceUsingReduce(cart) {
    return cart.reduce(function(accamulator, currentItem) {
        return accamulator + currentItem[1];
    }, 0);
}