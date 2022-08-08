//In this exercise we will dwell on objects by means of an example centered around books

const user = {
    name: "Rodrigo",
    id: 14
}

const book1 = {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    isbn: "9780791093054",
    category: "Tragedy"
}

const book2 = {
    title: "I Robot",
    author: "Isaac Asimov",
    isbn: "9780194230698",
    category: "Science Fiction"
}

user.books = [book1, book2];

const library = [user];

const book3 = {
    title: "Metamorphosis",
    author: "Ovid",
    isbn: "9780140422306",
    category: "Classic"
}

library[0].books.push(book3);

console.log(library);

// hacer el bonus, que es añadir más usuarios
