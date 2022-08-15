const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: Product
  })
    .then(catData => res.json(catData))
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
      include: Product
    },
  })
  .then(catData => res.json(catData))
});

router.post("/", (req, res) => {
  // create a new category
  Category.create({
    catName: req.body.catName
  })
  .then(catData => res.json(catData))
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update({
    catName: req.body.catName
  },{
    where: {
      id: req.params.id
    }
  }
  )
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(catData => res.json(catData))
});

module.exports = router;
