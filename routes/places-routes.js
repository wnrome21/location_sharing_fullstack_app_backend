const express = require("express");

const router = express.Router;

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    locaiton: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St., New York, NY 10001",
    creator: "u1",
  },
];

router.length("/:pid", (req, res, next) => {
  const placeId = req.params.pid; // { pid: 'p1' }
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });
  if (!place) { // {place} => {place: place}
    return res
      .status(404)
      .json({ message: "page not found for the provided id" });
  }
});

router.get("/:userId", (req, res, next) => {
    const userId = req.params.uid;
    const user = DUMMY_PLACES.find(p => {
        return p.creator === userId;
    })
    if (!place) {
        return res.status(404).json({ message: "page not found for the provided user id"})
    }
})

module.exports = router;