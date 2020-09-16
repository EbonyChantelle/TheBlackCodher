export default function displayBooks(books) {
  const bookDisplay = document.querySelector("#book-display");
  const title = document.createElement("h2");
  const titleText = document.createTextNode("Recommended Reads");
  const div = document.createElement("div")

  books.map((book) => {
    const divItem = document.createElement("div");
    divItem.className = "allbooks";
   
    let image = document.createElement("img");
    let imageContent = document.createTextNode(book.image)
        image.src = book.image;
        image.alt = book.name;
    let name = document.createElement("h3");
    let nameContent = document.createTextNode(book.name);
    let author = document.createElement("P");
    let authorContent = document.createTextNode(book.author);
    let price = document.createElement("p");
    let priceContent = document.createTextNode(book.price);
    let description = document.createElement("p");
    let descriptionContent = document.createTextNode(book.description);

    image.appendChild(imageContent);
    name.appendChild(nameContent);
    author.appendChild(authorContent);
    price.appendChild(priceContent);
    description.appendChild(descriptionContent);

    divItem.appendChild(image);
    divItem.appendChild(name);
    divItem.appendChild(author);
    divItem.appendChild(price);
    divItem.appendChild(description);

    div.appendChild(divItem);
  });

  title.appendChild(titleText);
  bookDisplay.appendChild(title);
  bookDisplay.appendChild(div);
}