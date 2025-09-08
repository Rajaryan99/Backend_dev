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
    email: String,
});

const postSchema = new mongoose.Schema({
    content: String,
    Likes: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
    let user = await User.findOne({ username: "Rahul Kumar" })

    let post2 = new Post({
        content: "Bye Bye",
        Likes: 900,
    });

    post2.user = user;


    let post = await post2.save();
    console.log(post);

};

addData();

