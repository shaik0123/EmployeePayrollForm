async function loadData() {
    try {
        const response = await fetch('http://localhost:3000/formData');
        const data = await response.json();
        console.log(data.length);
        
        const tableBody = document.querySelector('tbody');
        tableBody.innerHTML = data.map((item, index) => `
            <tr>
                <td><img src="${item.image}" alt="profile" width="25vw"> ${item.name}</td>
                <td>${item.gender}</td>
                <td>${item.department.map(dept => `<button class="dept">${dept}</button> `).join('')}</td>
                <td>${item.salary}</td>
                <td>${item.date}</td>
                <td class="icons">
                    <a href="./Profile.html" style="text-decoration: none; color: #42515F;"><i class="bi bi-pencil-fill" onclick="editData(${item.id})"></i></a>
                    <i class="bi bi-trash-fill" onclick="deleteData(${item.id})"></i>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

loadData();

function editData(id){
    localStorage.setItem('id',id);
}

async function deleteData(id) {
    try {
        const response = await fetch(`http://localhost:3000/formData/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(id)
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log('Data Deleted successfully:', result);
    } catch (error) {
        console.error('Error Deleting data:', error);
    }
    alert('Profile Deleted!');
}
