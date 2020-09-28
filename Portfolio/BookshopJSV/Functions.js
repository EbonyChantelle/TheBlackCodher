export default function displayBooks(books) {
  const bookDisplay = document.querySelector("#book-display");
  const title = document.createElement("h2");
  const titleText = document.createTextNode("Recommended Reads");
  const div = document.createElement("div");
  div.className = "bookHolder";

  books.map((book) => {
    const divItem = document.createElement("div");
    divItem.className = "allbooks";

    let image = document.createElement("img");
    image.className = "styleImage";
    image.src = book.image;
    image.alt = book.name;
    divItem.appendChild(image);

    let name = document.createElement("h3");
    name.className = "styleName";
    let nameContent = document.createTextNode(book.name);
    name.appendChild(nameContent);
    divItem.appendChild(name);

    let author = document.createElement("P");
    author.className = "styleAuthor";
    let authorContent = document.createTextNode(book.author);
    author.appendChild(authorContent);
    divItem.appendChild(author);

    let price = document.createElement("p");
    price.className = "stylePrice";
    let priceContent = document.createTextNode(book.price);
    price.appendChild(priceContent);
    divItem.appendChild(price);

    let description = document.createElement("p");
    description.className = "styleDescription";
    let descriptionContent = document.createTextNode(book.description);
    description.appendChild(descriptionContent);
    divItem.appendChild(description);

    let button = document.createElement("button");
    button.className = "styleButton";
    let buttonContent = document.createTextNode(book.button);
    button.appendChild(buttonContent);
    divItem.appendChild(button);

    div.appendChild(divItem);
  });

  title.appendChild(titleText);
  bookDisplay.appendChild(title);
  bookDisplay.appendChild(div);
}
