var weatherForm = document.querySelector('form');
var weatherSearch = document.querySelector('input');

var messageOne = document.querySelector('#message1');

weatherForm.addEventListener('submit' , (e) => {
    e.preventDefault();

    messageOne.textContent = 'Loading...';

    fetch('http://localhost:3100/weather?address='+weatherSearch.value).then((response) => {
        response.json().then((result) => {
            if(result.error){
                messageOne.textContent = result.error;
            }else{
                messageOne.textContent = result.temp;
            }
        });
    });
});