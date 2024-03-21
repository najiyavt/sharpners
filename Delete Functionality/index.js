function handleFormSubmit(event){
    event.preventDefault();

    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    
    const userDetails = {
        username : name ,
        email : email,
        phone : phone
    }

    localStorage.setItem(userDetails.email , JSON.stringify(userDetails));
   showUserONScreeen(userDetails);
}
function showUserONScreeen(userDetails){
    const parentList = document.getElementById('listItem');
    const listItem = document.createElement('li');
   
    listItem.textContent = `${userDetails.username},${userDetails.email},${userDetails.phone}`;
   
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
   // deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener('click' ,function(){
        localStorage.removeItem(userDetails.email);
        listItem.remove();
    });

    
  
    listItem.appendChild(deleteBtn);
    parentList.appendChild(listItem);



    // list.innerHTML += '<button class="delete-btn"  >Delete</button>';
    // unorderList.appendChild(list);
}

module.exports = handleFormSubmit;