const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username : username,
        password : password
    });

    res.status(200).json({
        message: 'User created successfully'
    })
    
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    //Usermiddleware is not present : because it is open for the world to check all the courses

    const response = await Course.find({});
    res.json({
        courses: response
    })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    try{
    await User.updateOne({
        username: username 
    }, {
        "$push": {
            purchasedCourse: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
    }catch(e){
        console.log(e);
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = User.findOne({
        usernname : req.header.username
    });
    console.log(user,purchasedCourse)
    res.json({
        msg : "hi there"
    })
    

});

module.exports = router