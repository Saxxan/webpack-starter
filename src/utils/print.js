export const printFruit = function(fruit){
    const fruitTemplate = `
        <article class="fruit">
            <p>${fruit.name}</p>
        </article>
    `

    const main = document.querySelector('.main-container');
    main.innerHTML += fruitTemplate;
}


export const printFruits = function(response) {
    response.data.forEach(function(fruit) {
        printFruit(fruit);
    });
}