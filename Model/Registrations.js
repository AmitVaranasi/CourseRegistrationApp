module.exports = (sequelize, DataTypes)=>{
const Registration = sequelize.define("Registration",{
    registered_at:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue:DataTypes.NOW
    }

    })

return Registration
}