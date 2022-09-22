const Sequelize = require("sequelize");
const tables = require('./db')
const {Bookmark, Category} = tables


function createBookmark(newName, newUrl, newCategory) {
    Bookmark.create({name: newName,
        url: newUrl,
        category: newCategory})
}
function createCategory(newCategory) {
    Category.create({
        name: newCategory})
}

createCategory('coding')
createCategory('search')
createCategory('jobs')

createBookmark('Google', 'https://www.google.com/', 'search')
createBookmark('Stack Overflow', 'https://stackoverflow.com/', 'code')
createBookmark('Bing', 'https://www.bing.com/', 'search')
createBookmark('Linkedin', 'https://www.linkedin.com/', 'jobs')
createBookmark('Indeed', 'https://www.indeed.com/', 'jobs')
createBookmark('MDN', 'https://www.developer.mozilla.org/en-US/', 'code')

