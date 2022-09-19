const express = require('express')
const axios = require('axios');
const app = express()

const CLIENT_ID = 'f79c168136097402871a'
const CLIENT_SECRET = 'f71fdc2ec432a803fcc52e8422edde10d3ff5af4'

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/index.html')})


app.get('/github/callback',async (req,res)=>{
    const code = req.query.code

    const accessToken = await axions.post(`https://github.com/login/oauth/access_token`,null,
    {
        params : {
            client_id : CLIENT_ID,
            client_secret : CLIENT_SECRET,
            code : code
    },
    headers : {
        accept : 'application/json'
    },
    })
    res.send('SignIn with GitHub successfully').catch(console.error)
})
console.log('accessTOken' , accessToken)

// Get user data : 

// const userdata = await axios.get('https//:api.github.com/user',{
//     headers : 
// })

app.listen(8080, () => {
console.log(`Example app listening on port 8080`)
})