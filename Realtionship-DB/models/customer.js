const mongoose = require('mongoose');

main().then(() => {
    console.log('Connected Successfully!!');
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const OrderSchema = new mongoose.Schema({
    item: String,
    price: Number
});

const customerSchema = new mongoose.Schema({
    name: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order',
        }
    ]
})

const Order = mongoose.model('Order', OrderSchema);
const Customer = mongoose.model('Customer', customerSchema);

const addcustomer = async () => {
    let cust1 = new Customer({
        name: "rahul Kumar",
    })

    let order1 = await Order.findOne({ item: "momo" });
    let order2 = await Order.findOne({ item: "Chawmine" });

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await cust1.save();
    console.log(result);

}

addcustomer();

// const addOrder = async () => {
//    let res =  await Order.insertMany([
//         {item: "Samosa", price: 12},
//         {item: "Chawmine", price: 120},
//         {item: "momo", price: 60},
//         {item: "Haka Noddels", price: 60},
//         {item: "Pizza", price: 199},
// ]);
//     console.log(res);
// }

// addOrder();