/*new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "vijaya", email: "vijji@gmail.com" });
    }
    else {
      reject("error");
    }
  }, 1000);
}).then((user) => {
  console.log(user);
  return (user.username)
}).then((username) => {
  console.log(username);
}).catch((error) => {
  console.log(error);
}).finally(() => {
  console.log("The promise is either resolved or rejected");
});*/

/*async function getAllUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUsers();*/
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    console.log(users)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    console.log('Finally')
  })