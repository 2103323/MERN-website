require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/auth-route");
const contactRouter = require("./routes/contact-route");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");



// lets tckle cors issue
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  // optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// to get the json data in express app.
app.use(express.json());

// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", router);
app.use("/api/form", contactRouter);
app.use(errorMiddleware);

const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});