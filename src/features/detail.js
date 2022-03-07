import axios from 'axios';

export const detailTemplate = function(fruit) {
    return `<div>
        <p>Name: ${fruit.name}</p>
        <p>Family: ${fruit.family}</p>
        <hr/>
        <p>Nutritions</p>
        <p>Calories: ${fruit.nutritions.calories}</p>
    </div>`
};

export const renderDetail = function(fruitId) {
    axios.get(`https://www.fruityvice.com/api/fruit/${fruitId}`)
        .then(function(response) {
            document.body.innerHTML = detailTemplate(response.data);
        })
}