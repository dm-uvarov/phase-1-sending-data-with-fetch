// Add your code here

//


const sendURL = "http://localhost:3000/users"

function submitData(name_,email_){
    
    return fetch(sendURL,{
        method: "POST", 
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify({
            name: name_,
            email: email_,
    }),
    })
    .then(r => r.json())
    .then( data => {
        // let par = document.createElement("p");
        // par.innerText = data.id
        // document.querySelector('body').appendChild(par);
        document.querySelector('body').innerHTML = data.id;
    })
    .catch(err=> document.querySelector('body').innerHTML = err.message);
};



