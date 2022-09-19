const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/User");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'peyton.marquardt98@ethereal.email',
      pass: '8ChamCW97Ua8jkXaSX'
  }
});

const blacklist = []  //temporary

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SignUp :-
app.post("/signup", async (req, res) => {
 
//  sent otp to use over email
const OTP = Math.floor(Math.random() * (999999 - 111111) + 111111)

 
  const { username, password, age } = req.body;

  const user = new UserModel({ username, password, age });
  await user.save();


  // sending mail
  await transport.sendMail({
    from : 'admin@gmail.com',
    to : username,
    subject: 'Signup success',
    html : `Your otp is ${OTP} ` 
  })


  res.status(201).send("User created successfully");
});

// SignIn :-
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username, password });

  if (user) {
    // Send token !
    const token = jwt.sign(   //Primary Token
      { id: user._id, name: user.username, age: user.age },
      "SECRETKEY1234",
      {
        expiresIn : '5 min'
      }
    );

    const refreshToken = jwt.sign(
        {id : user._id , name : user.username , age : user.age},
        'SECRETREFRESHKEY1234',{
            expiresIn : '7 days'
        }
        )

    return res.send({ message: "Logged in successfully", token: token });
  }
  res.status(401).send("Unauthorized");
});

app.get("/profile/:userid", async (req, res) => {
  const { userid } = req.params;

  const token = req.headers["authorization"].split(" ")[1];

  if(blacklist.find(token)){
    //
  }

  // validate
  try {
    const validity = jwt.verify(token, "SECRETKEY1234");
    if (validity) {
      const user = await UserModel.findById(userid);
      res.send(`welcome ${user.username}`);
    }
  } catch (e) {
    // if token is expired.
   // push it in blacklist. 

    console.log(e)
    return res.status(403).send("You are not allowed to see Profile page");
  }
});

app.post('/refresh',(req,res)=>{
    const refreshToken = req.headers['autherization']

    try{
        const verification = jwt.verify(refreshToken , 'SECRETREFRESHKEY1234')
        if(verification){
            const decode = jwt.decode(token)
            const primary = jwt.sign(decode , 'SECRETKEY1234' , {expiresIn : '5 min'})
            res.send(primary)
        } 
    }catch{
        // tell frontend user need to login
    }
})

// role based access token :-
app.delete('/post/:id' , (req,res)=>{
  const token = req.headers['authorization'];
  const data = jwt.decode(token)
;
if(data.role !== 'Admin'){
  return res.send('USAER IS NOT ALLOWED TO DELETE THE LACTURE')
}
return res.send('Deleted the lacture successfully')
})

mongoose.connect("mongodb://localhost:27017/nem201_lec3").then(() => {
  app.listen(8080, () => {
    console.log(`Example app listening on port 8080`);
  });
});



// For role base access token :-
// import access.json
// const totalAccess = accesses[role]
// if(totalAccess.includes('D')){
//   // he is allowed
// }
// else{
//   he is not allowed
// }