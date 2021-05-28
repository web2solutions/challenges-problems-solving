var express = require('express');
var router = express.Router();
var recipes = require('../recipes.json');


router.get('/', function (req, res, next) {
  const { page = null, limit = 3 } = req.query
  console.log({ page, limit })
  // console.log(recipes)
  let start = ((+page) - 1) * limit
  let end = start + (+limit)
  let records = []
  if (page == null) {
    if (limit) {
      if (limit > 0) {
        for (let x = 0; x < limit; x++) {
          records.push(recipes[x])
        }
        return res.json(records);
      }
    }
    return res.json(recipes);
  } else if (page < 0) {
    return res.json(recipes);
  } else {
    if (start > recipes.length) {
      return res.json([]);
    }
    if (end > recipes.length) {
      end = recipes.length
    }
    console.log(start, end)
    for (let x = start; x < end; x++) {
      records.push(recipes[x])
    }
    return res.json(records);
  }
  
  
  
});

module.exports = router;
