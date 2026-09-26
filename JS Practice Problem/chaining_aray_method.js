let cart = [
    {  name: "pen", price: 100, qty:1  },
    { name: "pencil", price: 50, qty:2},
    { name: "notebook", price: 200, qty:1}

]

let getExpensiveItemTotal = (cart, minPrice) => {
    let totalItem = 0;
    let totalPrice = 0;
    for (let product of cart){
        let { price, qty } = product;
        let filteredPrice = price.filter((price) => price >= minPrice);
        totalItem += filteredPrice.length;
        totalPrice += filteredPrice.reduce((sum, price) => sum + price, 0) * qty;
    }
    console.log(totalItem ? totalItem : 0, totalPrice ? totalPrice : 0);
}

