const Reservations = require('./reservations-model')

const validateReservation = async (req, res, next) => {
  const {         
    food_id,
    user_id,
    meeting_id,
     } = req.body
  if (
    !food_id ||
    !user_id ||
    !meeting_id 
  ) {
    next({ status: 400, message: "name, date, time, location required" })
  }
  next()
}

const validateReservationId = async (req, res, next) => {
  try {
    const reservation = await Reservations.findById(req.params.id)
    if (reservation) {
      next()
    } else {
      next({ status: 404, message: "reservation not found" })
    }
  } catch (error) {
    next(error)
  }
}

module.exports ={
    validateReservation,
    validateReservationId
}