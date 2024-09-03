const express = require("express");
const app = express();
const path = require("path");


let port =3000;
app.use(express.static(path.join(__dirname,"public/css")))
app.use(express.static(path.join(__dirname,"public/js")))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.get("/",(req,res)=>{
    // res.send("this is home");
    res.render("home.ejs");
})

app.get("/rolldice", (req,res) => {
    let diceVal = Math.floor(Math.random()*6)+1
    res.render("rolldice.ejs", {num: diceVal});
})

// app.get("/ig/:username", (req,res)=> {
//     let{username} = req.params;
//     res.render("instagram.ejs", {username});
//     console.log(username);
// })

app.get("/ig/:username", (req,res)=> {
    let{username} = req.params;
    const instaData = require("./data.json");
    const data= instaData[username];
    if(data){
        res.render("instagram.ejs", {data})
    }
    else{
        res.render("errors.ejs");
     }
    
    //console.log(data);
})

app.listen(port, ()=>{
    console.log(`app is listenting to port ${port}`);
});







// const express = require('express');
// const app = express();    //express is function
// //help to create server side web app
// let port =3000;

// app.listen(port, ()=>{
//     console.log(`app is listening on port ${port}`);
// });

// // app.use((req, res)=>{
// //     console.log(req)
// //     console.log("request is received")
// //     res.send("this is basic response")

// // })

// app.get("/",(req, res)=>{
//     res.send("you connected root path ")
//     })
// app.get("/apple",(req, res)=>{
//         res.send("you connected apple path ")
//         });
// app.get("/orange",(req, res)=>{
//             res.send("you connected orange path ")
//             })

// app.get("/:username/:id",(req,res) =>{
//     console.log(req.params);
//     res.send("I pass variable: Im on root");
    
// });

// app.get("/search",(req,res) =>{
//     console.log(req.query);
//     res.send("sucess");
    
// })
// //console.dir(app, )