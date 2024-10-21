
const sales = [
    {
        id:12,
        title:"computers",
        date:"2024-12-05",
        count:15,
        sum:45638.56
    },
    {
        id:13,
        title:"phones",
        date:"2024-12-15",
        count:2,
        sum:500000.56
    },
    {
        id:14,
        title:"tablets",
        date:"2024-11-05",
        count:20,
        sum:336380.56
    },
    {
        id:15,
        title:"tvs",
        date:"2024-01-05",
        count:15,
        sum:33699.56
    },
    {
        id:16,
        title:"services",
        date:"2024-11-12",
        count:36,
        sum:500005.56
    }
]

const date = Date();
console.log(date)

const filteredSales = sales.filter (function(sale) {
    return sale.sum <= 50000;
});
console.log(filteredSales)

const filteredDate = sales.filter (function(sale) {
    return sale.date.includes("-12-")
});
console.log(filteredDate)


//Grazina array suma
const getSum = (...nums)=>{
    //let numbers = nums.reduce((total, num)=>total+num,0)
    return nums.sort((a,b)=> b-a);
}
console.log(getSum(125,45,12,12,9999)); 

const students = ["Tomas","Toma","Jonas","Ieva"]
students.sort();
console.log(students)
students.reverse();
console.log(students)

sales.sort((a,b)=>{
    if(a.date > b.date) return -1;
    if(a.date < b.date) return 1;
    return 0;
})
console.log(sales);

const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 800 },
    { id: 3, name: 'Shirt', category: 'Clothing', price: 40 },
    { id: 4, name: 'Jeans', category: 'Clothing', price: 60 },
    { id: 5, name: 'Coffee Maker', category: 'Appliances', price: 150 },
    { id: 6, name: 'Blender', category: 'Appliances', price: 120 },
    { id: 7, name: 'TV', category: 'Electronics', price: 600 },
    { id: 8, name: 'Socks', category: 'Clothing', price: 10 },
    { id: 9, name: 'Microwave', category: 'Appliances', price: 180 },
    { id: 10, name: 'Smart Watch', category: 'Electronics', price: 250 }
  ];



    function filterProdcutsByCategory (products, category){
        return products.filter(product=> product.category === category)
    }
    const filteredCategories = filterProdcutsByCategory(products, "Clothing")

    console.log(filteredCategories);

    function sortProductsByPriceAsc(products) {
        return products.sort((a, b) => {
            if (a.price > b.price) return -1;
            if (a.price < b.price) return 1;
        });
    }

    console.log(sortProductsByPriceAsc(products))

    function sortProductsByPriceDesc(products) {
        return products.sort((a, b) => {
            if (a.price > b.price) return -1;
            if (a.price < b.price) return 1;
        });
    }

    console.log(sortProductsByPriceDesc(products))

    const array1 = ["text", "other"]
    const array2 = ["aha", "jo"]

    console.log(array1.concat(array2));

    const lowestPrice = (products)=>{
        const prices = products.map(product=> product.price);
        return Math.max(...prices)
    }
console.log(lowestPrice(products));