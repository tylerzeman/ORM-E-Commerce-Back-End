const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: Product
  }).then(tag_data => res.json(tag_data));
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {id: req.params.id}, 
    include: Product
  }).then(data_data => res.json(data_data));
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tagName: req.body.tagName
  }, {
    where: {id: req.params.id}
  }).then(tag_data => res.json(tag_data));
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tagName: req.body.tagName
  }, {
    where: {id: req.params.id}
  }).then(tag_data => res.json(tag_data));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {id: req.params.id}
  }).then(tag_data => res.json(tag_data));
});

module.exports = router;