const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: Product,
  }).then((tagData) => res.json(tagData));
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: Product,
  }).then((tagInfo) => res.json(tagInfo));
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create({
    tagName: req.body.tagName,
  }).then((tagData) => res.json(tagData));
});

router.put("/:id", (req, res) => {
  // update tag's name by its `id` value
  Tag.update(
    {
      tagName: req.body.tagName,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((tagData) => res.json(tagData));
});

router.delete("/:id", (req, res) => {
  // delete tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).then((tagData) => res.json(tagData));
});

module.exports = router;
