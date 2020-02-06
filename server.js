const express = require('express');
const app = express();
const bp = require('body-parser');

app.use(bp.json());

const mockUserData = [
    { name: 'Mark' },
    { name: 'Jill' }
]

app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: req.params.id
    })
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "BillyTheKid";
    const mockPassword = "superSecret";

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password or/and userbane do not match'
        })
    }
})




app.listen(8000, () => console.log("server is listening"))


