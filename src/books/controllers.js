const Book = require("./model");

const addBook = async (request, response) => {
  console.log("request body: ", request.body);
  const book = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  response.send({ message: "book added", book: book });
};

const getAllBooks = async (request, response) => {
  const books = await Book.find({});
  console.log("books: ", books);
  response.send({ message: "all the books", books: books });
};

module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
};

// const myObj = {
//   name: "michael",
//   age: 40,
//   isAwesome: true,
//   favFruit: {
//     banana: true,
//     apple: true,
//     plum: false,
//   },
// };

// console.log(myObj.favFruit.apple);
// logs true

// console.log(myObj.name);

// // Object destructuring ES6
// const { name, age, isAwesome } = myObj;

// console.log(name);
