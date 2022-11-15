const Meetings = require('./meetings-model')

const validateMeeting = async (req, res, next) => {
  const {         
    name,
    date,
    time,
    location,
     } = req.body
  if (
    !name ||
    !date ||
    !time ||
    !location
  ) {
    next({ status: 400, message: "name, date, time, location required" })
  }
  next()
}

const validateMeetingId = async (req, res, next) => {
  try {
    const meeting = await Meetings.findById(req.params.id)
    if (meeting) {
      next()
    } else {
      next({ status: 404, message: "meeting not found" })
    }
  } catch (error) {
    next(error)
  }
}

module.exports ={
    validateMeeting,
    validateMeetingId
}