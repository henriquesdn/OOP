import http from "http";
import Student from "./class_files/Student";
import teacher from "./class_files/Teacher";

const student1 = new Student("Henrique Santos", 2001, "male", "Surubim", "UPE Caruaru", "Technology", 1);

const teacher1 = new teacher("Marta", 1995, "female", "Surubim", "School of World", "Health", 2020, 3500, "t01");

http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write("<h1>Student</h1>");
    res.write(student1.bio());
    res.write("<br>");
    res.write("<h1>Teacher</h1>")
    res.write(teacher1.bio());

    res.end();
}).listen(500);