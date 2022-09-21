let http = require("http");
let persons = require("./class_files/Person.js");
let students = require("./class_files/Student.js");
let teachers = require("./class_files/Teacher.js");

let person = persons.Person;
let teacher= teachers.Teacher;
let student = students.Student;

const student1 = new student("Henrique Santos", "Surubim", "UPE Caruaru", "Technology");
student1.setDateOfBorn(2001);
student1.setGender("male");
student1.setId("001");

const teacher1 = new teacher("Jayani Gunarathne", "Badulla", "Vihara Maha Devi", "Science", 1998, 20000);
teacher1.setDateOfBorn(1978);
teacher1.setGender("female");
teacher1.setTeacherId("t01");

http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write("<h1>Student</h1>");
    res.write(student1.bio());
    res.write("<br>");
    res.write("<h1>Teacher</h1>")
    res.write(teacher1.bio());

    res.end();
}).listen(500);