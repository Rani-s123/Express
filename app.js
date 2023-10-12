const express = require("express");
const path = require("path");
const app = express();
const pug = require("pug");
// getting-started.js
const bodyparser=require('body-parser');
const mongoose = require('mongoose');
const { json } =require("express");

const login=require("./login.js");
const registered=require("./register.js")
const adds=require("./add.js")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/project');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const port = 800;


app.use('/static', express.static('static')) // For serving static files
// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

app.use(express.urlencoded({extended:false}));
 
app.get('/', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = {'title': 'PUBG is the best game', "constent": con}
    const params = { }
    res.status(200).render('index.pug', params);
})

app.post("/index", async (req, res)=>{
  const data={
    email:req.body.email,
    password:req.body.password
  }

  await login.insertMany([data])

  res.render("index")
})

app.get('/index.pug', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = {'title': 'PUBG is the best game', "constent": con}
    const params = { }
    res.status(200).render('index.pug', params);
})


app.get('/job.pug', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = {'title': 'PUBG is the best game', "constent": con}
    const params = { }
    res.status(200).render('job.pug', params);
})

app.get('/joblists.pug', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = {'title': 'PUBG is the best game', "constent": con}
    const params = { }
    res.status(200).render('joblists.pug', params);
})

app.get('/contact.pug', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = {'title': 'PUBG is the best game', "constent": con}
    const params = { }
    res.status(200).render('contact.pug', params);
})

app.get('/jobdetail.pug', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = {'title': 'PUBG is the best game', "constent": con}
    const params = { }
    res.status(200).render('jobdetail.pug', params);
})

  app.post("/jobdetail", async (req, res)=>{
    const main={
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      date:req.body.date,
      caste:req.body.caste,
      file:req.body.file,
      letter:req.body.letter
    }
  
    await registered.insertMany([main])
  
    res.render("jobdetail")
  })

  app.get('/add.pug', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = {'title': 'PUBG is the best game', "constent": con}
    const params = { }
    res.status(200).render('add.pug', params);
})

app.post("/add", async(req, res)=>{
  const mains={
    jobtitle:req.body.jobtitle,
    jobdescription:req.body.jobdescription,
    joblocation:req.body.joblocation,
    salary:req.body.salary,
    application:req.body.application,
    url:req.body.url,
    summary:req.body.summary
  }

  await adds.insertMany([mains])

  res.render("add")

})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});






