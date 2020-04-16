// const axios = require('axios');
// import axios from 'axios';

var inputName = document.querySelector('input');
var formData = document.querySelector('#form1');
var formGet = document.querySelector('#form2');
var ul = document.querySelector('ul');

var ulTag  = document.querySelector('ul');

const URL = 'http://localhost:3100/profile';

//Delete Profile ...
var deleteProfile = (id) => {
    fetch(URL + '/' + id , {
        method : "DELETE",
        headers : {
            'Content-Type': 'application/json; charset=utf-8'
        }
    }).then((response) => {
        response.json().then((res) => {
            if(res.error){
                console.log(res.error);
            }else{
                console.log(res.result);
            }
        })
    });
};

//To add the Profile...
formData.addEventListener('submit' , (event) => {
    event.preventDefault();
    
    
    fetch(URL,{
        method : "POST",
        body : JSON.stringify({ name : inputName.value}),
        headers : {
            'Content-Type': 'application/json; charset=utf-8'
        }
    }).then((result) => {
        console.log(result);
    } , (error) => {
        console.log(error);
        
    });
});

//Get the profile...
formGet.addEventListener('submit', (e) => {
    e.preventDefault();
    ul.innerHTML = ' ';
    // messageOne.textContent = 'Loading...';
    //View profiles...
    fetch(URL).then((response) => {
        response.json().then((result) => {
            if(result.error){
                // messageOne.textContent = result.error;
            }else{
                var ch = [];
                result.response.forEach(element => {
                    ch.push(element);
                });
                
                ch.map(({_id,name,age} , i)=> {
                    li= document.createElement('li');
                    li.appendChild(document.createTextNode(name +" "+ age));
                    var span = document.createElement('span');
                    span.innerHTML = "X";
                    span.onclick = e => {deleteProfile(_id)};
                    li.appendChild(span);
                    ul.appendChild(li);
                });
                
                // ch.forEach(element => {
                //     var li = document.createElement('li');
                //     li.appendChild(document.createTextNode(element.name +" "+ element.age));
                //     ul.appendChild(li); 
                // });
            }
        });
    });
});

