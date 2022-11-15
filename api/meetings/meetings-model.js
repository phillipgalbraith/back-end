const db = require('../data/db-config')


function findBy(filter) {
  return db('meetings').where(filter)
}

function findById(meeting_id) {
  return db('meetings').where('meeting_id', meeting_id).first()
}

function findByUserID(user_id) {
  return db('meetings').where('user_id', user_id)
}

async function insertMeeting(meeting) {
  const [newMeetingObject] = await db('meetings')
      .insert(meeting, [
        'meeting_id',
        'name',
        'date',
        'time',
        'location',
        'user_id'
    ])
  return newMeetingObject
}
  
async function updateMeeting(meeting, meeting_id) {
  const [newMeetingObject] = await db('meetings')
    .update(meeting, [
        'meeting_id',
        'name',
        'date',
        'time',
        'location',
        'user_id',
    ])
    .where('meeting_id', meeting_id)
  return newMeetingObject
}

function remove(meeting_id) {
  return db('meetings').where('meeting_id', meeting_id).del()
}

module.exports = {
  findBy,
  findById,
  findByUserID,
  insertMeeting,
  updateMeeting,
  remove,
}