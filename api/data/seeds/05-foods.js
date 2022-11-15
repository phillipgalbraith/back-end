exports.seed = function (knex) {
    return knex('foods').insert([
      {
        food_id: 0,
        name: 'beignets',
        meeting_id: 0,
      },
      {
        food_id: 1,
        name: 'bagels',
        meeting_id: 0,
      },
      {
        food_id: 2,
        name: 'brown rice pilaf',
        meeting_id: 0,
      },
      {
        food_id: 3,
        name: 'stuffed peppers',
        meeting_id: 0,
       },
      {
        food_id: 4,
        name: 'stew',
        meeting_id: 1,
        },
      {
        food_id: 5,
        name: 'soup',
        meeting_id: 1,
      },
      {
        food_id: 6,
        name: 'casserole',
        meeting_id: 1,
      },
      {
        food_id: 7,
        name: 'juice',
        meeting_id: 1,
      },
      {
        food_id: 8,
        name: 'cookies',
        meeting_id: 2,
      },
      {
        food_id: 9,
        name: 'chips',
        meeting_id: 2,
       },
      {
        food_id: 10,
        name: 'sandwiches',
        meeting_id: 2,
        },
      {
        food_id: 11,
        name: 'bread',
        meeting_id: 2,
      },
      {
        food_id: 12,
        name: 'stew',
        meeting_id: 3,
        },
      {
        food_id: 13,
        name: 'soup',
        meeting_id: 4,
      },
      {
        food_id: 14,
        name: 'casserole',
        meeting_id: 4,
      },
      {
        food_id: 15,
        name: 'juice',
        meeting_id: 4,
      },
      {
        food_id: 16,
        name: 'cookies',
        meeting_id: 4,
      },
      {
        food_id: 17,
        name: 'chips',
        meeting_id: 5,
       },
      {
        food_id: 18,
        name: 'sandwiches',
        meeting_id: 5,
        },
      {
        food_id: 19,
        name: 'bread',
        meeting_id: 5,
      },
    ])
  }