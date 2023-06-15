const chris = require("mongoose");

const db = "mongodb://0.0.0.0:27017/OSASCARdatabase";

const database = async () => {
  try {
    const dbcon = await chris.connect(db);
    console.log("  ");
    console.log(`OSAS CAR DATABASE IS CONNECTED TO ${dbcon.connection.host}`);
  } catch (error) {
    console.log("an error occured");
  }
};

module.exports = database();
