const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}\n\n`);

categories.forEach((el) => {
    console.log(`Number of categories: ${el.firstElementChild.textContent}`);
    console.log(`Number of categories: ${el.lastElementChild.children.length}\n\n`);
});