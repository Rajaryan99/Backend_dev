const mongoose = require('mongoose');

main().then(() => {
    console.log('connection successful!!')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationship');
}

const orderSchema = new mongoose.Schema({
    items: String,
    price: Number,
});

const customerSchema = new mongoose.Schema({
    name: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
        },
    ],
});


const Order = mongoose.model('Order', orderSchema);
const Customer = mongoose.model("Customer", customerSchema);


// Mongoose middleWare

const addCust =  async () => {
    let newCust = new Customer({
        name: "VeerDash",
    });

    let newOrder = new Order({
        items: "Cold Coffee",
        price: "249",
    });

    newCust.orders.push(newOrder);

    await newCust.save();
    await newOrder.save();

    console.log('Added new Customer');

};

const delcust = async () => {
    let data = await Customer.findByIdAndDelete('68c0413ad60a8dc640661992');
    console.log(data);

}

delcust();

// addCust();

































// const addCustomer = async () => {
//     let cust1 = new Customer({
//         name: "Rahul Kumar",
//     });

//     let order1 = await Order.findOne({items: 'Chawmin'});
//     let order2 = await Order.findOne({items: 'Pizza'});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result = await cust1.save();
//     console.log(result);

// };


// addCustomer();



// const addOrder = async () => {
//    let res =  await Order.insertMany([
//         {items: "Chawmin", price: 120},
//         {items: "Pizza", price: 299},
//         {items: "Pasta", price: 149},
//         {items: "maggie", price: 99},
//     ]);

//     console.log(res);
// };

// addOrder();
