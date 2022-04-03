const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb://localhost:5000/web15validation");
};
