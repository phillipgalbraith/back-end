const db = require('../data/db-config')

function getFoods() {
  return db('foods')
}

function findBy(filter) {
  return db('').where(filter)
}

function findByMeetingId(meeting_id) {
  return db('foods').where('meeting_id', meeting_id)
}


async function insertFood(food) {
  const [newFoodObject] = await db('foods')
      .insert(food, [
        'food_id',
        'name',
        'meeting_id',
        ])
  return newFoodObject
}
 
function remove(food_id) {
  return db('foods').where('food_id', food_id).del()
}

module.exports = {
  getFoods,
  findBy,
  findByMeetingId,
  insertFood,
  remove,
}