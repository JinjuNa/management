var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors());

var mysql = require('mysql')
var db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'aa950307',
    database : 'management'
});

db.connect();

app.get('/student', function(req, res){
    db.query(`select s.*, sex.sex, grade.grade, parent.name as parentName, parent.phoneNum as parentPhoneNum, state.state from student s
    join sex on s.sex_id = sex.id
    join grade on s.grade_id = grade.id
    join parent on s.id = parent.student_id
    join state on s.state_id = state.id`, function(error, result){
        if(error){
            console.log(error);
        }
        res.send(result)
    })
})

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})