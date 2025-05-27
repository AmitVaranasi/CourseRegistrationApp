const db = require('../Model/index')

const Course = db.Course

const getAllCourses = async (req,res) =>{
    const result = await Course.findAll();
    res.status(200).send(result)
}

const addCourse = async (req,res) =>{
    const data = {
        title:req.body.title,
        description:req.body.description
    }
    const result = await Course.create(data);
    res.status(200).send(result)
}


module.exports = {
    getAllCourses,
    addCourse
}