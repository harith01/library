let myLibrary = [];

// Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value; //value was missing here i add it
  if (title == "" || author == "" || pages == "" || read == "") {
    alert("Provide full information");
    return;
  }
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  let books = document.querySelectorAll(".book");
  books.forEach((book) => book.remove());
  myLibrary.forEach(displayBook);
}

//it recievs index from for each
function displayBook(aBook, i) {
  let books = document.querySelector(".books");
  let book = document.createElement("div");
  book.setAttribute("class", "book");

  //   foreach function takes in a function and index i, it is optional but it gives you the flexibility to access the index of each loop so we add this index as an attribute here
  book.setAttribute("key", i);

  for (let key in aBook) {
    switch (key) {
      case "title":
        const title = document.createElement("h2");
        title.textContent = `${key}: ${aBook[key]}`;
        book.appendChild(title);
        break;
      case "author":
        const author = document.createElement("p");
        author.textContent = `${key}: ${aBook[key]}`;
        book.appendChild(author);
        break;
      case "pages":
        const page = document.createElement("p");
        page.textContent = `${key}: ${aBook[key]}`;
        book.appendChild(page);
        break;
      case "read":
        const read = document.createElement("p");
        read.textContent = `${key}: ${aBook[key]}`;
        book.appendChild(read);
        break;
    }
  }
  // create delete-icon
  const deleteBook = document.createElement("div");
  deleteBook.setAttribute = ("class", "del-read");
  deleteBook.innerHTML = `<i class="fa fa-trash delete-book" aria-hidden="true"></i>
  <i class="fa fa-check" aria-hidden="true"></i>`;
  book.appendChild(deleteBook);
  books.appendChild(book);
}

// function insertBook(aBook){
//     let table = document.getElementById('table');
//     let row = table.insertRow();
//     let title = row.insertCell();
//     let author = row.insertCell();
//     let pages = row.insertCell();
//     let read = row.insertCell();
//     title.innerHTML = aBook['title'];
//     author.innerHTML = aBook['author'];
//     pages.innerHTML = aBook['pages'];
//     read.innerHTML = aBook['read'];
// }

// function insertBooks(){
//     myLibrary.forEach(insertBook)
// }

let addBook = document.getElementById("addBook");
addBook.addEventListener("click", () => {
  document.querySelector(".form-entry").style.display = "block";
});

let submitBook = document.getElementById("submitBook");
submitBook.addEventListener("click", () => {
    addBookToLibrary();
    reset_form()});

let close = document.querySelector(".close");
close.addEventListener(
  "click",
  () => (document.querySelector(".form-entry").style.display = "none")
);

document.querySelector(".books").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-book")) {
    e.target.parentElement.parentElement.remove();

    //this deletes it
    let index = e.target.parentElement.parentElement.getAttribute("key");
    myLibrary.splice(index, 1);
  }
});

function reset_form(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').value = '';
}
