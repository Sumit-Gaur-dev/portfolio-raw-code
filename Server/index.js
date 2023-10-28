const express = require("express");
const dotenv = require("dotenv");
const app = express();
const Port = 4000;
const router = require("./routes/router.js");
const cors = require("cors");

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(Port, () => {
  console.log(`app is listening on the port ${Port}`);
});
