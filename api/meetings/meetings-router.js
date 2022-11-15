const router = require("express").Router()
const Meetings = require("./Meetings-model")
const { validateMeeting, validateMeetingId } = require("./Meetings-middleware")
const { restricted } = require('../auth/auth-middleware')

router.get("/", async (req, res, next) => {
  try {
    const Meetings = await Meetings.getMeetings()
    res.status(200).json(Meetings)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", restricted, validateMeetingId, async (req, res, next) => {
  try {
    const Meeting = await Meetings.findById(req.params.id)
    res.status(200).json(Meeting)
  } catch (err) {
    next(err)
  }
})

router.post("/", restricted, validateMeeting, 
  async (req, res, next) => {
    try {
      const { 
        meeting_id,
        name,
        date,
        time,
        location,
        user_id,
      } = req.body;

      const newMeeting = await Meetings.insertMeeting({ 
        meeting_id,
        name,
        date,
        time,
        location,
        user_id,
      })
      res.status(201).json(newMeeting)
  } catch (err) {
    next(err)
  }
})

router.put("/:id", restricted, validateMeetingId, validateMeeting, async (req, res, next) => {
    try {
      const updatedMeeting = await Meetings.updateMeeting(req.meeting, req.params.id)
      res.status(200).json(updatedMeeting)
    } catch (err) {
      next(err)
    }
})

router.delete("/:id", restricted, validateMeetingId, async (req, res, next) => {
  try {
    await Meetings.remove(req.params.id)
    res.status(200).json(`Meeting deleted successfully`)
    next()
  } catch (err) {
    next(err)
  }
})

module.exports = router