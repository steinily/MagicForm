let element = document.getElementById("history");
//element.innerHTML = "";

function populatePage() {
    JSON.parse(localStorage.getItem('dataArr')).forEach((disData, index) => {
        element.innerHTML += `
    <div class="submit-history-card">
    <label for="cfn">First Name</label><br>
    <p class="card-first-name" id="cfn">${disData.fname}</p>
    <label for="cln">Last Name</label><br>
    <p class="card-last-name" id="cln">${disData.lname}</p>
    <label for="cem">Email</label><br>
    <p class="card-email" id="cem">${disData.email}</p>
    <label for="cph">Phone</label><br>
    <p class="card-phone" id="cph">${disData.phone}</p>
    <label for="ccomp">Company</label><br>
    <p class="card-company" id="ccomp">${disData.company}</p>
    <label for="cadd">Address</label><br>
    <p class="card-address" id="cadd">${disData.address}</p>
    <button class="delete-button" id="${index}" onclick="deleteButton(this.id)" >Delete</button>
    </div>
`;
    });
}

function deleteButton(index){
    let old = JSON.parse(localStorage.getItem('dataArr'));
    old.splice(index,1);
    console.log('Deleting ' + index)
    localStorage.setItem('dataArr',JSON.stringify(old));
    element.innerHTML = "";
    populatePage();


}

