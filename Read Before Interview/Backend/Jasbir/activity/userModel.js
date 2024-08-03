const mongoose = require('mongoose');
let dblink = 'mongodb+srv://shivangi:user1234@cluster0.qtxuzh8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dblink)
.then(function(){
  console.log('my connected');
}).catch(function(err){
  console.log('my error', err);
})

// how to create a schema-> only entries written will be added to your db no one else 
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is not send"],
    },
    password: {
        type: String,
        required: [true, "password is missing"]
    },
    confirmPassword: {
        type: String,
        required: [true, "confirmPassword is missing "],
        // custom validator
        validate: {
            validator: function () {
                // this referes to the current entry 
                return this.password == this.confirmPassword;
            },
            //    error message
            message: "password miss match"
        },
    },
    email: {
        type: String,
        required: [true, "email is missing"],
        // unique: true
    },
    phonenumber: {
        type: String,
        minLength: [10, "less then 10 numbers"],
        maxLength: [10, "more then 10 numbers"]
    },
    pic: {
        type: String,
        default: "dp.jpg",
    },
    otp: {
        type: String
    },
    otpExpiry: {
        type: Date
    },
    address: {
        type: String,
    }

})

// model is similar to your collection 
const FooduserModel = mongoose.model('FooduserModel', userSchema);
module.exports = FooduserModel;