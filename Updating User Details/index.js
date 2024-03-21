// Function to handle form submission
function handleFormSubmit(event) {

    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
  
    // Make a POST request to save the new details for the user
    axios
      .post("https://crudcrud.com/api/b21fe0e4d0934fcda38082012e258a32/appointmentData", userDetails)
      .then((res) => {
        // Display the updated details of the user on the screen
        displayUserOnScreen(res.data);
        // Clear the input fields after submission
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
      })
      .catch((err) => console.log(err));
  }
  
  // Function to fetch user data from the API
  function getData() {
    axios
      .get("https://crudcrud.com/api/b21fe0e4d0934fcda38082012e258a32/appointmentData")
      .then((res) => {
        const users = res.data;
        users.forEach((user) => {
          displayUserOnScreen(user);
        });
      })
      .catch((err) => console.log(err));
  }
  
  // Function to display user details on the screen
  function displayUserOnScreen(user) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = `
      ${user.username} - ${user.email} - ${user.phone}
      <button class="delete-btn">Delete</button>
      <button class="edit-btn">Edit</button>
    `;
    ul.appendChild(li);
  
    // Add event listener to delete button
    li.querySelector(".delete-btn").addEventListener("click", function (event) {
      ul.removeChild(li);
      // Make a DELETE request to delete the user
      axios
        .delete(`https://crudcrud.com/api/b21fe0e4d0934fcda38082012e258a32/appointmentData/${user._id}`)
        .then((res) => console.log("User deleted successfully"))
        .catch((err) => console.log(err));
    });
  
    // // Add event listener to edit button
    // li.querySelector(".edit-btn").addEventListener("click", function (event) {
    //   // Populate the input fields with user details
    //   document.getElementById("username").value = user.username;
    //   document.getElementById("email").value = user.email;
    //   document.getElementById("phone").value = user.phone;
  
      // Make a DELETE request to delete the user
      axios
        .delete(`https://crudcrud.com/api/b21fe0e4d0934fcda38082012e258a32/appointmentData/${user._id}`)
        .then((res) => {
          console.log("User deleted successfully");
          // Now the input fields are populated with user details, and the user can edit them
        })
        .catch((err) => console.log(err));
    
  }
  
  // Call getData function to fetch user data when the page loads
  getData();
  
  // Add event listener to the form for form submission
  document.querySelector("form").addEventListener("submit", handleFormSubmit);
  