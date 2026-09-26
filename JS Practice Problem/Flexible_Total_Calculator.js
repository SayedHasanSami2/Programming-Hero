//  Using rest params
function calculateTotal(discount, ...numbers) 
    {
        console.log(numbers);

    }

    calculateTotal(10, 20, 30, 40, 50); // Output: [20, 30, 40, 50]