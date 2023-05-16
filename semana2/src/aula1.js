const { MongoClient } = require("mongodb");

const url = "mongodb+srv://jessie:jessie@first.buahyq8.mongodb.net/";
const db = "lib";
const collection = "books";

const client = new MongoClient(url);
const lib = client.db(db).collection(collection);

//create
// lib.insertOne()
//read
// lib.find()
// lib.findOne()
//update
// lib.updateOne()
//delete
// lib.deleteOne()

//IIFE

(async () => {
  await lib.insertOne({
    name: "Romana",
    author: "Regina Maria",
  });
  await client.close();
})();

class Book {
  name;
  author;
  pages;
  category;
  constructor(name, author, pages, category) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.category = category;
  }
}

function createBook({ name, author, pages, category }) {
  const book = new Book(name, author, pages, category);
  return book;
}

class ManagerLibrary {
  async create(data) {
    const { name, birthdate, salary, service } = data; //pode dar erro
    const book = createBook(data);
    await lib.insertOne(book);
    console.log(`The book ${data.name} was successfully created!`);
    return book;
  }

  search(id) {
    return this.managerRepository.findAll((item) => item.id === id);
  }

  findAll() {
    return this.managerRepository;
  }

  delete(id) {
    const index = this.managerRepository.findIndex(
      (manager) => manager.id === id
    );
    this.managerRepository.splice(index, 1);
    return console.log("The manager was successfully deleted!");
  }

  edit(id, name, birthdate, salary, service) {
    const manager = this.findAll(id);
    Object.assign(manager, {
      name,
      birthdate,
      salary,
      service,
      id,
      updateAt: new Date(),
    });
    return this.managerRepository;
  }
}
