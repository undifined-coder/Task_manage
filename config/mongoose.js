const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://pri1106gm:<Gau@9898>@cluster0.83jpg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');//url of database

const db=mongoose.connection;//set connection

db.on('error',console.error.bind(console,'error on connection to database'));// if error 

db.once('open',function()
{
    console.log('Succesfully connected to database');//if success
})

