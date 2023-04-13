const mongoose = require("mongoose");
require("dotenv").config({});

const connectDb = () => {
  mongoose
    .connect(process.env.MONGODB_CONNECTION, {
      dbName: process.env.DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`mongodb conected`);
    })
    .catch((err) => console.log({ err }));
  // mongoose
  //   .connect(process.env.MONGODB_CONNECTION, {
  //     dbName: process.env.DB_NAME,
  //   })
  //   .then((db) => {
  //     const { host, name } = db.connection;
  //     console.log(`DB=${name} & HOST=${host}`);
  //   })
  //   .catch((err) => {
  //     console.log({ err });
  //     // process.exit(1);
  //   });
};

module.exports = connectDb;
