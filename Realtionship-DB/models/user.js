const mongoose = require('mongoose');

main().then(() => {
    console.log('connection successful!!')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationship');
}

const userSchema = new mongoose.Schema({
    username: String,
    addresses: [{
        _id: false,
        location: String,
        city: String,
    }],
});

const User = mongoose.model('User', userSchema);

const addUsers = async () => {
    let user1 = new User({
        username: "Raj Aryan",
        addresses: [{
            location: 'A77 DownTown streets',
            city: 'New York',
        }],
    });

   user1.addresses.push({location: 'N44 Bakers Street', city: "London"});
   let result = await user1.save();
   console.log(result);
}

addUsers();