const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

let user = [
    {id: 1, firstName: `luiz`, lastName: `patiag`, section: `bsit 4b`, status: `present`},
    {id: 2, firstName: `siena`, lastName: `benjie`, section: `bsit 4b`, status: `present`},
]

app.get('/', (req, res) => {
  const {firstName, lastName, section, status} = req.body;
  const userIndex = user.findIndex(user => user.firstName === firstName && user.lastName === lastName);

    if (userIndex !== 1) {
        user[userIndex].status = status;
        console.log(`Updated attendance for ${lastName}, ${firstName} to ${status}`);
        res.status(200).json({message: `Attendance for ${lastName}, ${firstName} to ${status}`})
    } else {
        const newUser = { id: user.length + 1, lastName, firstName, section, status};
        user.push(newUser);
        console.log(`New User added: ${lastName}, ${firstName} with status ${status}`);
        res.status(201).json({message: `New Student ${lastName}, ${firstName} has been added with status ${status}`});
    };
});

app.get('/users', (req, res) => {
    res.status(200).json(user);
})

app.get('/',(req, res) => {
    res.send('Server is up and running!');
})

module.exports = app;

app.listen(port, () => {
    console.log(`Server is runnning on PORT ${port}`)
})