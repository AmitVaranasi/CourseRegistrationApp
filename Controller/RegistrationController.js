const { where } = require('sequelize');
const db = require('../Model/index')

const Registrations = db.Registrations
const Student = db.Student

const getAllRegistrations = async (req,res) =>{
    const result = await Registrations.findAll();
    res.status(200).send(result)
}

const AddRegistration = async (req,res) =>{
    const id = req.body.student_id
    const course_id = req.body.course_id
    const Student_id = await Student.findOne({id:id})

    const courses1 = await db.Course.findAll({
        include:[{
            model:Registrations,
            where:{student_id:id},
            attributes:[]
        }],
        attributes:['title','id']
    })

    let courses_registered = []

    courses1.map((course)=>{
        courses_registered.push(course.id)
    })

    if (courses_registered.includes(course_id)){
        res.status(400).send("Course Already registered")
    }
    else{
        const data = {
        student_id:id,
        course_id:course_id

    }

    const result = await Registrations.create(data)
    res.status(200).send(result)
    }
}

const DeleteRegistration = async (req,res) =>{
    const id = req.params.id
    const result = await Registrations.destroy({where:{id:id}})
    res.status(200).send(result)
}

const UpdateRegistration = async (req,res) =>{
    const id = req.params.id
    const key = req.body.key
    const value = req.body.value
    const result = await Registrations.update(
        {key:value},
        {where:{id:id}}
    )
    res.status(200).send(result)
}

const getRegisteredCourse = async (req,res) =>{
    const id = req.params.id
    // const courses = await Registrations.findAll({
    //     where:{student_id:id},
    //     include:[{
    //         model:db.Course,
    //         attributes:['title'],
    //         through:{
    //             attributes:['course_id']
    //         }
    //     }],
    //     attributes:[]
    // })

    const courses1 = await db.Course.findAll({
        include:[{
            model:Registrations,
            where:{student_id:id},
            attributes:[]
        }],
        attributes:['title']
    })
    res.status(200).send(courses1)
}

// const Updateregistrations = async (req,res) =>{
//     const course_id = req.params.id,

// }

module.exports = {
    getAllRegistrations,
    AddRegistration,
    DeleteRegistration,
    UpdateRegistration,
    getRegisteredCourse
}