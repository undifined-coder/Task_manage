const mongoose = require('mongoose');

// It is the schema for the User, and it contains the all the basic imformation of the user

const UserSchema = new mongoose.Schema({
    name :{
        type : 'String',
        required: true
    },
    email : {
        type : 'String',
        required : true,
        unique : true
    },
    password : {
        type : 'String',
        required : true
    },
    isAdmin : {
        type : 'Boolean',
        required : true
    },
    userToReview : [{ //Nof of user admin can review
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }],

    reviewRecivedFrom: [    // recieved review from another people
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review',
        }
    ]
}, 
{
    timestamps : true
}
);

const User = mongoose.model('User' , UserSchema);
module.exports = User;