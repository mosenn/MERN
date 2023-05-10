const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connecetToDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URL);

    console.log(`db is connect at ${connect.connection.host}`);
  } catch (err) {
    console.log(err.message, "data base cant connect");
    process.exit(1);
  }
};

module.exports = connecetToDb;
