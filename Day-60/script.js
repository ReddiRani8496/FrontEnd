const fetchStudentDetailsURL = "http://localhost:8080/student/allStudents";

const fetchData = async () => {
  const response = await fetch(fetchStudentDetailsURL);
  const data = await response.json();
  console.log(data);

  updateTable(data);
};

fetchData();

let tableElement = document.querySelector("table");

const updateTable = (data) => {
  for (let student of data) {
    let tr = document.createElement("tr");
    for (let value in student) {
      let td = document.createElement("td");
      td.innerText = student[value];
      tr.appendChild(td);
    }

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete");

    deleteButton.addEventListener("click", async () => {
      let deleteURL = `http://localhost:8080/student/delete/${student.rollNo}`;
      let response = await fetch(deleteURL, { method: "DELETE" });

      if (response.ok) {
        alert("Student Deleted successfully");
        tr.remove();
      } else {
        alert("Error in deleting in student");
      }
    });

    let td = document.createElement("td");
    td.appendChild(deleteButton);
    tr.appendChild(td);

    tableElement.appendChild(tr);
  }
};

let addStudentbtn = document.querySelector(".addStudent");
let form = document.querySelector("form");

addStudentbtn.addEventListener("click", () => {
  form.classList.remove("disableForm");
  form.classList.add("enableForm");
  tableElement.remove("table");
  tableElement.classList.add("disableTable");
});

const addStudentURL = "http://localhost:8080/student/insert";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let rollNo = document.getElementById("rollNo").value;
  let name = document.getElementById("name").value;
  let gender = document.getElementById("gender").value;
  let course = document.getElementById("course").value;
  let duration = document.getElementById("duration").value;
  let fee = document.getElementById("fee").value;

  console.log(rollNo, name, gender, course, duration, fee);
  let student = {
    rollNo: Number(rollNo),
    name: name,
    gender: gender,
    course: course,
    duration: duration,
    fee: Number(fee),
  };

  console.log(student);

  let response = await fetch(addStudentURL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  if (response.ok) {
    alert("Sudent added successfully");
    form.classList.add("disableForm");
    form.classList.remove("enableForm");
    tableElement.classList.add("table");
    tableElement.classList.remove("disableTable");
    form.reset();
    fetchData();
  }
});
