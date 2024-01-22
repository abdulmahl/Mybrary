const router = require("express").Router();

// All authors route
router.get("/", (req, res) => {
  res.render("authors/index");
});

// New authors route
router.get("/new", (req, res) => {
  res.render("authors/new");
});

// Create author route
router.post("/", (req, res) => {
  res.send("Creation Route");
});

module.exports = router;
