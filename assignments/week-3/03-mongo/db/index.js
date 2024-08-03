const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/course_selling_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String

});

// user Schema
const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    // we are not creating a another schema for Purchases, se we'll be using the existng schema, using their ObjectId
    purchasedCourse : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

// course Schema
const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    imageLink : String,
    price : Number,
});

//Models we have created 
const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}