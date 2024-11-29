async function Data() {
    try {
        const response = await fetch('http://localhost:3000/formData');
        var data = await response.json();
        console.log(data.length);
    } catch (error) {
        console.error('Error loading data:', error);
    }
    let getId = data.length + 1;
    let getName = document.getElementById('name').value;
    let profile = document.querySelector('input[name="Profile"]:checked').src;
    let gender = document.querySelector('input[name="Gender"]:checked').value;
    let department = document.querySelectorAll('input[name="Departments"]:checked');
    let salary = document.getElementById('Salary').value;
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    let departments = [];
    department.forEach(function (element) {
        departments.push(element.value);
    });
    let date = day + " " + month + " " + year;

    let formData = {
        id : getId.toString(),
        name: getName,
        image: profile,
        gender: gender,
        department: departments,
        salary: salary,
        date: date
    }
    console.log(formData);
    const id = localStorage.getItem('id');
    console.log(id);
    if (id != null) {
        edidData(formData);
        localStorage.removeItem('id');
        window.location.href = 'http://127.0.0.1:5500/Html/Template.html';
    } else {
        addData(formData);
        window.location.href = 'http://127.0.0.1:5500/Html/Template.html';
    }
}
function saveData() {
    Data();
}
function cancleData(){
    localStorage.removeItem('id');
}
async function addData(formData) {
    try {
        const response = await fetch('http://localhost:3000/formData', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log('Data successfully posted:', result);
    } catch (error) {
        console.error('Error posting data:', error);
    }
    alert('Profile Saved!');
}

async function edidData(formData) {
    try {
        const response = await fetch(`http://localhost:3000/formData/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log('Data successfully posted:', result);
    } catch (error) {
        console.error('Error posting data:', error);
    }
    alert('Profile Edited!');
}
const id = localStorage.getItem('id');
if (id) {
    getEditData();
}
async function getEditData() {
    try {
        const response = await fetch(`http://localhost:3000/formData/${id}`)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const editData = await response.json();
        console.log(editData);
        document.getElementById('name').value = editData.name;
        document.querySelector(`input[name="Profile"][src="${"." + editData.image.slice(26, 35)}"]`).checked = true;
        document.querySelector(`input[name="Gender"][value="${editData.gender}"]`).checked = true;


        document.querySelectorAll('input[name="Departments"]').forEach(checkbox => {
            checkbox.checked = editData.department.includes(checkbox.value);
        });

        document.getElementById('Salary').value = editData.salary;
        document.getElementById('day').value = editData.date.slice(0, 2);
        document.getElementById('month').value = editData.date.slice(3, -5);
        document.getElementById('year').value = editData.date.slice(-4);
    } catch (error) {
        console.error('Error fetching edit data:', error);
    }
}


