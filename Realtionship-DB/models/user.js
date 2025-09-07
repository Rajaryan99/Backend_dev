const mongoose = require('mongoose');


main().then(() => {
    console.log('Database Connected!!');
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/realtionship');

}

const userSchema = new mongoose.Schema({
    username: String,
    addresses: [
        {
            location: String,
            city: String,
        },
    ],
});

const user = mongoose.model('user', userSchema);

const addUser = async () => {
    let user1 = new user({
        username: "Tony Stark",
        addresses: [{
            location: "221A stark Tower\Stark industrie's",
            city: "New York",
        }],
    });

    user1.addresses.push({
        location: 'F69 wallStreet',
        city: 'London'
    });
    let result = await user1.save();
    console.log(result);
}

addUser();