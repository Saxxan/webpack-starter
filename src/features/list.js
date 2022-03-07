import axios from 'axios';
import { renderDetail } from './detail';

const fruitTemplate = function(fruit) {
    return `<div class="fruit">
        <p>${fruit.name}</p>
    </div>`
}

const addEvent = function(element) {
    element.addEventListener('click', function(evennt) {
        console.log(event);
    })
}

export const renderList = function() {
    axios.get('https://www.fruityvice.com/api/fruit/all')
        .then(function (response) {
            response.data.forEach(function(fruit) {
                document.querySelector('body').innerHTML += fruitTemplate(fruit);
            });
            document.querySelectorAll('.fruit').forEach(function(fruit, index) {
                fruit.addEventListener('click', function() {
                    renderDetail(response.data[index].id);
                })
            })
        });
}   