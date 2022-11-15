const router = require("express").Router()
const Foods = require("./foods-model")
const { restricted } = require('../auth/auth-middleware')

router.get("/", async (req, res, next) => {
  try {
    const items = await Foods.getFoods()
    res.status(200).json(items)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    //  this is the meeting_id
    const menu = await Foods.findByMeetingId(req.params.id)
    res.status(200).json(menu)
  } catch (err) {
    next(err)
  }
})

router.post("/", restricted,  
  async (req, res, next) => {
    try {
      const { 
        name,
        meeting_id,
      } = req.body;

      const newFood = await Foods.insertFood({ 
        name,
        meeting_id,
      })
      res.status(201).json(newFood)
  } catch (err) {
    next(err)
  }
})


router.delete("/:id", restricted, async (req, res, next) => {
  try {
    //  this is the food id
    await Foods.remove(req.params.id)
    res.status(200).json(`item deleted successfully`)
    next()
  } catch (err) {
    next(err)
  }
})

module.exports = router