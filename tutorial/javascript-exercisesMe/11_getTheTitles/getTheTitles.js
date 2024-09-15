const getTheTitles = function(arr) {
    return books.map((book) => book.title)
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
  console.log(getTheTitles(books))
// Do not edit below this line
// module.exports = getTheTitles;