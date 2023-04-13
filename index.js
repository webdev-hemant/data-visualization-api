const express = require("express");
// const contactRouter = require("./routes/contactRoutes");
// const practiceRouter = require("./routes/practiceRoutes");
const connectDb = require("./config/dbConnection");
// const errorHandler = require("./middlerwares/errorHandle");
require("dotenv").config({});
const app = express();
const port = process.env.PORT;

// db connection
connectDb();

// middlewares
app.use(express.json());

// routes middlewares
// app.use("/api/contact", contactRouter);
// app.use("/api/practice", practiceRouter);

app.get("/", (req, res) => {
  res.json({ message: "hellow world" });
});

// app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
