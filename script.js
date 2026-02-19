let students = [];

window.onload = function() {
    fetch("students.json")
        .then(response => response.json())
        .then(data => {
            students = data;
            displayStudents(students);
        });
};

function displayStudents(list) {
    let tbody = document.querySelector("#studentTable tbody");
    tbody.innerHTML = "";

    if (list.length === 0) {
        document.getElementById("message").innerText = "No students found.";
        return;
    } else {
        document.getElementById("message").innerText = "";
    }

    list.forEach(student => {
        let row = `<tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

document.getElementById("searchInput").addEventListener("input", function() {
    let value = this.value.toLowerCase();
    let filtered = students.filter(s =>
        s.name.toLowerCase().includes(value)
    );
    displayStudents(filtered);
});

document.getElementById("sortSelect").addEventListener("change", function() {
    if (this.value === "name") {
        students.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (this.value === "age") {
        students.sort((a, b) => a.age - b.age);
    }
    displayStudents(students);
});

function addStudent() {
    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let course = document.getElementById("course").value.trim();

    if (name === "" || age === "" || course === "") {
        alert("All fields are required!");
        return;
    }

    if (isNaN(age)) {
        alert("Age must be a number!");
        return;
    }

    if (/\d/.test(name)) {
        alert("Name must not contain numbers!");
        return;
    }

    let newStudent = {
        id: students.length + 1,
        name: name,
        age: parseInt(age),
        course: course
    };

    students.push(newStudent);
    displayStudents(students);

    let rows = document.querySelectorAll("#studentTable tbody tr");
    let lastRow = rows[rows.length - 1];
    lastRow.classList.add("highlight");

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}

