const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //Check if the user with this username already exists
    await Admin.create({
        username: username,
        password: password
    })
    res.status(200).json({
        message: "Admin is created successfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // input validations should be required here

    const newCourse = await Course.create({
        title : title,
        description: description,
        imageLink : imageLink,
        price : price
    })
    res.status(200).json({
        message : 'Course created successfully', courseId : newCourse._id
    })


});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});
    res.status(200).json({
        courses : allCourses
    })
});

module.exports = router;