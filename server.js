const express = require('express');
const app = express();
const port = 5003;



app.get('/',(req,res)=>{
    res.send(
        `<h2 >Hello World!</h2>
        <a href='/aboutMe'>About.</a>`);
})

app.get('/aboutMe',(req,res)=>{
    res.send(
        `<h2>Bio.</h2>
        <p>I'm currently learing Web-Development. It's challenging but I love it. </p>
        <a href='/'>Home</a>
        <a href='/projects'>Projects</a>
        <a href='/contact'>Contact</a>
        
        `);
})

app.get('/contact',(req,res)=>{
    res.send(`<h2 >Lets Connect!</h2>
        <p>
            <ul>
                <li> email: </li>
                <li> work : </li>
                <li>  linkedIn: </li>
            </ul>
        </p>
        
        <a href='/'>Home</a>
        <a href='/aboutMe'>About.</a>
        `);
})

app.get('/projects',(req,res)=>{
    res.send(
        `<h2 >Projects.</h2>
        <p>Here are some projects that I have owrked on.</p>
        <ul>
        <li>Movies</li>
        <li>Travel</li>
        <li>Recipes</li>
        </ul>
        <a href='/aboutMe'>About.</a>
        <a href='/'>Home</a>
        `);
})


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})