const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/bookmarker");

const Bookmark = db.define("Bookmark", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING, allowNull: false },
  url: { type: Sequelize.STRING, allowNull: false },
  categoryId: { type: Sequelize.STRING, allowNull: false },
});

const Category = db.define("Category", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING, allowNull: false },
});

async function dbServer() {
  await db.sync();
}

dbServer();

module.exports({ Bookmark, Category });
