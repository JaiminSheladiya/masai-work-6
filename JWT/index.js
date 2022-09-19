const express = require('express')
const app = express()
const port = 9090
const mongoose = require('mongoose')
const UserModel = require('./models/User')
const jwt = require('jwt');
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get('/', (req, res) => {res.send('hello')})


  app.get('/signup', async (req, res) => {
    const {username , password ,age} = req.body
    const user = new UserModel({ username , password , age});
    await user.save();
    res.status(201).send('User created successfully')
  })

  app.get('/signin', async (req, res) => {
    const {username , password } = req.body
    const user = await UserModel.find({username , password})
    console.log('User' , user)
    if(user){
        const token= jwt.sign(
            {id : }
        )
        return res.send('Logged in successfully')
    }
    
    res.status(401).send('Unauthorized')
  })

  app.get('/profile', (req, res) => {
    res.send('profile')
  })


mongoose.connect('mongodb://localhost:27017/nem201_lec2').then(()=>{
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      }) ;   
});

