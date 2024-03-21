const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios.get("https://crudcrud.com/api/2d79d7bce76c4ca7a62ea197337c56d3/todo")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err))
}

function postTodo() {
  // Write your code here
  axios.post("https://crudcrud.com/api/2d79d7bce76c4ca7a62ea197337c56d3/todo", {
    title:"Pick up Parents",
    completed: false,
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err))
}

function putTodo() {
  // Write your code here
 axios
   .put("https://crudcrud.com/api/2d79d7bce76c4ca7a62ea197337c56d3/todo/65f7a6691492af03e8f0e727", {
    title:"Learn Axios",
    completed: true,
      
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

function deleteTodo() {
  // Write your code here
  axios.delete(
    "https://crudcrud.com/api/2d79d7bce76c4ca7a62ea197337c56d3/todo/65f714a41492af03e8f0e691")
  .then((res) => console.log(res))
    .catch((err) => console.log(err))
}
