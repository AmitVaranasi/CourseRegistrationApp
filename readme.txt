# Student Course Registration System

A full-stack application for managing student enrollments in courses. Built with React frontend, Express.js backend, and Sequelize ORM for database management.

## Features

- Manage students, courses, and registrations via RESTful APIs.
- View students, courses, and registered courses through React components.
- Prevent duplicate course registrations for students.

##Install Dependencies

express,sequelize,Cors,mysql2(dialect) - backend

react-router-dom react-bootstrap axios bootstrap - front end

##Make changes to the dbconfig and add your db data
HOST:'localhost',
USER:,
PASSWORD:,
DB:,
dialect:'mysql',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }

##running the server

in the terminal go to the project location and type 'node server.js'


#Front end
go to client folder and run the following command

npm install - this will install the node packages

npm start
