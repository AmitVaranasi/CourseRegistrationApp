const {Sequelize, DataTypes} = require('sequelize');
const dbConfig = require('../Config/dbConfig')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log("connection successful")
})
.catch((err)=>{
    console.log("error Connecting")
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Student = require('./Student.js')(sequelize, DataTypes);
db.Course = require('./Course.js')(sequelize, DataTypes);
db.Registrations = require('./Registrations.js')(sequelize, DataTypes);

db.Student.hasMany(db.Registrations,{foreignKey:'student_id'})
db.Registrations.belongsTo(db.Student,{foreignKey:'student_id'})

db.Course.hasMany(db.Registrations,{foreignKey:'course_id'});
db.Registrations.belongsTo(db.Course,{foreignKey:'course_id'})

db.sequelize.sync({force:false})
.then(()=>{
    console.log("connected to the db successfully")
})

module.exports = db;

