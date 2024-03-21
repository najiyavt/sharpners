// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
   
    axios
    .post("https://crudcrud.com/api/b21fe0e4d0934fcda38082012e258a32/appoinmentData" , userDetails)
    .then((res) => {
      displayUserOnScreen(res.data);
  
      
     // getUserFromAPI();
    })
    .catch((err) => console.log(err))
  }
  
  function getUserFromAPI() {
    axios
      .get("https://crudcrud.com/api/b21fe0e4d0934fcda38082012e258a32/appoinmentData")
      .then((res) => {
        const users = res.data;
  
        const ul = document.querySelector("ul")
        ul.innerHTML="";
        users.forEach((userDetails) => {
          displayUserOnScreen(userDetails)
          
        });
      })
      .catch((err) => console.log(err))
  }
  
   function displayUserOnScreen(userDetails) {
  
    const ul = document.querySelector("ul")
     const li = document.createElement("li")
  
     const listItem= document.createTextNode(`${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`);
     li.appendChild(listItem);
     
     const deleteBtn = document.createElement("button");
    deleteBtn.textContent="Delete"
  
    const editBtn = document.createElement("button");
    editBtn.textContent="Edit";
  
    li.appendChild(deleteBtn)
    li.appendChild(editBtn)
    ul.appendChild(li)
  
    deleteBtn.addEventListener("click",function(event)  {
      ul.removeChild(event.target.parentElement)
  
      // const name = userDetails.username
      
      // axios
      // .delete("https://crudcrud.com/api/b21fe0e4d0934fcda38082012e258a32/appoinmentData/${name}")
      // .catch((err) => console.log(err))
    })
   }
  // Fetch user data from CRUD API when the page loads
  window.addEventListener('load', getUsersFromAPI);
  