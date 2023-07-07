const listEl = document.querySelectorAll('.item');
console.log("Number of categories:", listEl.length);
console.log(" ");

listEl.forEach(element => {
    console.log("Category:", element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.children.length);
    console.log(" ");
});

