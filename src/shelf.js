function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
}

function unshelfBook(bookName, shelf) {
  shelf.forEach(function (book, index) {
    if (book.title == bookName) {
      shelf.splice(index, 1)
    }
  });
}

function listTitles(shelf) {
  var list = ''
  shelf.forEach(function (book) {
    list += `${book.title}, `
  });
  return list.slice(0,-1).slice(0,-1)
}

function searchShelf(shelf, bookName) {
  var included = false
  shelf.forEach(function (book, index) {
    if (book.title == bookName) {
      included = true
    }
  });
  return included
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};