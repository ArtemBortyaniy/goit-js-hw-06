const categoriesLength = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesLength.length}`);

const titleCategory = document.querySelectorAll("h2");

console.dir(titleCategory);

console.log(titleCategory[0].textContent);

console.log(titleCategory[1].textContent);

console.log(titleCategory[2].textContent);


const categories = document.querySelectorAll(".item ul li");

console.log(categories);

const itemsArr = [...categoriesLength];

console.log(itemsArr);

let a = [];

itemsArr.forEach(elem => {
    a.push(elem);
    console.log(a.length);
});




