let savedData = localStorage.getItem('formData');
savedData = JSON.parse(savedData);

if (savedData) {
    let tableBody = document.querySelector('tbody');
    let rowsHTML = 
                `<tr>
                    <td><img src="./img1.png" alt="profile" width="25vw"> Dolly</td>
                    <td>Female</td>
                    <td>
                        <button class="dept">HR</button>
                        <button class="dept">Engineer</button>
                    </td>
                    <td>₹40,000</td>
                    <td>12 Nov 2019</td>
                    <td class="icons">
                        <i class="bi bi-pencil-fill"></i>
                        <i class="bi bi-trash-fill"></i>
                    </td>
                </tr>
                <tr>
                    <td><img src="./img2.png" alt="profile" width="25vw"> Dolly</td>
                    <td>Female</td>
                    <td>
                        <button class="dept">HR</button>
                        <button class="dept">Engineer</button>
                    </td>
                    <td>₹40,000</td>
                    <td>12 Nov 2019</td>
                    <td class="icons">
                        <i class="bi bi-pencil-fill"></i>
                        <i class="bi bi-trash-fill"></i>
                    </td>
                </tr>
                <tr>
                    <td><img src="./img3.png" alt="profile" width="25vw"> Dolly</td>
                    <td>Female</td>
                    <td>
                        <button class="dept">HR</button>
                        <button class="dept">Engineer</button>
                    </td>
                    <td>₹40,000</td>
                    <td>12 Nov 2019</td>
                    <td class="icons">
                        <i class="bi bi-pencil-fill"></i>
                        <i class="bi bi-trash-fill"></i>
                    </td>
                </tr>
                <tr>
                    <td><img src="./img4.png" alt="profile" width="25vw"> Dolly</td>
                    <td>Female</td>
                    <td>
                        <button class="dept">HR</button>
                        <button class="dept">Engineer</button>
                    </td>
                    <td>₹40,000</td>
                    <td>12 Nov 2019</td>
                    <td class="icons">
                        <i class="bi bi-pencil-fill"></i>
                        <i class="bi bi-trash-fill"></i>
                    </td>
                </tr>
        `;

    savedData.forEach((data) => {

        let department = data.department.map(department =>
            `<button class="dept">${department}</button>`
        ).join('');


        rowsHTML += `
        <tr>
          <td><img src=${data.image} alt="profile" width="25vw">${data.name}</td>
          <td>${data.gender}</td>
          <td>${department}</td> <!-- Render the department buttons -->
          <td>${data.salary}</td>
          <td>${data.date}</td>
          <td class="icons">
            <i class="bi bi-pencil-fill"></i>
            <i class="bi bi-trash-fill"></i>
          </td>
        </tr>
      `;
    });
    tableBody.innerHTML = rowsHTML;
}
