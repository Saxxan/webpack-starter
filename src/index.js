import axios from 'axios';
import { printFruits } from './utils/print';

function addEvents() {
    document.querySelectorAll('.fruit').forEach(function(fruit){
        fruit.addEventListener('click', function(event){
            axios.get('https://www.fruityvice.com/api/fruit/${event}')
                .then(response => console.log(response.data));
        });
    });
}

axios.get('https://www.fruityvice.com/api/fruit/all')
    .then(function(response) {
        printFruits(response);
        addEvents();
    });