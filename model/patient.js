const Sequelize=require('sequelize');
const sequelize=require('../database.js');
const patient=sequelize.define(
    'patient',
    {
        patient_id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        name:{
            type:Sequelize.STRING
        },
        age:{
            type:Sequelize.INTEGER

        },
        mobile_no:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING,
            allowNull:false
        },
        gender:{
            type:Sequelize.ENUM("Male","Female")
        },
        created_date:{
            type:Sequelize.DATE
        },
        created_by:{
            type:Sequelize.STRING
        },
        updated_date:{
            type:Sequelize.DATE
        },
        updated_by:{
            type:Sequelize.STRING
        }
    }
);
module.exports =patient;