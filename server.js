var express = require('express');
const http = require('http');
const fs = require('fs');
var path = require('path');

var ganttOptions = require('./ganttOptions.js');
var Tasks = require('./tasks.js');

var app = express();
app.set('view engine','ejs');
//specify folder for views
app.set('views',path.join(__dirname,'views'));

//set static path to be used for support documents, like css or angular
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res)=>{
    res.render('index', {
        ganttOptions: ganttOptions.option,
        Team: Tasks.LoadTeam('./tasks_source.xml'),
        TasksSet: Tasks.LoadTasks('./tasks_source.xml')
    });
});

http.createServer(app).listen(3000);