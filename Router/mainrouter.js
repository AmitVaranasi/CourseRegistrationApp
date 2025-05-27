const router = require('express').Router()
const StudentController = require('../Controller/StudentController')
const CourseController = require('../Controller/CourseController')
const RegistrationController = require('../Controller/RegistrationController')


router.get('/getAllStudents',StudentController.getAllStudents)
router.post('/addStudent',StudentController.addStudent)

router.get('/getAllCourses',CourseController.getAllCourses)
router.post('/addCourse',CourseController.addCourse)

router.get('/getAllRegistrations',RegistrationController.getAllRegistrations)
router.post('/addRegistration',RegistrationController.AddRegistration)
router.delete('/deleteRegistration/:id',RegistrationController.DeleteRegistration)
router.put('/updateregistration/:id',RegistrationController.UpdateRegistration)
router.get('/getRegisteredCourse/:id',RegistrationController.getRegisteredCourse)



module.exports = router