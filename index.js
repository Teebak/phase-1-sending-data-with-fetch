// Add your code here
const newData = {
    name: username,
    email: useremail
}


return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify(newData)
})
.then(resp => resp.json())
.then(object => {
    let h3 = document.createElement('h3')
    h3.textContent = object.id
    document.body.appendChild(h3)
})
.catch(error => {
    let h4 = document.createElement('h4')
    h4.textContent = error.message
    document.body.appendChild(h4)
})

 