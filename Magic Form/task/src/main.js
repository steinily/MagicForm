window.onbeforeunload = function(){
    localStorage.setItem("fname", document.getElementById('first-name').value);
    localStorage.setItem("lname", document.getElementById('last-name').value);
    localStorage.setItem("email", document.getElementById('email').value);
    localStorage.setItem("phone", document.getElementById('phone').value);
    localStorage.setItem("company", document.getElementById('company').value);
    localStorage.setItem("address", document.getElementById('address').value);
}


function saveData(){
    let dataArr = JSON.parse(localStorage.getItem('dataArr')) || [];
    dataArr.push({
        'fname': document.getElementById('first-name').value,
        'lname': document.getElementById('last-name').value,
        'email': document.getElementById('email').value,
        'phone': document.getElementById('phone').value,
        'company': document.getElementById('company').value,
        'address': document.getElementById('address').value,
    });
    localStorage.setItem('dataArr',JSON.stringify(dataArr));
    document.getElementById('form-l').reset()

};


window.onload = function() {
    let name = localStorage.getItem("fname");
    if (name !== null) {
        document.getElementById('first-name').value = localStorage.fname;

    }

    let lname = localStorage.getItem('lname');
    if (lname !== null) {
        document.getElementById('last-name').value = localStorage.lname;
    }

    let mail = localStorage.getItem('email');
    if (mail !== null) {
        document.getElementById('email').value = localStorage.email;
    }

    let phone = localStorage.getItem('phone');
    if (phone !== null) {
        document.getElementById('phone').value = localStorage.phone;
    }

    let company = localStorage.getItem('company');
    if (company !== null) {
        document.getElementById('company').value = localStorage.company;
    }

    let address = localStorage.getItem('address');
    if (address !== null) {
        document.getElementById('address').value = localStorage.address;
    }
}


function handleInput(value , id){
    if(id == 'first-name'){
        localStorage.setItem("fname", value);
    }else if( id =='last-name'){
        localStorage.setItem("lname", value);
    }else{
        localStorage.setItem(id, value);
    }
}

function dry(){
    let name = localStorage.getItem("fname");
    if (name !== null) {
        document.getElementById('first-name').value = localStorage.fname;

    }

    let lname = localStorage.getItem('lname');
    if (lname !== null) {
        document.getElementById('last-name').value = localStorage.lname;
    }

    let mail = localStorage.getItem('email');
    if (mail !== null) {
        document.getElementById('email').value = localStorage.email;
    }

    let phone = localStorage.getItem('phone');
    if (phone !== null) {
        document.getElementById('phone').value = localStorage.phone;
    }

    let company = localStorage.getItem('company');
    if (company !== null) {
        document.getElementById('company').value = localStorage.company;
    }

    let address = localStorage.getItem('address');
    if (address !== null) {
        document.getElementById('address').value = localStorage.address;
    }
}

setInterval(dry , 100);

