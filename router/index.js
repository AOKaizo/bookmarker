const express = require("express");
const router = express.Router();
const { Bookmark, Category } = require("./db");

router.get("/bookmarks", async (req, res, next) => {
  try {
    res.send(Bookmark);
  } catch (error) {
    next(error);
  }
});

router.get("/categories/:id", async (req, res, next) => {
    const catId = req.params.id
    try {
      res.send(Category.id[catId]);
    } catch (error) {
      next(error);
    }
  });

  //category table
  // id | category
  // 1  | code

//   Category {
//   }
// category {
//     id: 1,
//     name: "code"
// }
