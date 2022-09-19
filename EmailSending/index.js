const nodemailer = require ('nodemailer')
const hbs = require('handlebars');
const fs = require('fs');
// Create a transport :-

const template = hbs.compile(
    fs.readFileSync(__dirname + '/index.hbs' , 'utf-8')
)

const transport = nodemailer.createTransport({
    // Temporary host -
    host : 'smtp.ethereal.email',
    port : 587,   //465 == SSL , 587 == less secure
    auth: {
        user: 'peyton.marquardt98@ethereal.email',
        pass: '8ChamCW97Ua8jkXaSX'
    }
})

try{
    transport.sendMail({
        from: 'jaimins107@gmail.com',
        to: 'jaimins365635@gmail.com',
        subject : 'Mail via Transport',
        text : 'hello me from me',
        // html : `
        // <h1>Congratulations on passing C1</h1>
        // Your C1 Score:
        // <ul>
        // <li>C1 : 10</li>
        // <li>C2 : 10</li>
        // </ul>
        // `

        html : template({user : 'jaimin'})

    }).then(()=> console.log('Mail sended'))
}catch(e){
    console.log(e)
}
