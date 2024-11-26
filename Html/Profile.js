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
    department.forEach(function(element) {
        departments.push(element.value); 
    });
    console.log(departments);
    
    let date = day+month+year;

        let formData = {
            name : name,
            image : profile,
            gender: gender,
            department:departments,
            salary:salary,
            date:date
        }
        
        let storedData = JSON.parse(localStorage.getItem('formData')) || [];
        storedData.push(formData);
        
        localStorage.setItem('formData', JSON.stringify(storedData));


}

function saveData(){
    Data();
    alert('Profile Saved!')
}

