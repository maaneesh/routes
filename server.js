const express = require('express');
const app = express();
const port = 5003;


//1.
app.get('/',(req,res)=>{
    res.send(
        `<h2 >Hello World!</h2>
        <a href='/aboutMe'>About.</a>
        <a href='/projects'>Projects</a>
        <a href='/hobbies'>Interests</a>

        `        
        );
})

//2/
app.get('/aboutMe',(req,res)=>{
    res.send(
        `<h2>Bio.</h2>
        <p>I'm currently learing Web-Development. It's challenging but I love it. </p>
        <a href='/'>Home</a>
        <a href='/projects'>Projects</a>
        <a href='/media'>In Media</a>
        <a href='/publications'>Published Works</a>
        <a href='/awards'>Awards</a>
        <a href='/contact'>Contact</a>
        
        `);
})
//3.
app.get('/hobbies',(req,res)=>{
    res.send(
        `<h2>Hobbies and Interests.</h2>
        <p>On my free time, I like to exercise, chill at cafes and watch movies. </p></br>
        <a href='/photos'>Photograpgy<a/>
        <a href='/movies'>Watchlist<a/> </br>

        <a href='/'>Home</a>
        <a href='/contact'>Contact</a>
        
        `);
})
//4.
app.get('/photos',(req,res)=>{
    res.send(
        `<h2>Photography.</h2>
        <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
        <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
        <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"></br>

        <a href='/movies'>Watchlist<a/> </br>


        <a href='/'>Home</a>
      
        `);
})
//5.
app.get('/movies',(req,res)=>{
    res.send(
        `<h2>Favorite Movies</h2>
        <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
        <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
        <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"></br>

        <a href='/photos'>Photograpgy<a/> </br>

        <a href='/'>Home</a>
      
        `);
})
//6.
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

//7.
app.get('/media',(req,res)=>{
    res.send(`<h2 >In Media</h2>
        <p>
            <ul>
                <li> Newspapers </li>
                <li>  Interviews </li>
            </ul>
        </p>
        
        <a href='/'>Home</a>
        <a href='/aboutMe'>About.</a>
        `);
})
//8. 
app.get('/awards',(req,res)=>{
    res.send(`<h2 >Awards</h2>
        <p>
            <ul>
                <li> Most Commits Award</li>
                <li>  Eagle Eye Debugger </li>
                <li>  MVP </li>

            </ul>
        </p>
        
        <a href='/'>Home</a>
        <a href='/aboutMe'>About.</a>
        `);
})



//9.
app.get('/publications',(req,res)=>{
    res.send(`<h2 >Published Works</h2>
        <p>
            <ul>
                <li> Recursions </li>
                <li> OOP </li>
                <li>  Fantastic Algirithms </li>
            </ul>
        </p>
        
        <a href='/'>Home</a>
        <a href='/aboutMe'>About.</a>
        `);
})
//10.
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