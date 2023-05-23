const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectingToDatabase = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://mnazgul:qse8303893@cluster0.zutazhf.mongodb.net/movies"
    );
    console.log(`data base is connect at ${connect.connection.host}`);
  } catch (err) {
    console.log("This Error about mongodb connection", err);
    console.log(err.message, "mongodb connection err messsage");
    process.exit(1);
  }
};

module.exports = connectingToDatabase;
