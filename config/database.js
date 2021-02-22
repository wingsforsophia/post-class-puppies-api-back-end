const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect("mongodb://localhost/puppies", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
db.on("connected", () => {
  console.log(
    `Mongoose connected to MongoDB ${db.name} on ${db.host}:${db.port}.`
  );
});
