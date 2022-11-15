const router = require("express").Router()
const Reservations = require("./Reservations-model")
const { validateReservation, validateReservationId } = require("./Reservations-middleware")
const { restricted } = require('../auth/auth-middleware')

router.get("/", async (req, res, next) => {
  try {
    const reservations = await Reservations.getReservations()
    res.status(200).json(reservations)
  } catch (err) {
    next(err)
  }
})

// get all of the reservations for a meeting by meeting_id
router.get("/:id", restricted, validateReservationId, async (req, res, next) => {
  try {
    const reservations = await reservations.findByMeetingID(req.params.id)
    res.status(200).json(reservations)
  } catch (err) {
    next(err)
  }
})

router.post("/", restricted, validateReservation, 
  async (req, res, next) => {
    try {
      const { 
        reservation_id,
        food_id,
        meeting_id,
        user_id,
      } = req.body;

      const newReservation = await Reservations.insertReservation({ 
        reservation_id,
        food_id,
        meeting_id,
        user_id,
      })
      res.status(201).json(newReservation)
  } catch (err) {
    next(err)
  }
})

// this is the id of the reservation
router.put("/:id", restricted, validateReservationId, validateReservation, async (req, res, next) => {
    try {
      const updatedReservation = await Reservations.updateReservation(req.reservation, req.params.id)
      res.status(200).json(updatedReservation)
    } catch (err) {
      next(err)
    }
})

// this is the id of the reservation - a user will no long be connected as a guest
router.delete("/:id", restricted, validateReservationId, async (req, res, next) => {
  try {
    await Reservations.remove(req.params.id)
    res.status(200).json(`Reservation deleted successfully`)
    next()
  } catch (err) {
    next(err)
  }
})

module.exports = router