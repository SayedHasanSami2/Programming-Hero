
const cartCalculator = (products) => {
    let totalItem = 0;
    let totalPrice = 0;
    // const { pricee, qty } = products;
    for (let product of products){  
    totalItem += product.qty;
    totalPrice += product.pricee * product.qty;
    
    }
     console.log(totalItem ? totalItem : 0, totalPrice ? totalPrice : 0);
}


const products = [
    {  name: "pen", pricee : 100, qty:1  },
    { name: "pencil", pricee : 50, qty:2},
    { name: "notebook", pricee : 200, qty:1}
]

cartCalculator(products);
