function Data() {
    let name = document.getElementById('name').value;
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
    console.log(departments);

    let date = day+" "+ month +" "+ year;

    let formData = {
        name: name,
        image: profile,
        gender: gender,
        department: departments,
        salary: salary,
        date: date
    }

    let index = sessionStorage.getItem('index');
    console.log(index);
    if (index) {
        let storedData = JSON.parse(localStorage.getItem('formData')) || [];
        storedData.splice(index,1,formData);
        localStorage.setItem('formData', JSON.stringify(storedData));
        alert('profile edited successfull!')
        sessionStorage.removeItem('index');
        sessionStorage.removeItem('editData')
    }else{
        let storedData = JSON.parse(localStorage.getItem('formData')) || [];
        storedData.push(formData);
        
        localStorage.setItem('formData', JSON.stringify(storedData));
    }

}

function saveData() {
    Data();
    alert('Profile Saved!');
    window.location.href = 'http://127.0.0.1:5500/Html/Template.html';
}

function resetData(){
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
    let editData = sessionStorage.getItem('editData')
    console.log(editData);
    editData = JSON.parse(editData);

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

});

