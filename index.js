const express = require("express");
const app = express();
const sum = require("./sum");

app.use(express.json());

const students = [];

app.get("/", (req, res) => {
  console.log(req.query);
  res.send("Data received");
});

app.post("/add-student", (req, res) => {
  console.log(req.body);

  const newStudent = req.body.name;
  students.push(newStudent);
  res.json(students);
});

app.get("/:user/:age", (req, res) => {
  console.log(req.params);
  res.send("Data received");
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(3000, () => {
  console.log("Server has started");
});

console.log(sum(4, 5));
