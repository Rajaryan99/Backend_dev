const mongoose  = require('mongoose');

main().then(() => {
    console.log('Database Connected!!');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
    username: String,
    addresses: [{
        location: String,
        city: String,
    }],

});

const User = mongoose.model('User', userSchema);

const addUser = async () => {
    let user1 = new User({
        username: "Brush Banner",
        location: [
            {
                location: "113C Main Street",
                city: 'New York'
            }
        ],
    });

    user1.addresses.push({
        location: '444H Helish Corner Down Town',
        city: "America U.S.A"
    });

    let result =  await user1.save();
    console.log(result);

};

addUser();

