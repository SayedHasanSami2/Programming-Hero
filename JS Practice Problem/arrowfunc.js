//  const calculateShipping = (orderAmoount, ShippingFee = 60) => {

//     return orderAmoount >= 1000 ? "Free Shipping" : `Shippping Fee:${ShippingFee} Taka`

// }

// console.log(calculateShipping(1200));


const Grading = (mark) => {
  return typeof mark !== "number"
    ? "Invalid"
    : mark >= 90
      ? "A+"
      : mark >= 80
        ? "A"
        : "Fail";
};( mark ) =>
{
    return typeof mark!= "number" ? "Invalid" : mark >= 90 ? "A+" : mark >= 80 ? "A" : "Fail"

};
console.log(Grading(12));