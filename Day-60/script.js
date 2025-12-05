const fetchStudentDetailsURL = "http://localhost:8080/student/allStudents";
const addStudentURL = "http://localhost:8080/student/insert";
const updateStudentDetailsURL = "http://localhost:8080/student/update";
const deleteStudentDetailsURL = "http://localhost:8080/student/delete/";

const fetchData = async () => {
  const response = await fetch(fetchStudentDetailsURL);
  const data = await response.json();
  updateTable(data);
};

fetchData();

function showForm() {
  form.classList.remove("disableForm");
  form.classList.add("enableForm");
  tableElement.classList.remove("table");
  tableElement.classList.add("disableTable");
}

const updateStudentEvent = async (student) => {
  showForm();
  // show the data in the form
  document.getElementById("rollNo").value = student.rollNo;
  document.getElementById("name").value = student.name;
  document.getElementById("gender").value = student.gender;
  document.getElementById("course").value = student.course;
  document.getElementById("duration").value = student.duration;
  document.getElementById("fee").value = student.fee;
  updateStudent = true;
};

const deleteStudentEvent = async (student, tr) => {
  let deleteURL = `${deleteStudentDetailsURL}${student.rollNo}`;
  let response = await fetch(deleteURL, { method: "DELETE" });

  if (response.ok) {
    alert("Student Deleted successfully");
    tr.remove();
  } else {
    alert("Error in deleting in student");
  }
};

let tableElement = document.querySelector("table");
let tableBody = document.querySelector("tbody");
let updateStudent = false;

const updateTable = (data) => {
  console.log("line 50", data);
  tableBody.innerHTML = "";
  for (let student of data) {
    let tr = document.createElement("tr");
    for (let value in student) {
      let td = document.createElement("td");
      td.innerText = student[value];
      tr.appendChild(td);
    }

    let updateButton = document.createElement("button");
    updateButton.innerText = "Update";
    updateButton.classList.add("update");
    updateButton.addEventListener("click", () => updateStudentEvent(student));
    let td = document.createElement("td");
    td.appendChild(updateButton);
    tr.appendChild(td);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", () =>
      deleteStudentEvent(student, tr)
    );
    td = document.createElement("td");
    td.appendChild(deleteButton);
    tr.appendChild(td);

    tableBody.appendChild(tr);
  }
};

let addStudentbtn = document.querySelector(".addStudent");
let form = document.querySelector("form");

addStudentbtn.addEventListener("click", () => {
  showForm();
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let rollNo = document.getElementById("rollNo").value;
  let name = document.getElementById("name").value;
  let gender = document.getElementById("gender").value;
  let course = document.getElementById("course").value;
  let duration = document.getElementById("duration").value;
  let fee = document.getElementById("fee").value;

  let student = {
    rollNo: Number(rollNo),
    name: name,
    gender: gender,
    course: course,
    duration: duration,
    fee: Number(fee),
  };

  let response;
  if (updateStudent) {
    response = await fetch(updateStudentDetailsURL, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });
  } else {
    response = await fetch(addStudentURL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });
  }

  if (response.ok) {
    if (updateStudent) {
      alert("Student updated successfully");
    } else {
      alert("Sudent added successfully");
    }
    form.classList.add("disableForm");
    form.classList.remove("enableForm");
    tableElement.classList.add("table");
    tableElement.classList.remove("disableTable");
    form.reset();
    fetchData();
    updateStudent = false;
  }
});
