const db = require('../data/db-config')


function findBy(filter) {
  return db('reservations').where(filter)
}

//confirm the existence of a single reservation
function findById(reservation_id) {
  return db('reservations').where('reservation_id', reservation_id).first()
}

// get all of a user's reservations
function findByUserID(user_id) {
  return db('reservations').where('user_id', user_id)
}

// get all of a meeting's reservations
function findByMeetingID(meeting_id) {
  return db('reservations').where('user_id', meeting_id)
}

async function insertReservation(reservation) {
  const [newReservationObject] = await db('reservations')
      .insert(reservation, [
        'reservation_id',
        'food_id',
        'user_id',
        'meeting_id',
    ])
  return newReservationObject
}

// this could happen frequently due to food choices
async function updateReservation(reservation, reservation_id) {
  const [newReservationObject] = await db('reservations')
    .update(reservation, [
      'reservation_id',
      'food_id',
      'user_id',
      'meeting_id',
    ])
    .where('reservation_id', reservation_id)
  return newReservationObject
}

function remove(reservation_id) {
  return db('reservations').where('reservation_id', reservation_id).del()
}

module.exports = {
  findBy,
  findById,
  findByUserID,
  findByMeetingID,
  insertReservation,
  updateReservation,
  remove,
}