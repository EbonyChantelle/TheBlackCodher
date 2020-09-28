const books = [
  {
    image: "AGCNTS5.jpg",
    name: "All God's Children Need Travelling Shoes",
    author: "Maya Angelou",
    price: "£5.99",
    description: "THE FIFTH AUTOBIOGRAPHY",
    button: "Add To Bookcase",
  },
  {
    image: "ASFUTH6.jpg",
    name: "A Song Flung Up To Heaven",
    author: "Maya Angelou",
    price: "£3.99",
    description: "THE SIXTH AUTOBIOGRAPHY",
    button: "Add To Bookcase",
  },
  {
    image: "COBAB.jpg",
    name: "Children Of Blood And Bone",
    author: "Tomi Adeyemi",
    price: "£3.99",
    description: "WINNER OF THE TONIGHT SHOW SUMMER READS",
    button: "Add To Bookcase",
  },
  {
    image: "COVAV.jpg",
    name: "Children Of Virtue And Vengeance",
    author: "Tomi Adeyemi",
    price: "£0.99",
    description: "THE SEQUEL TO CHILDREN OF BLOOD AND BONE",
    button: "Add To Bookcase",
  },
  {
    image: "GTIMN2.jpg",
    name: "Gather Together In My Name",
    author: "Maya Angelou",
    price: "£4.99",
    description: "THE SECOND AUTOBIOGRAPHY",
    button: "Add To Bookcase",
  },
  {
    image: "IKWTCBS1.jpg",
    name: "I know Why The Caged Bird Sings",
    author: "Maya Angelou",
    price: "£5.99",
    description: "THE FIRST AUTOBIOGRAPHY",
    button: "Add To Bookcase",
  },
  {
    image: "MAMAM7.jpg",
    name: "Mom And Me And Mom",
    author: "Maya Angelou",
    price: "£5.99",
    description: "THE SEVENTH AUTOBIOGRAPHY",
    button: "Add To Bookcase",
  },
  {
    image: "Q.jpg",
    name: "Queenie",
    author: "Candice Carty-Williams",
    price: "£4.99",
    description: "THE SUNDAY TIMES BESTSELLER",
    button: "Add To Bookcase",
  },
  {
    image: "SASAGMLC3.jpg",
    name: "Singin' And Swingin' And Getting' Merry Like",
    author: "Maya Angelou",
    price: "£4.99",
    description: "THE THIRD AUTOBIOGRAPHY",
    button: "Add To Bookcase",
  },
  {
    image: "THOAW4.jpg",
    name: "The Heart Of A Woman",
    author: "Maya Angelou",
    price: "£3.99",
    description: "THE FOURTH AUTOBIOGRAPHY",
    button: "Add To Bookcase",
  },
  {
    image: "THUG.jpg",
    name: "The Hate U Give",
    author: "Angie Thomas",
    price: "£7.99",
    description: "THE NEW YORK TIMES BESTSELLER",
    button: "Add To Bookcase",
  },
  {
    image: "WIANLTTWPAR.jpg",
    name: "Why I'm No Longer Talking To White People",
    author: "Reni Eddo-Lodge",
    price: "£7.49",
    description: "THE SUNDAY TIMES BESTSELLER",
    button: "Add To Bookcase",
  },
];

function displayBooks(books) {
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

displayBooks(books);
