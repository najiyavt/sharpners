//const input = document.querySelector("input");

//const submit = document.querySelector("#submit");

function saveToLocalStorage(event){
    event.preventDefault();

    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    localStorage.setItem('Name',name);
    localStorage.setItem('Email',email);
    localStorage.setItem('Phone',phone);

}
module.exports = saveToLocalStorage;