exports.seed = function (knex) {
    return knex("users").insert([
      {
        user_id: 0,
        username: "happycrafts",
        password: "$2a$08$5dhacrowoNUSKFF3T4Gdj.JDljMcU.vXVjgoOdt3jbgxi3Tc/blfS",
      },
      {
        user_id: 1,
        username: "marketplace",
        password: "$2a$08$5dhacrowoNUSKFF3T4Gdj.JDljMcU.vXVjgoOdt3jbgxi3Tc/blfS",
      },
      {
        user_id: 2,
        username: "Ultra-Nate Feast Master",
        password: "$2a$08$5dhacrowoNUSKFF3T4Gdj.JDljMcU.vXVjgoOdt3jbgxi3Tc/blfS",
      },
      {
        user_id: 3,
        username: "Jay Feaster",
        password: "$2a$08$5dhacrowoNUSKFF3T4Gdj.JDljMcU.vXVjgoOdt3jbgxi3Tc/blfS",
      },
      {
        user_id: 4,
        username: "Kay Foody",
        password: "$2a$08$5dhacrowoNUSKFF3T4Gdj.JDljMcU.vXVjgoOdt3jbgxi3Tc/blfS",
      },
      {
        user_id: 5,
        username: "Abe Smorgasbord IV",
        password: "$2a$08$5dhacrowoNUSKFF3T4Gdj.JDljMcU.vXVjgoOdt3jbgxi3Tc/blfS",
      },
    ]);
  };