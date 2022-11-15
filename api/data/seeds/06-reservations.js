exports.seed = function (knex) { 
   
  return knex('foods').insert([
    { reservation_id: 0,
      food_id: 0,
      user_id: 2,
      meeting_id: 0,
    },
    { reservation_id: 1,
      food_id: 1,
      user_id: 3,
      meeting_id: 0,
    },
    { 
        reservation_id: 2,
      food_id: 2,
      user_id: 4,
      meeting_id: 0,
    },
    { 
      reservation_id: 3,
      user_id: 2,
      meeting_id: 1,
     },
    { 
      reservation_id: 4,
      food_id: 4,
      user_id: 3,
      meeting_id: 1,
      },
    { 
      reservation_id: 5,
      food_id: 5,
      user_id: 4,
      meeting_id: 1,
    },
    { 
      reservation_id: 6,
      user_id: 2,
      meeting_id: 1,
    },
    { 
      reservation_id: 7,
      food_id: 7,
      user_id: 3,
      meeting_id: 1,
    },
    { 
      reservation_id: 8,
      user_id: 4,
      meeting_id: 2,
    },
    { 
      reservation_id: 9,
      user_id: 2,
      meeting_id: 2,
     },
    { 
      reservation_id: 10,
      food_id: 10,
      user_id: 3,
      meeting_id: 2,
      },
      { 
        reservation_id: 11,
        food_id: 11,
        user_id: 3,
        meeting_id: 3,
      },
      { 
        reservation_id: 12,
        food_id: 12,
        user_id: 4,
        meeting_id: 3,
      },
      { 
        reservation_id: 13,
        user_id: 2,
        meeting_id: 3,
       },
      { 
        reservation_id: 14,
        food_id: 14,
        user_id: 3,
        meeting_id: 4,
        },
      { 
        reservation_id: 15,
        food_id: 15,
        user_id: 4,
        meeting_id: 4,
      },
      { 
        reservation_id: 16,
        user_id: 2,
        meeting_id: 4,
      },
      { 
        reservation_id: 17,
        food_id: 17,
        user_id: 3,
        meeting_id: 5,
      },
      { 
        reservation_id: 18,
        user_id: 4,
        meeting_id: 5,
      },
      { 
        reservation_id: 19,
        user_id: 2,
        meeting_id: 5,
       },
      { 
        reservation_id: 20,
        food_id: 20,
        user_id: 3,
        meeting_id: 5,
    },
  ])
};