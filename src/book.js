function createTitle(title) {
  return 'The ' + title
}

function buildMainCharacter(name, age, pronouns) {
  return {
          name: name,
          age: age,
          pronouns: pronouns
        }
}

function saveReview(new_review, reviews) {
  if (!reviews.includes(new_review)) {
    reviews.push(new_review)
  }
}

function calculatePageCount(title) {
  return title.length * 20
}

function writeBook(title, character, genre) {
  return {
          title: title,
          mainCharacter: character,
          pageCount: calculatePageCount(title),
          genre: genre
        }
}

function editBook(book) {
  book.pageCount = book.pageCount * .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}