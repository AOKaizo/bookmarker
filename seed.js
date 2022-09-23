const Sequelize = require("sequelize");
const tables = require("./db");
const { Bookmark, Category } = tables;

async function createBookmark(newName, newUrl, newCategoryId) {
  await Bookmark.create({
    name: newName,
    url: newUrl,
    categoryId: newCategoryId,
  });
}
async function createCategory(newCategory) {
  await Category.create({
    name: newCategory,
  });
}

async function createDB() {
  await Bookmark.sync({ force: true });
  await Category.sync({ force: true });

  const code = await createCategory("code");
  const search = await createCategory("search");
  const jobs = await createCategory("jobs");
  const codeCat = await Category.findOne({
    where: {
      name: "code",
    },
  });
  const searchCat = await Category.findOne({
    where: {
      name: "search",
    },
  });
  const jobsCat = await Category.findOne({
    where: {
      name: "jobs",
    },
  });
  // if you do findAll -> it assumes itll find multiple, hence it returns multiple objects in an array
  // [{id: 1,
  //   name: code}] -> object[0].id
  // if you do findOne -> it gives only that instance in an object hence find"one"
  const google = await createBookmark(
    "Google",
    "https://www.google.com/",
    codeCat.id
  );
  const stackOverflow = await createBookmark(
    "Stack Overflow",
    "https://stackoverflow.com/",
    codeCat.id
  );
  const bing = await createBookmark(
    "Bing",
    "https://www.bing.com/",
    searchCat.id
  );
  const linkedin = await createBookmark(
    "Linkedin",
    "https://www.linkedin.com/",
    jobsCat.id
  );
  const indeed = await createBookmark(
    "Indeed",
    "https://www.indeed.com/",
    jobsCat.id
  );
  const mdn = await createBookmark(
    "MDN",
    "https://www.developer.mozilla.org/en-US/",
    codeCat.id
  );
}

createDB();
