exports.seed = function (knex) {
    return knex('meetings').insert([
      {
        meeting_id: 0,
        name: 'Feast Fest',
        date: '11/12/2023',
        time: '01:00 pm MT',
        location:'Church Ranch Event Center',
        user_id: 2,
      },
      {
        meeting_id: 2,
        name: 'Smorgadsbord Family Reunion',
        date: '01/12/2023',
        time: '4:00 pm CST',
        location:'The Quixotic World Magical Event Space',
        user_id: 2,
      },
      {
        meeting_id: 3,
        name: 'Foody Chat',
        date: '10/02/2023',
        time: '3:00 pm CST',
        location:'Jupiter Gardens Event Center',
        user_id: 3,
       },
      {
        meeting_id: 4,
        name: 'Brunch on the Bayou',
        date: '10/10/2023',
        time: '11:00 CST',
        location:'LeBossier Hotel & Event Center',
        user_id: 4,
        },
      {
        meeting_id: 5,
        name: 'Beignets and Breakfast',
        date: '01/02/2023',
        time: '10:00 am CST',
        location:'Kenner City Park Pavilion',
        user_id: 5,
      },
    ])
  }