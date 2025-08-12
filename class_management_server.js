const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

let user = [
    {id:1, firstName:'Luiz', lastName:'Patiag',section:'bsit-4b',status:'present'},
    {id:2, firstName:'king', lastName:'driz',section:'bsit-4b',status:'absent'}
];

app.get('/users',(req,res)=>{
    const {firstName,lastName,section,status} =req.body;
    const userIndex = user.findIndex(user=> user.firstName && user.lastName === lastName);



    if (userIndex !== -1){
        user[userIndex].status = status;
        console.log(`Update attendance for ${lastName} ${lastName} to: ${status}`);
        res.status(200).json({message:`Attendance for ${lastName} ${firstName} has been update to ${status}`})
    } else {
        const newUser = {id: useReducer.length + 1, lastName, firstName,section,status};
        user.push(newUser);
        console.log(`New user added:${lastName} ${lastName} with status ${status}`)
        res.status(201).json({message:`New Student ${lastName} ${firstName} has been added with status ${status}`})

    };

});

app.get('/users',(req,res)=>{
    res.status(200).json(user);
})

app.get('/',(req,res)=>{
    res.send('Server is up and running!');
})

module.exports = app;

app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`)
})


