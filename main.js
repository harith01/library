let myLibrary = [];

// Constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    if (title == '' || author == '' || pages == '' || read == ''){
        alert('Provide full information');
        return;
    }
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks()
}

function displayBooks(){
    let books = document.querySelectorAll('.book');
    books.forEach(book => book.remove())
    myLibrary.forEach(displayBook)
}

function displayBook(aBook){
    let books = document.querySelector('.books');
    let book = document.createElement('div');
    book.setAttribute('class', 'book');
    for (let key in aBook){
        switch(key){
            case 'title':
                const title = document.createElement('h2')
                title.textContent = `${key}: ${aBook[key]}`;
                book.appendChild(title);
            break;
            case 'author':
                const author = document.createElement('p');
                author.textContent = `${key}: ${aBook[key]}`;
                book.appendChild(author);
            break;
            case 'pages':
                const page = document.createElement('p');
                page.textContent = `${key}: ${aBook[key]}`;
                book.appendChild(page);
            break;
            case 'read':
                const read = document.createElement('p');
                read.textContent = `${key}: ${aBook[key]}`;
                book.appendChild(read);
            break;
        }
    }
    // create delete-icon
    const deleteBook = document.createElement('div');
    deleteBook.innerHTML = `<i class="fa fa-trash delete-book" aria-hidden="true"></i>`;
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



let addBook = document.getElementById('addBook');
addBook.addEventListener('click', ()=>{
    document.querySelector('.form-entry').style.display = 'block';
})

let submitBook = document.getElementById('submitBook');
submitBook.addEventListener('click', addBookToLibrary);

let close = document.querySelector('.close');
close.addEventListener('click', ()=> document.querySelector('.form-entry').style.display = 'none')

document.querySelector('.books').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-book')){
        e.target.parentElement.parentElement.remove();
    }
    
})