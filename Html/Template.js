let savedData = localStorage.getItem('formData');
savedData = JSON.parse(savedData);
if(savedData == ""){
  document.getElementById('heading').innerHTML = "Data Not Found!";
}
if (savedData) {
    let tableBody = document.querySelector('tbody');
    let rowsHTML = "";

    savedData.forEach((data) => {

        let department = data.department.map(department =>
            `<button class="dept">${department}</button> `
        ).join('');

        
        rowsHTML += `
        <tr>
          <td><img src=${data.image} alt="profile" width="25vw">${data.name}</td>
          <td>${data.gender}</td>
          <td>${department}</td> 
          <td>${data.salary}</td>
          <td>${data.date}</td>
          <td class="icons">
            <a href="./Profile.html" style="text-decoration: none; color: #42515F;"><i class="bi bi-pencil-fill" onclick="EditData()"></i><a>
            <i class="bi bi-trash-fill" onclick="DeleteData()"></i>
          </td>
        </tr>
      `;
    });
    tableBody.innerHTML = rowsHTML;
}

function EditData(){
    const table = document.querySelector('table');
    table.addEventListener('click', (event) => {
      const row = event.target.closest('tr').rowIndex -1;
      console.log(row);
      EditForm(row);
    });
}
function EditForm(row){
    const savedData = JSON.parse(localStorage.getItem('formData')) || [];
    const rowData = savedData[row];
    sessionStorage.setItem('index',row);
    sessionStorage.setItem('editData',JSON.stringify(rowData));
}

function DeleteData(){
    const table = document.querySelector('table');
    table.addEventListener('click', (event) => {
      const row = event.target.closest('tr').rowIndex -1;
      console.log(row);
      DeleteRow(row);
    });
}
function DeleteRow(row){
    let savedData = JSON.parse(localStorage.getItem('formData')) || [];
    savedData.splice(row,1);
    localStorage.setItem('formData', JSON.stringify(savedData));
    window.location.reload();
}
