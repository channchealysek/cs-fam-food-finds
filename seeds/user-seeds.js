const { User } = require("../models");

const userdata = [
  {
    username: "madalyne",
    password: "password123"
  },
  {
    username: "douglas",
    password: "password123"
  },
  {
    username: "channchealy",
    password: "password123"
  },
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;