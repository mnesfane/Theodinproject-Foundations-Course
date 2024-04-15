const getTheTitles = function(books) {
    let bookTitles = []
    for (book of books){
        bookTitles.push(book.title)
    }
    return bookTitles
};

const getTheTitles2 = function(books) {
    return books.map(function(book){
        return book.title
    })
}

console.log(getTheTitles2([{  title: 'Book',  author: 'Name'},{  title: 'Book2',  author: 'Name2'}]))
// Do not edit below this line
module.exports = getTheTitles;
