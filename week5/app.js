const root = document.getElementById("root");

fetch('https://jsonplaceholder.typicode.com/comments')
 .then((response) => response.json())
 .then((json) => render(json));

function render(data) {
    data.forEach((item) => {
        const h1 = document.createElement("h1");
        h1.textContent = item.id
        const h2 = document.createElement("h2");
        h2.textContent = item.name ;
        const h3 = document.createElement("h3");
        h3.textContent = item.body ;
        root.appendChild(h1);
        root.appendChild(h2);
        root.appendChild(h3);
    });
}