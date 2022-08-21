const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: Product,
  })
  .then((tag_data) => res.json(tag_data));
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: Product,
  })
  .then((tag_data) => res.json(tag_data));
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  })
  .then((tag_data) => res.json(tag_data));
});

router.put("/:id", (req, res) => {
  // update tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
  .then((tag_data) => res.json(tag_data));
});

router.delete("/:id", (req, res) => {
  // delete tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((tag_data) => res.json(tag_data));
});

module.exports = router;
