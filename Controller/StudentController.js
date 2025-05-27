const db = require('../Model/index')

const Student = db.Student

const getAllStudents = async (req,res) =>{
    const result = await Student.findAll();
    res.status(200).send(result)
}

const addStudent = async (req,res) =>{
    const data = {
        name:req.body.name,
        email:req.body.email
    }
    const result = await Student.create(data);
    res.status(200).send(result)
}


module.exports = {
    getAllStudents,
    addStudent
}